const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// 1. Connect to MongoDB Cluster
console.log('Connecting to MongoDB Atlas Cluster...');
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✓ Successfully connected to MongoDB Atlas (Database: motomart)');
  })
  .catch((err) => {
    console.error('✗ MongoDB Connection Error:', err.message);
  });

// 2. Define User / Account Schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email address is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
  },
  password: {
    type: String,
    default: null
  },
  name: {
    type: String,
    trim: true,
    default: 'Rider'
  },
  phone: {
    type: String,
    trim: true,
    default: ''
  },
  source: {
    type: String,
    default: 'account_registration'
  },
  accessCount: {
    type: Number,
    default: 1
  },
  lastAccessAt: {
    type: Date,
    default: Date.now
  },
  registeredAt: {
    type: Date,
    default: Date.now
  },
  orders: [
    {
      orderId: String,
      totalAmount: Number,
      itemsCount: Number,
      paymentMethod: String,
      createdAt: { type: Date, default: Date.now }
    }
  ]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// 3. API Routes

// Health Check
app.get('/api/health', (req, res) => {
  const dbState = mongoose.connection.readyState;
  const states = ['Disconnected', 'Connected', 'Connecting', 'Disconnecting'];
  res.json({
    status: 'ok',
    database: states[dbState] || 'Unknown',
    timestamp: new Date().toISOString()
  });
});

// Register New Account with Password Confirmation
app.post('/api/register', async (req, res) => {
  try {
    const { email, name, phone, password, confirmPassword, source } = req.body;

    if (!email || !email.trim()) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
    }

    const cleanEmail = email.trim().toLowerCase();

    // Password validation (if registering an account)
    let hashedPassword = null;
    if (password !== undefined) {
      if (!password || password.length < 6) {
        return res.status(400).json({ success: false, message: 'Password must be at least 6 characters long.' });
      }
      if (confirmPassword !== undefined && password !== confirmPassword) {
        return res.status(400).json({ success: false, message: 'Passwords do not match. Please confirm your password.' });
      }
      hashedPassword = await bcrypt.hash(password, 10);
    }

    // Check if user already exists
    let user = await User.findOne({ email: cleanEmail });

    if (user) {
      // If user exists and already has a password set, block duplicate registration
      if (user.password && password) {
        return res.status(400).json({
          success: false,
          message: 'An account with this email already exists. Please Sign In instead.'
        });
      }

      // If user existed from newsletter/guest checkout, upgrade with password
      if (hashedPassword) {
        user.password = hashedPassword;
      }
      if (name && name.trim()) user.name = name.trim();
      if (phone && phone.trim()) user.phone = phone.trim();
      user.accessCount += 1;
      user.lastAccessAt = new Date();
      await user.save();

      return res.status(200).json({
        success: true,
        isNewUser: false,
        message: `Account set up successfully! Welcome, ${user.name || 'Rider'}.`,
        user: {
          id: user._id,
          email: user.email,
          name: user.name,
          phone: user.phone,
          accessCount: user.accessCount,
          registeredAt: user.registeredAt
        }
      });
    }

    // Create new registered user
    user = new User({
      email: cleanEmail,
      password: hashedPassword,
      name: name?.trim() || 'Rider',
      phone: phone?.trim() || '',
      source: source || (password ? 'account_registration' : 'website_access'),
      accessCount: 1,
      registeredAt: new Date(),
      lastAccessAt: new Date()
    });

    await user.save();

    console.log(`[MongoDB] New Account Created: ${cleanEmail} (Name: ${user.name})`);

    return res.status(201).json({
      success: true,
      isNewUser: true,
      message: 'Account created and secured in MongoDB! Welcome to MotoMart 🎉',
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        accessCount: user.accessCount,
        registeredAt: user.registeredAt
      }
    });
  } catch (error) {
    console.error('Registration API error:', error);
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: 'This email is already registered. Please Sign In.' });
    }
    return res.status(500).json({ success: false, message: error.message || 'Server error during registration.' });
  }
});

// Sign In / Login Route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide both email and password.' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: cleanEmail });

    if (!user) {
      return res.status(400).json({ success: false, message: 'No account found with this email. Please create a new account.' });
    }

    if (!user.password) {
      return res.status(400).json({ success: false, message: 'No password has been set for this email. Please register to set your password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Incorrect password. Please try again.' });
    }

    // Update access metadata
    user.accessCount += 1;
    user.lastAccessAt = new Date();
    await user.save();

    return res.json({
      success: true,
      message: `Welcome back, ${user.name || 'Rider'}!`,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        accessCount: user.accessCount,
        registeredAt: user.registeredAt
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Login failed due to server error.' });
  }
});

// Record Order against Email
app.post('/api/record-order', async (req, res) => {
  try {
    const { email, orderId, totalAmount, itemsCount, paymentMethod } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    const cleanEmail = email.trim().toLowerCase();
    let user = await User.findOne({ email: cleanEmail });

    if (!user) {
      user = new User({
        email: cleanEmail,
        source: 'checkout_purchase'
      });
    }

    user.orders.push({
      orderId,
      totalAmount: Number(totalAmount) || 0,
      itemsCount: Number(itemsCount) || 1,
      paymentMethod: paymentMethod || 'upi'
    });

    user.lastAccessAt = new Date();
    await user.save();

    res.json({ success: true, message: 'Order recorded to MongoDB user profile.' });
  } catch (error) {
    console.error('Record order error:', error);
    res.status(500).json({ success: false, message: 'Failed to record order.' });
  }
});

// Get Database Summary Stats
app.get('/api/stats', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const recentUsers = await User.find().sort({ lastAccessAt: -1 }).limit(5).select('email name registeredAt lastAccessAt accessCount source');
    res.json({
      success: true,
      totalRegisteredUsers: totalUsers,
      recentUsers
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch stats.' });
  }
});

// Serve frontend for any unmatched route
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🚀 MotoMart Server running on http://localhost:${PORT}`);
  console.log(`📡 Connected to MongoDB Atlas Cluster`);
  console.log(`====================================================`);
});
