/**
 * RIDERLY — 2026 EDITION CORE SCRIPT
 * Comprehensive e-commerce functionality:
 * - Rich Catalog with Certifications & Specs
 * - Persistent Cart & Wishlist (localStorage)
 * - Free Shipping Tracker & Coupon Code System
 * - Advanced Filtering, Search & Sorting
 * - Product Detail / Quick View Modal with Pincode Estimator
 * - Sizing Guide Modal & Fit Charts
 * - Simulated 3-Step Checkout with Receipt Generation
 * - Dark / Light Theme Toggle & FAQ Accordion
 */

// ==========================================
// 1. PRODUCT DATASET (2026 COLLECTION)
// ==========================================
const products = [
  {
    id: 'prod-01',
    name: 'Trailblazer Carbon Helmet',
    desc: 'Dual-homologated all-weather helmet with drop-down sun visor and Pinlock 120 ready shield.',
    longDesc: 'Engineered with an ultra-light carbon-aramid shell for maximum energy dissipation. Features multi-channel venturi ventilation and hypoallergenic moisture-wicking cheek pads with emergency pull-tabs.',
    price: 2499,
    originalPrice: 3499,
    category: 'safety',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcReFyKdaXEy6xBpWX8U5vJ1nnrX7D6xkGmJ3v7DSI3eGRBUKv4jel17daDtGqQpmiUs48NLCwAFUFm7O4SwGZxKS1potjdOwJJicEd4WdN8VGKEqujnZvltqQ',
    tone: 'orange',
    badge: 'BESTSELLER',
    rating: 4.9,
    reviewCount: 312,
    stock: 5,
    sizes: ['S (55-56cm)', 'M (57-58cm)', 'L (59-60cm)', 'XL (61-62cm)'],
    specs: {
      'Safety Certification': 'ECE 22.06 & DOT FMVSS 218',
      'Shell Material': 'Carbon-Kevlar Composite',
      'Weight': '1,320g ± 40g',
      'Visor': 'Optical Class 1 with UV400 Protection',
      'Warranty': '3 Years Crash Replacement'
    },
    reviews: [
      { user: 'Nihar Mistry', rating: 5, comment: 'Phenomenal helmet. The aerodynamics at 120km/h are rock steady. Zero buffeting.' },
      { user: 'Siddharth M.', rating: 5, comment: 'Very plush interior and the sun-visor mechanism is silky smooth.' }
    ]
  },
  {
    id: 'prod-02',
    name: 'Shift Pro Carbon Gloves',
    desc: 'Track-grade goat leather with molded carbon knuckle armor and conductive capacitive fingertips.',
    longDesc: 'Designed for aggressive touring and track days. Pre-curved fingers reduce forearm pump, while Kevlar palm sliders absorb abrasion during high-speed slides.',
    price: 899,
    originalPrice: 1299,
    category: 'comfort',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMjBkIFsidMzc2ERrulZSjRj_U4sInYv1EfqxG1W80Q&s=10',
    tone: 'dark',
    badge: null,
    rating: 4.8,
    reviewCount: 184,
    stock: 14,
    sizes: ['S (8.0")', 'M (8.5")', 'L (9.0")', 'XL (9.5")'],
    specs: {
      'Safety Level': 'CE Level 2 EN 13594:2015',
      'Material': 'Full Grain Goat Leather + Kevlar Stitching',
      'Knuckle Armor': 'Real Carbon Fiber Guard',
      'Closure': 'Dual Cuff Velcro Retention',
      'Touchscreen': 'Index Finger & Thumb Smart Conductive'
    },
    reviews: [
      { user: 'Tushita Bharwad', rating: 5, comment: 'Great tactile feedback on clutch and brake levers. Phone screen response is instant.' }
    ]
  },
  {
    id: 'prod-03',
    name: 'Lumix Pro Auxiliary Pods',
    desc: 'High-intensity dual LED driving lights throwing 8,000 lumens of fog-penetrating spot and flood beam.',
    longDesc: 'CNC-machined from 6061-T6 billet aluminum with an IP68 fully submersible waterproof rating. Includes plug-and-play wiring harness and handlebar-mounted waterproof toggle.',
    price: 1299,
    originalPrice: 1899,
    category: 'tech',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYSvskgb4UA8cMzRDq_mm8VcMoJSnSSJkHX9uylMlJSQ&s=10',
    tone: 'blue',
    badge: 'NEW',
    rating: 4.9,
    reviewCount: 96,
    stock: 8,
    sizes: ['Universal Handlebar / Crashbar Mount'],
    specs: {
      'Luminous Flux': '8,000 Lumens / Pair',
      'Power Draw': '60W Total @ 12V DC',
      'Waterproof Rating': 'IP68 Submersible up to 3m',
      'Housing': 'Billet CNC 6061-T6 Aluminum',
      'Warranty': '2 Years All-Weather Replacement'
    },
    reviews: [
      { user: 'Elvish Amanna', rating: 5, comment: 'Luminosity is unbelievable. Turns pitch-black highway stretches into broad daylight.' }
    ]
  },
  {
    id: 'prod-04',
    name: 'Vanguard Utility Roll Pack',
    desc: '100% waterproof TPU roll-top tail pack with quick-release magnetic Fidlock buckles.',
    longDesc: '35L expandable capacity equipped with laser-cut MOLLE webbing and reflective 3M Scotchlite panels for maximum night visibility on interstate rides.',
    price: 1799,
    originalPrice: 2299,
    category: 'style',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQUwCymgUlFrKPbm92rkueqpGMl6rWUqBT-2u-8Z8cQ&s',
    tone: 'dark',
    badge: null,
    rating: 4.7,
    reviewCount: 142,
    stock: 12,
    sizes: ['35 Liters Universal'],
    specs: {
      'Material': '1000D TPU Welded Ballistic Nylon',
      'Capacity': '35L (Expandable to 42L)',
      'Waterproof Spec': 'Class 4 Waterproof (Submersion proof)',
      'Mounting': 'Universal 4-Point Quick-Release Straps',
      'Warranty': '5 Years Seam Warranty'
    },
    reviews: [
      { user: 'Vikram A.', rating: 5, comment: 'Rode through a 4-hour monsoon cloudburst in Kerala. Not a single drop entered the pack.' }
    ]
  },
  {
    id: 'prod-05',
    name: 'Roadside Precision Tool Kit',
    desc: '28-piece metric toolset forged from chrome-vanadium steel in a heavy-duty Cordura tool roll.',
    longDesc: 'Curated specifically for motorcycle roadside adjustments. Includes reversible ratchet, Allen key set, Torx bits, tire plug kit, and compact CO2 inflator.',
    price: 1499,
    originalPrice: 1999,
    category: 'tech',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9QAoJl-m4nqMF_Pi3nKFfmO-ooRq5rdaxKxaUYdKIg&s=10',
    tone: 'orange',
    badge: null,
    rating: 4.8,
    reviewCount: 77,
    stock: 20,
    sizes: ['Compact Roll-Up (Universal)'],
    specs: {
      'Steel Grade': 'Cr-V Chrome Vanadium Heavy Duty',
      'Pieces': '28 Specialized Metric Tools',
      'Pouch': '1680D Cordura Roll Organizer',
      'Weight': '940g Total'
    },
    reviews: [
      { user: 'Aditya P.', rating: 5, comment: 'A lifesaver on highway breakdowns. Every essential tool is tightly packed.' }
    ]
  },
  {
    id: 'prod-06',
    name: 'Aero Polarized Riding Sunglasses',
    desc: 'Wrap-around TR90 memory frames with anti-fog polarized TAC lenses for glare-free riding.',
    longDesc: 'Designed to slide comfortably under helmet cheek pads without temple pinching. Provides 100% UV400 filtration and shatterproof ballistic impact resistance.',
    price: 1299,
    originalPrice: 1699,
    category: 'style',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80',
    tone: 'blue',
    badge: null,
    rating: 4.6,
    reviewCount: 110,
    stock: 18,
    sizes: ['Standard Wrap-Around Fit'],
    specs: {
      'Lens': '7-Layer Triacetate TAC Polarized',
      'UV Protection': 'UV400 Category 3',
      'Frame': 'Ultra-Flexible TR90 Swiss Polymer',
      'Weight': '24 grams'
    },
    reviews: [
      { user: 'Gaurav J.', rating: 5, comment: 'Zero pressure on the ears under my full-face helmet. Optical clarity is sharp.' }
    ]
  },
  {
    id: 'prod-07',
    name: 'Thermal Wind-Shield Neck Gaiter',
    desc: 'Seamless micro-fleece neck warmer with windproof chest bib and laser-cut breathing port.',
    longDesc: 'Blocks chilling wind at highway speeds while allowing effortless breathability without fogging your helmet visor. Anti-odor silver-ion treated fabric.',
    price: 399,
    originalPrice: 599,
    category: 'comfort',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcT7G-pk5fP01nQ-K_Vlh7CbJZBZwmiP80CJO08BEkrg&s=10',
    tone: 'orange',
    badge: null,
    rating: 4.7,
    reviewCount: 228,
    stock: 35,
    sizes: ['One Size Fits All (Elastic Stretch)'],
    specs: {
      'Fabric': 'Polar-Thermal Microfleece + Windstop Bib',
      'Treatment': 'Polygiene Anti-Odor Technology',
      'Care': 'Machine Washable'
    },
    reviews: [
      { user: 'Nikhil R.', rating: 5, comment: 'Crucial for morning winter rides. Keeps the neck warm without stifling.' }
    ]
  },
  {
    id: 'prod-08',
    name: 'Bionic D3O Knee & Shin Guards',
    desc: 'CE Level 2 certified non-Newtonian armor with dual-axis articulation for natural knee flexing.',
    longDesc: 'Soft and pliable while riding, but locks rigid in milliseconds upon impact to absorb 90% of blunt force energy. Perforated neoprene straps ensure zero slipping.',
    price: 999,
    originalPrice: 1499,
    category: 'safety',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCinwIS4gkBd87Ey9HNB4EmzTCJEN1T3aZRFoAMAKxTg&s=10',
    tone: 'lime',
    badge: null,
    rating: 4.8,
    reviewCount: 165,
    stock: 3,
    sizes: ['Universal Adjustable Fit (Dual Strap)'],
    specs: {
      'Armor Rating': 'CE Level 2 (EN 1621-1:2012)',
      'Impact Core': 'Genuine D3O Shock Absorbing Polymer',
      'Ventilation': 'Active Flow Air Vents'
    },
    reviews: [
      { user: 'Harish K.', rating: 5, comment: 'Fits comfortably under or over riding pants. Doesn’t slide down while walking.' }
    ]
  },
  {
    id: 'prod-09',
    name: 'All-Terrain Armored Touring Jacket',
    desc: '600D Cordura textile jacket with removable thermal liner, 100% waterproof membrane, and Level 2 armor.',
    longDesc: 'Features 8 heavy-duty ventilation zips for tropical heat, magnetic storm flap over main zipper, 3M Scotchlite reflective stripes, and internal hydration pack bladder pouch.',
    price: 4999,
    originalPrice: 6999,
    category: 'safety',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80',
    tone: 'dark',
    badge: 'NEW',
    rating: 4.9,
    reviewCount: 94,
    stock: 4,
    sizes: ['S (38")', 'M (40")', 'L (42")', 'XL (44")'],
    specs: {
      'Shell': '600D Cordura + 1000D Ballistic Elbow Panels',
      'Armor': 'CE Level 2 Back, Shoulders & Elbows',
      'Waterproofness': 'Reissa Breathable Membrane (10,000mm)',
      'Liners': 'Removable Thermal + Rain Liners'
    },
    reviews: [
      { user: 'Tanmay B.', rating: 5, comment: 'The build quality matches jackets double its price. Extremely protective and comfortable.' }
    ]
  },
  {
    id: 'prod-10',
    name: 'Interceptor Adventure Riding Boots',
    desc: 'Full-height waterproof leather boots with integrated TPU ankle discs and reinforced steel shank sole.',
    longDesc: 'Oil-resistant and slip-resistant vulcanized rubber tread provides unshakeable footpeg grip in muddy or rainy conditions. Features dual micro-adjustable aluminum cam-lock buckles.',
    price: 2999,
    originalPrice: 3999,
    category: 'safety',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwzEKUtsIHVGhWBSKoVAFFd-jbhaHwDdSeknCrCjMZMw&s=10',
    tone: 'blue',
    badge: null,
    rating: 4.8,
    reviewCount: 88,
    stock: 6,
    sizes: ['EU 41 (UK 7)', 'EU 42 (UK 8)', 'EU 43 (UK 9)', 'EU 44 (UK 10)'],
    specs: {
      'Certification': 'CE EN 13634:2017 Certified',
      'Material': 'Full Grain Microfiber Leather + TPU Guards',
      'Sole': 'Vibram Compound Enduro Lugged Sole',
      'Waterproofing': 'DryTech Breathable Membrane'
    },
    reviews: [
      { user: 'Manish C.', rating: 5, comment: 'Sturdy ankle protection and great shift lever feel right out of the box.' }
    ]
  },
  {
    id: 'prod-11',
    name: 'ShineXPro 1500 GSM Microfiber Towel',
    desc: 'Extra-thick 1500 GSM twisted-loop microfiber drying towel (60x40 CM) for swirl-free detailing.',
    longDesc: 'Constructed from premium Korean twisted-loop microfiber yarn, boasting an astounding 1500 GSM density. Effortlessly drinks up water from motorbike fairings, fuel tanks, visors, and chrome without leaving micro-marring, lint, or water spots.',
    price: 645,
    originalPrice: 749,
    category: 'maintenance',
    image: 'images/microfiber-cloth.png',
    tone: 'dark',
    badge: 'SALE',
    rating: 4.3,
    reviewCount: 1540,
    stock: 25,
    sizes: ['Large 60x40 CM (Single Pack)'],
    specs: {
      'Density': '1500 GSM Ultra-Plush',
      'Weave Type': 'Korean Twisted-Loop Scratchless Yarn',
      'Dimensions': '60 cm x 40 cm',
      'Edging': 'Silk-Banded Anti-Scratch Border',
      'Lint Free': '100% Guaranteed Scratch & Streak Free'
    },
    reviews: [
      { user: 'Abhishek R.', rating: 5, comment: 'Dries my entire motorcycle in one single pass. Absorbs water like a giant sponge.' },
      { user: 'Kunal P.', rating: 4, comment: 'Super thick and very soft. No scratches on my glossy black tank.' }
    ]
  },
  {
    id: 'prod-12',
    name: 'SHEEBA All-in-One Liquid Polish & Protectant',
    desc: 'Multipurpose surface polish for motorbike fairings, paintwork, rubber, and chrome accents.',
    longDesc: 'Professional-grade formulation that restores showroom gloss and provides a durable hydrophobic barrier against UV fading, road grime, and dust buildup on fuel tanks, side panels, and exhaust heat-shields.',
    price: 136,
    originalPrice: 160,
    category: 'maintenance',
    image: 'images/sheeba-polish.png',
    tone: 'orange',
    badge: 'AMAZON CHOICE',
    rating: 4.0,
    reviewCount: 44100,
    stock: 50,
    sizes: ['200 ml Spray Bottle + Foam Applicator'],
    specs: {
      'Volume': '200 ml Trigger Spray Bottle',
      'Applicator': 'High-Density Detailing Sponge Included',
      'Surface Compatibility': 'Paint, Plastic, Rubber, Vinyl & Metal',
      'Finish': 'High-Gloss Hydrophobic Protective Sheen'
    },
    reviews: [
      { user: 'Sameer K.', rating: 4, comment: 'Makes black engine covers and textured fairings look brand new. Very easy to buff out.' }
    ]
  },
  {
    id: 'prod-13',
    name: 'Boldfit UV-Shield Riding Balaclava Mask',
    desc: 'Full-face breathable riding balaclava with UPF 50+ UV protection and moisture-wicking stretch mesh.',
    longDesc: 'Engineered for long-distance summer and monsoon touring. The 4-way stretch ice-silk blend keeps facial skin cool, absorbs sweat before it reaches your helmet liner, and prevents dust inhalation on dusty highway stretches.',
    price: 329,
    originalPrice: 999,
    category: 'comfort',
    image: 'images/boldfit-balaclava.png',
    tone: 'dark',
    badge: 'HOT DEAL',
    rating: 4.0,
    reviewCount: 3300,
    stock: 40,
    sizes: ['Universal Ergonomic Stretch (Black)'],
    specs: {
      'Material': 'Breathable Ice-Silk Lycra Blend',
      'UV Rating': 'UPF 50+ Sun & Dust Protection',
      'Design': 'Hinged Open-Nose / Full Coverage Convertible',
      'Anti-Fog': 'Mesh Airway Chamber for Eyewear & Visors'
    },
    reviews: [
      { user: 'Tushita Bharwad', rating: 5, comment: 'Very soft on the skin and fits under tight helmet cheek pads without bunching up.' }
    ]
  },
  {
    id: 'prod-14',
    name: 'Portronics Mobike 4 Heavy-Duty Bike Phone Mount',
    desc: 'Vibration-dampened 360° rotational smartphone mount with anti-shake quad-corner mechanical lock.',
    longDesc: 'Engineered with high-tensile nylon claws and shock-absorbing silicone corners that lock smartphones (4.7" to 7.0") securely even on violent potholed roads and off-road trails. Fits handlebars from 22mm to 32mm diameter.',
    price: 296,
    originalPrice: 699,
    category: 'tech',
    image: 'images/portronics-phone-mount.png',
    tone: 'blue',
    badge: 'BESTSELLER',
    rating: 4.1,
    reviewCount: 2900,
    stock: 18,
    sizes: ['Universal Handlebar Clamp (4.7" - 7.0" Phones)'],
    specs: {
      'Compatibility': 'Smartphones from 4.7 to 7.0 inches',
      'Clamp Size': 'Fits 22mm - 32mm Handlebar Tubes',
      'Rotation': 'Full 360-Degree Ball Joint Swivel',
      'Locking': 'Mechanical Auto-Lock Quad Clamp',
      'Warranty': '1 Year Brand Warranty'
    },
    reviews: [
      { user: 'Nihar Mistry', rating: 5, comment: 'Holds my phone rock solid on highways at 110km/h. Never budges on speed breakers.' }
    ]
  },
  {
    id: 'prod-15',
    name: 'Anti-Slip Motorcycle Gear Shift Shoe Protector',
    desc: 'Durable TPU shift pad with non-slip textured contact patch and adjustable elastic strap.',
    longDesc: 'Prevents unsightly scuffs, tears, and black clutch-dust stains on your favorite riding boots or sneakers. Fastens quickly over the toe box and laces with reinforced industrial Velcro.',
    price: 199,
    originalPrice: 599,
    category: 'comfort',
    image: 'images/shoe-protector.png',
    tone: 'lime',
    badge: 'CRAZY DEAL',
    rating: 4.1,
    reviewCount: 92,
    stock: 30,
    sizes: ['Universal Elastic Fit (All Shoes)'],
    specs: {
      'Material': 'Wear-Resistant TPU Rubber + Elastic Webbing',
      'Fastening': 'Dual-Secure Shoelace Hook & Sole Strap',
      'Grip': 'Anti-Slip Raised Hexagon Contact Pattern',
      'Weight': '35 grams'
    },
    reviews: [
      { user: 'Vicky P.', rating: 5, comment: 'Saves my white sneakers on daily office commutes. Easy to put on and take off.' }
    ]
  },
  {
    id: 'prod-16',
    name: 'Yobbo 360° Motorcycle Bottle & Cup Cage',
    desc: 'All-metal adjustable handlebar drink mount for water bottles, travel flasks, and coffee mugs.',
    longDesc: 'Constructed from CNC-milled aluminum alloy clamp with a heavy-duty flexible basket that adjusts to hold bottles from 500ml to 1000ml securely on touring crashbars or handlebars.',
    price: 348,
    originalPrice: 999,
    category: 'comfort',
    image: 'images/cup-holder.png',
    tone: 'blue',
    badge: 'BESTSELLER',
    rating: 3.6,
    reviewCount: 285,
    stock: 15,
    sizes: ['Universal Crashbar / Handlebar (500ml-1000ml)'],
    specs: {
      'Clamp Material': 'CNC Aircraft Aluminum Alloy',
      'Cage Capacity': 'Accommodates 60mm - 85mm Diameter Bottles',
      'Adjustment': '360° Full Axis Swivel',
      'Hardware': 'Stainless Steel Anti-Corrosion Hex Bolts'
    },
    reviews: [
      { user: 'Rakesh T.', rating: 4, comment: 'Very handy on highway rides. Holds a 750ml thermal flask without wobbling.' }
    ]
  },
  {
    id: 'prod-17',
    name: 'OTO2EYE 360° HD Blind Spot Convex Mirrors',
    desc: 'Frameless ultra-thin HD glass convex mirrors with 360° rotatable swivel base for zero blind spots.',
    longDesc: 'Eliminates hazardous blind zones when overtaking or lane-changing. Made from IP65 waterproof real glass that resists hazing, backed by outdoor-rated 3M VHB adhesive that withstands high highway speeds and pressure washes.',
    price: 139,
    originalPrice: 299,
    category: 'safety',
    image: 'images/blind-spot-mirror.png',
    tone: 'orange',
    badge: 'BESTSELLER',
    rating: 4.0,
    reviewCount: 1620,
    stock: 45,
    sizes: ['50mm Diameter Round (Pack of 2)'],
    specs: {
      'Glass Type': 'Curved HD Optical Grade Real Glass',
      'Rotation': '360-Degree Swivel + 20-Degree Tilt Base',
      'Adhesive': 'Heavy-Duty Waterproof 3M VHB Tape',
      'Pack': '2 Pieces (Left & Right Mirrors)'
    },
    reviews: [
      { user: 'Elvish Amanna', rating: 5, comment: 'Gives a wide angle view of approaching trucks and cars on the highway. High safety upgrade for cheap.' }
    ]
  },
  {
    id: 'prod-18',
    name: 'UN1QUE PT400 150PSI Digital Air Compressor',
    desc: 'Heavy-duty 12V 120W portable air pump with high-precision digital gauge, auto-shutoff, and LED work light.',
    longDesc: 'Pumps up bike and car tires rapidly with up to 150 PSI output. Set your target PSI on the bright backlit LCD display, and the compressor automatically shuts off once reached, preventing dangerous over-inflation. Comes with ball pins, presta valve adapter, and emergency flashlight.',
    price: 1599,
    originalPrice: 2099,
    category: 'tech',
    image: 'images/tyre-inflator.png',
    tone: 'orange',
    badge: 'PRO TECH',
    rating: 4.2,
    reviewCount: 2177,
    stock: 10,
    sizes: ['Compact 12V DC Portable Unit'],
    specs: {
      'Max Pressure': '150 PSI / 10.3 BAR',
      'Power Supply': '12V DC (10ft Heavy Duty Cord with Cigarette Plug)',
      'Motor': '120W Pure Copper High-Output Cylinder',
      'Features': 'Digital Auto-Cutoff, Backlit Screen, Built-in LED Flashlight',
      'Accessories': '3 Multi-Use Nozzle Adapters Included',
      'Warranty': '1 Year Replacement Warranty'
    },
    reviews: [
      { user: 'Mahesh K.', rating: 5, comment: 'Inflates my motorcycle tire from 20 to 36 PSI in under 90 seconds. The auto-cutoff is perfectly accurate.' }
    ]
  }
];

// ==========================================
// 2. APPLICATION STATE & LOCALSTORAGE
// ==========================================
const STORAGE_KEYS = {
  CART: 'motomart_cart_2026',
  WISHLIST: 'motomart_wishlist_2026',
  THEME: 'motomart_theme_2026'
};

const FREE_SHIPPING_THRESHOLD = 2999;
const STANDARD_SHIPPING_FEE = 199;

let state = {
  cart: JSON.parse(localStorage.getItem(STORAGE_KEYS.CART) || localStorage.getItem('riderly_cart_2026') || '[]'),
  wishlist: JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHLIST) || localStorage.getItem('riderly_wishlist_2026') || '[]'),
  theme: localStorage.getItem(STORAGE_KEYS.THEME) || localStorage.getItem('riderly_theme_2026') || 'light',
  coupon: null, // { code: 'MOTOMART10', type: 'percent', value: 10 }
  filters: {
    category: 'all',
    search: '',
    maxPrice: 5000,
    inStockOnly: false,
    sortBy: 'featured'
  },
  modalSelectedSize: null,
  activeModalProductId: null
};

// Available coupons
const COUPONS = {
  'MOTOMART10': { type: 'percent', value: 10, label: '10% OFF' },
  'RIDER10': { type: 'percent', value: 10, label: '10% OFF' },
  'WELCOME500': { type: 'flat', value: 500, label: '₹500 OFF' },
  'FREESHIP': { type: 'free_shipping', value: 0, label: 'Free Shipping' }
};

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initEventListeners();
  updateHeaderCounts();
  renderProducts();
  renderCartDrawer();
  renderWishlistDrawer();
});

// ==========================================
// 4. THEME MANAGEMENT
// ==========================================
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem(STORAGE_KEYS.THEME, state.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.innerHTML = `<span class="theme-icon">${state.theme === 'light' ? '🌙' : '☀️'}</span>`;
  }
}

// ==========================================
// 5. EVENT LISTENERS
// ==========================================
function initEventListeners() {
  // Theme Toggle
  document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

  // Mobile Menu
  document.getElementById('menuButton')?.addEventListener('click', () => {
    document.getElementById('mainNav')?.classList.toggle('mobile-active');
  });

  // Search input with debounce
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  
  searchInput?.addEventListener('input', (e) => {
    state.filters.search = e.target.value.toLowerCase().trim();
    if (clearSearchBtn) {
      clearSearchBtn.style.display = state.filters.search ? 'inline-block' : 'none';
    }
    renderProducts();
  });

  clearSearchBtn?.addEventListener('click', () => {
    if (searchInput) {
      searchInput.value = '';
      state.filters.search = '';
      clearSearchBtn.style.display = 'none';
      renderProducts();
      searchInput.focus();
    }
  });

  document.getElementById('searchToggle')?.addEventListener('click', () => {
    searchInput?.focus();
    searchInput?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  // Category filter tabs
  document.querySelectorAll('.category-tabs button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.category-tabs .active')?.classList.remove('active');
      button.classList.add('active');
      state.filters.category = button.dataset.category;
      renderProducts();
    });
  });

  // Sort dropdown
  document.getElementById('sortSelect')?.addEventListener('change', (e) => {
    state.filters.sortBy = e.target.value;
    renderProducts();
  });

  // Price range slider
  const priceRange = document.getElementById('priceRange');
  const priceRangeValue = document.getElementById('priceRangeValue');
  priceRange?.addEventListener('input', (e) => {
    state.filters.maxPrice = Number(e.target.value);
    if (priceRangeValue) {
      priceRangeValue.textContent = `₹${state.filters.maxPrice.toLocaleString('en-IN')}`;
    }
    renderProducts();
  });

  // In-stock toggle
  document.getElementById('inStockToggle')?.addEventListener('change', (e) => {
    state.filters.inStockOnly = e.target.checked;
    renderProducts();
  });

  // Reset filters button
  document.getElementById('resetFiltersBtn')?.addEventListener('click', resetFilters);

  // Cart Drawer open/close
  document.getElementById('cartButton')?.addEventListener('click', openCartDrawer);
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCartDrawer);

  // Wishlist Drawer open/close
  document.getElementById('wishlistButton')?.addEventListener('click', openWishlistDrawer);
  document.getElementById('closeWishlistBtn')?.addEventListener('click', closeWishlistDrawer);
  document.getElementById('wishlistOverlay')?.addEventListener('click', closeWishlistDrawer);

  // Coupon apply
  document.getElementById('applyCouponBtn')?.addEventListener('click', handleCouponApply);
  document.getElementById('couponInput')?.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') handleCouponApply();
  });

  // Product modal close
  document.getElementById('closeProductModalBtn')?.addEventListener('click', closeProductModal);
  document.getElementById('productModalBackdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'productModalBackdrop') closeProductModal();
  });

  // Size Guide modal
  const openSizeGuide = () => openSizeGuideModal();
  document.getElementById('openSizeGuideNav')?.addEventListener('click', (e) => { e.preventDefault(); openSizeGuide(); });
  document.getElementById('heroSizeGuideBtn')?.addEventListener('click', openSizeGuide);
  document.getElementById('openSizeGuideFooter')?.addEventListener('click', (e) => { e.preventDefault(); openSizeGuide(); });
  document.getElementById('closeSizeGuideBtn')?.addEventListener('click', closeSizeGuideModal);
  document.getElementById('sizeGuideModalBackdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'sizeGuideModalBackdrop') closeSizeGuideModal();
  });

  // Size Guide tabs
  document.querySelectorAll('.size-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.size-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.tab;
      document.getElementById('tab-helmets').style.display = target === 'helmets' ? 'block' : 'none';
      document.getElementById('tab-gloves').style.display = target === 'gloves' ? 'block' : 'none';
    });
  });

  // Checkout modal
  document.getElementById('proceedCheckoutBtn')?.addEventListener('click', openCheckoutModal);
  document.getElementById('closeCheckoutBtn')?.addEventListener('click', closeCheckoutModal);
  document.getElementById('backToCartFromCheckout')?.addEventListener('click', () => {
    closeCheckoutModal();
    openCartDrawer();
  });

  // Checkout step 1 -> step 2
  document.getElementById('shippingForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('shipEmail')?.value.trim();
    const name = document.getElementById('shipName')?.value.trim();
    const phone = document.getElementById('shipPhone')?.value.trim();
    if (email) {
      registerUserWithMongoDB({ email, name, phone, source: 'checkout_delivery_step' });
    }
    goToCheckoutStep(2);
  });

  document.getElementById('backToShippingBtn')?.addEventListener('click', () => {
    goToCheckoutStep(1);
  });

  // Payment radio cards
  document.querySelectorAll('.payment-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.payment-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
      const upiBox = document.getElementById('upiDetails');
      const cardBox = document.getElementById('cardDetails');
      const codBox = document.getElementById('codDetails');
      if (upiBox) upiBox.style.display = radio.value === 'upi' ? 'block' : 'none';
      if (cardBox) cardBox.style.display = radio.value === 'card' ? 'block' : 'none';
      if (codBox) codBox.style.display = radio.value === 'cod' ? 'block' : 'none';
    });
  });

  // Credit / Debit Card Input Auto-formatting & Brand Detection
  const cardNumInput = document.getElementById('cardNumberInput');
  const cardBrandBadge = document.getElementById('cardBrandBadge');
  if (cardNumInput) {
    cardNumInput.addEventListener('input', (e) => {
      let raw = e.target.value.replace(/\D/g, '').substring(0, 16);
      let parts = raw.match(/.{1,4}/g);
      e.target.value = parts ? parts.join(' ') : raw;

      // Brand Detection badge
      if (cardBrandBadge) {
        if (raw.startsWith('4')) {
          cardBrandBadge.textContent = '💳 Visa';
        } else if (/^(5[1-5]|2[2-7])/.test(raw)) {
          cardBrandBadge.textContent = '💳 MC';
        } else if (/^(60|65|81|82)/.test(raw)) {
          cardBrandBadge.textContent = '💳 RuPay';
        } else if (/^3[47]/.test(raw)) {
          cardBrandBadge.textContent = '💳 Amex';
        } else {
          cardBrandBadge.textContent = '💳';
        }
      }
    });
  }

  const cardExpiryInput = document.getElementById('cardExpiryInput');
  if (cardExpiryInput) {
    cardExpiryInput.addEventListener('input', (e) => {
      let raw = e.target.value.replace(/\D/g, '').substring(0, 4);
      if (raw.length >= 2) {
        e.target.value = raw.substring(0, 2) + ' / ' + raw.substring(2);
      } else {
        e.target.value = raw;
      }
    });
  }

  // UPI Tab Switcher (QR Code vs Enter UPI ID)
  const qrTabBtn = document.getElementById('upiQrTabBtn');
  const vpaTabBtn = document.getElementById('upiVpaTabBtn');
  const qrPane = document.getElementById('upiQrPane');
  const vpaPane = document.getElementById('upiVpaPane');

  qrTabBtn?.addEventListener('click', () => {
    qrTabBtn.classList.add('active');
    vpaTabBtn?.classList.remove('active');
    if (qrPane) qrPane.style.display = 'block';
    if (vpaPane) vpaPane.style.display = 'none';
  });

  vpaTabBtn?.addEventListener('click', () => {
    vpaTabBtn.classList.add('active');
    qrTabBtn?.classList.remove('active');
    if (vpaPane) vpaPane.style.display = 'block';
    if (qrPane) qrPane.style.display = 'none';
  });

  // Quick VPA suffix chips
  document.querySelectorAll('.vpa-quick-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const vpaInput = document.getElementById('upiVpaInput');
      if (!vpaInput) return;
      const suffix = chip.getAttribute('data-suffix') || '';
      let currentVal = vpaInput.value.trim();
      if (currentVal.includes('@')) {
        currentVal = currentVal.split('@')[0];
      }
      if (!currentVal) currentVal = 'rider';
      vpaInput.value = `${currentVal}${suffix}`;
    });
  });

  // Account / Registration & Login Modal
  document.getElementById('accountButton')?.addEventListener('click', openAuthModal);
  document.getElementById('closeAuthModalBtn')?.addEventListener('click', closeAuthModal);
  document.getElementById('authCloseProfileBtn')?.addEventListener('click', closeAuthModal);
  document.getElementById('authModalBackdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'authModalBackdrop') closeAuthModal();
  });

  // Auth Tabs (Create Account vs Sign In)
  const tabCreateAccountBtn = document.getElementById('tabCreateAccountBtn');
  const tabSignInBtn = document.getElementById('tabSignInBtn');
  const registerForm = document.getElementById('authRegisterForm');
  const loginForm = document.getElementById('authLoginForm');

  function showRegisterTab() {
    tabCreateAccountBtn?.classList.add('active');
    tabSignInBtn?.classList.remove('active');
    if (registerForm) registerForm.style.display = 'block';
    if (loginForm) loginForm.style.display = 'none';
  }

  function showLoginTab() {
    tabSignInBtn?.classList.add('active');
    tabCreateAccountBtn?.classList.remove('active');
    if (loginForm) loginForm.style.display = 'block';
    if (registerForm) registerForm.style.display = 'none';
  }

  tabCreateAccountBtn?.addEventListener('click', showRegisterTab);
  tabSignInBtn?.addEventListener('click', showLoginTab);
  document.getElementById('switchLoginLink')?.addEventListener('click', (e) => { e.preventDefault(); showLoginTab(); });
  document.getElementById('switchRegisterLink')?.addEventListener('click', (e) => { e.preventDefault(); showRegisterTab(); });

  // Password Confirmation Real-Time Match Indicator
  const passReg = document.getElementById('authRegisterPassword');
  const passConf = document.getElementById('authRegisterConfirmPassword');
  const matchMsg = document.getElementById('passwordMatchMsg');

  function checkPasswordMatch() {
    if (!passReg || !passConf || !matchMsg) return;
    const p1 = passReg.value;
    const p2 = passConf.value;
    if (!p2) {
      matchMsg.textContent = '';
      matchMsg.className = 'password-match-indicator';
      return;
    }
    if (p1 === p2) {
      matchMsg.textContent = '✓ Passwords match';
      matchMsg.className = 'password-match-indicator valid';
    } else {
      matchMsg.textContent = '✗ Passwords do not match';
      matchMsg.className = 'password-match-indicator invalid';
    }
  }

  passReg?.addEventListener('input', checkPasswordMatch);
  passConf?.addEventListener('input', checkPasswordMatch);

  // Show / Hide Password Visibility Toggles
  document.querySelectorAll('.password-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetInput = document.getElementById(targetId);
      if (!targetInput) return;
      const isPass = targetInput.type === 'password';
      targetInput.type = isPass ? 'text' : 'password';
      btn.textContent = isPass ? '🙈' : '👁️';
    });
  });

  // Create Account / Register Form Submit (With Password & Confirmation)
  document.getElementById('authRegisterForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('authNameInput')?.value.trim();
    const email = document.getElementById('authEmailInput')?.value.trim();
    const phone = document.getElementById('authPhoneInput')?.value.trim();
    const password = document.getElementById('authRegisterPassword')?.value;
    const confirmPassword = document.getElementById('authRegisterConfirmPassword')?.value;

    if (!email || !password) return;

    if (password !== confirmPassword) {
      showToast('Passwords do not match! Please check and confirm your password.');
      return;
    }

    const submitBtn = document.getElementById('authSubmitBtn');
    if (submitBtn) submitBtn.disabled = true;

    const res = await registerUserWithMongoDB({
      email,
      name,
      phone,
      password,
      confirmPassword,
      source: 'account_registration'
    });
    if (submitBtn) submitBtn.disabled = false;

    showToast(res.message);
    if (res.success) {
      closeAuthModal();
      document.getElementById('authRegisterForm')?.reset();
      if (matchMsg) matchMsg.textContent = '';
    }
  });

  // Sign In / Login Form Submit
  document.getElementById('authLoginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('authLoginEmail')?.value.trim();
    const password = document.getElementById('authLoginPassword')?.value;
    if (!email || !password) return;

    const submitBtn = document.getElementById('authLoginSubmitBtn');
    if (submitBtn) submitBtn.disabled = true;

    const res = await loginUserWithMongoDB(email, password);
    if (submitBtn) submitBtn.disabled = false;

    showToast(res.message);
    if (res.success) {
      closeAuthModal();
      document.getElementById('authLoginForm')?.reset();
    }
  });

  // Logout / Switch Account
  document.getElementById('authLogoutBtn')?.addEventListener('click', () => {
    currentUser = null;
    localStorage.removeItem('motomart_user');
    updateAuthUI();
    showToast('Signed out successfully.');
  });

  // Newsletter Form Submit (MongoDB integration)
  document.getElementById('newsletterForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('newsletterEmailInput');
    const email = emailInput?.value.trim();
    if (!email) return;

    const res = await registerUserWithMongoDB({ email, source: 'newsletter_subscription' });
    showToast(res.isNewUser ? `Subscribed! Saved to MongoDB. Use code MOTOMART10 🚀` : `Welcome back! Subscribed with ${email}`);
    if (emailInput) emailInput.value = '';
  });

  // FAQ Accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question')?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeWishlistDrawer();
      closeProductModal();
      closeSizeGuideModal();
      closeCheckoutModal();
      closeAuthModal();
    }
  });
}

// ==========================================
// 6. FILTERING, SORTING & CATALOG RENDERING
// ==========================================
function filterProducts() {
  const { category, search, maxPrice, inStockOnly, sortBy } = state.filters;

  let filtered = products.filter(p => {
    const matchesCategory = category === 'all' || p.category === category;
    const matchesSearch = !search || 
      p.name.toLowerCase().includes(search) || 
      p.desc.toLowerCase().includes(search) ||
      p.category.toLowerCase().includes(search);
    const matchesPrice = p.price <= maxPrice;
    const matchesStock = !inStockOnly || p.stock > 0;
    return matchesCategory && matchesSearch && matchesPrice && matchesStock;
  });

  // Sort logic
  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'bestseller') {
    filtered.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
  }

  return filtered;
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  const total = document.getElementById('productTotal');
  if (!grid) return;

  const items = filterProducts();
  total.textContent = `${items.length} product${items.length === 1 ? '' : 's'}`;

  renderActiveFilterChips();

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <span style="font-size: 3rem; display: block; margin-bottom: 12px;">🔍</span>
        <h3 style="font-size: 1.3rem; margin-bottom: 8px;">No matching rider gear found</h3>
        <p style="color: var(--muted); margin-bottom: 20px;">Try loosening your filters, adjusting the price slider, or changing your search terms.</p>
        <button class="primary-button" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(p => {
    const isWishlisted = state.wishlist.includes(p.id);
    const discountPct = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
    const isLowStock = p.stock <= 5;

    return `
      <article class="product-card" data-id="${p.id}">
        <div class="product-image-container ${p.tone}">
          <!-- Top Badges -->
          <div class="product-badges-top">
            ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
            ${discountPct > 0 ? `<span class="badge discount">-${discountPct}%</span>` : ''}
            ${isLowStock ? `<span class="badge stock-warning">Only ${p.stock} Left!</span>` : ''}
          </div>

          <!-- Wishlist Heart Toggle Button -->
          <button 
            class="wishlist-toggle-btn ${isWishlisted ? 'active' : ''}" 
            onclick="handleToggleWishlist(event, '${p.id}')"
            aria-label="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}"
            title="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}"
          >
            ${isWishlisted ? '♥' : '♡'}
          </button>

          <!-- Product Image with fallback -->
          <img 
            class="product-image-url" 
            src="${p.image}" 
            alt="${p.name}" 
            loading="lazy" 
            onerror="this.src='https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=700&q=80';"
          />

          <!-- Quick View Trigger -->
          <button class="quick-view-overlay-btn" onclick="openProductModal('${p.id}')">
            Quick View 👁️
          </button>
        </div>

        <div class="product-info">
          <div class="product-rating-row">
            <span class="rating-stars">★ ${p.rating}</span>
            <span class="rating-count">(${p.reviewCount})</span>
          </div>

          <h3 onclick="openProductModal('${p.id}')">${p.name}</h3>
          <p>${p.desc}</p>

          <div class="price-row">
            <div class="price-block">
              <span class="price">₹${p.price.toLocaleString('en-IN')}</span>
              ${p.originalPrice ? `<span class="original-price">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
            </div>
            <button 
              class="add-button" 
              onclick="handleQuickAddToCart(event, '${p.id}')" 
              aria-label="Add ${p.name} to cart"
              title="Quick Add to Cart"
            >
              +
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderActiveFilterChips() {
  const container = document.getElementById('activeFiltersContainer');
  const list = document.getElementById('activeFiltersList');
  if (!container || !list) return;

  const chips = [];
  const { category, search, maxPrice, inStockOnly } = state.filters;

  if (category !== 'all') {
    chips.push({ label: `Category: ${category}`, onRemove: () => {
      state.filters.category = 'all';
      document.querySelector('.category-tabs .active')?.classList.remove('active');
      document.querySelector('.category-tabs [data-category="all"]')?.classList.add('active');
      renderProducts();
    }});
  }

  if (search) {
    chips.push({ label: `Search: "${search}"`, onRemove: () => {
      state.filters.search = '';
      const input = document.getElementById('searchInput');
      if (input) input.value = '';
      document.getElementById('clearSearchBtn').style.display = 'none';
      renderProducts();
    }});
  }

  if (maxPrice < 5000) {
    chips.push({ label: `Under ₹${maxPrice.toLocaleString('en-IN')}`, onRemove: () => {
      state.filters.maxPrice = 5000;
      const slider = document.getElementById('priceRange');
      if (slider) slider.value = 5000;
      document.getElementById('priceRangeValue').textContent = '₹5,000';
      renderProducts();
    }});
  }

  if (inStockOnly) {
    chips.push({ label: 'In Stock Only', onRemove: () => {
      state.filters.inStockOnly = false;
      const toggle = document.getElementById('inStockToggle');
      if (toggle) toggle.checked = false;
      renderProducts();
    }});
  }

  if (chips.length > 0) {
    container.style.display = 'flex';
    list.innerHTML = chips.map((chip, idx) => `
      <span class="filter-pill">
        ${chip.label}
        <button onclick="removeFilterChip(${idx})" aria-label="Remove filter">✕</button>
      </span>
    `).join('');
    window._activeChips = chips;
  } else {
    container.style.display = 'none';
  }
}

window.removeFilterChip = function(idx) {
  if (window._activeChips && window._activeChips[idx]) {
    window._activeChips[idx].onRemove();
  }
};

function resetFilters() {
  state.filters = {
    category: 'all',
    search: '',
    maxPrice: 5000,
    inStockOnly: false,
    sortBy: 'featured'
  };

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  document.getElementById('clearSearchBtn').style.display = 'none';

  const priceRange = document.getElementById('priceRange');
  if (priceRange) priceRange.value = 5000;
  document.getElementById('priceRangeValue').textContent = '₹5,000';

  const inStockToggle = document.getElementById('inStockToggle');
  if (inStockToggle) inStockToggle.checked = false;

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = 'featured';

  document.querySelector('.category-tabs .active')?.classList.remove('active');
  document.querySelector('.category-tabs [data-category="all"]')?.classList.add('active');

  renderProducts();
  showToast('Filters reset to default ↺');
}

// ==========================================
// 7. CART MANAGEMENT & DRAWERS
// ==========================================
function handleQuickAddToCart(event, productId) {
  event.stopPropagation();
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  const defaultSize = prod.sizes && prod.sizes.length ? prod.sizes[0] : 'Universal';
  addToCart(productId, defaultSize, 1);
}

function addToCart(productId, size, quantity = 1) {
  const existingIndex = state.cart.findIndex(item => item.id === productId && item.size === size);

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({ id: productId, size, quantity });
  }

  saveCart();
  updateHeaderCounts();
  renderCartDrawer();

  const prod = products.find(p => p.id === productId);
  showToast(`Added ${prod?.name || 'Item'} (${size}) to cart ✓`);
}

function updateCartQuantity(index, delta) {
  if (state.cart[index]) {
    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
      state.cart.splice(index, 1);
      showToast('Item removed from cart');
    }
    saveCart();
    updateHeaderCounts();
    renderCartDrawer();
  }
}

function removeFromCart(index) {
  if (state.cart[index]) {
    state.cart.splice(index, 1);
    saveCart();
    updateHeaderCounts();
    renderCartDrawer();
    showToast('Item removed from cart');
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
}

function openCartDrawer() {
  document.getElementById('cartDrawer')?.classList.add('active');
  document.getElementById('cartOverlay')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cartDrawer')?.classList.remove('active');
  document.getElementById('cartOverlay')?.classList.remove('active');
  document.body.style.overflow = '';
}

function renderCartDrawer() {
  const list = document.getElementById('cartItemsList');
  const countEl = document.getElementById('drawerCartCount');
  const footer = document.getElementById('cartDrawerFooter');
  if (!list) return;

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (countEl) countEl.textContent = totalItems;

  if (state.cart.length === 0) {
    list.innerHTML = `
      <div class="empty-drawer-state">
        <span class="empty-icon">🛒</span>
        <h4>Your cart is empty</h4>
        <p>No gear selected yet. Explore our 2026 collection to get road-ready.</p>
        <button class="primary-button" style="margin-top: 18px;" onclick="closeCartDrawer(); document.getElementById('shop').scrollIntoView({behavior:'smooth'});">
          Browse Gear
        </button>
      </div>
    `;
    if (footer) footer.style.display = 'none';
    updateShippingProgress(0);
    return;
  }

  if (footer) footer.style.display = 'block';

  let subtotal = 0;

  list.innerHTML = state.cart.map((cartItem, index) => {
    const prod = products.find(p => p.id === cartItem.id);
    if (!prod) return '';

    const itemTotal = prod.price * cartItem.quantity;
    subtotal += itemTotal;

    return `
      <div class="drawer-item-card">
        <img class="drawer-item-img" src="${prod.image}" alt="${prod.name}" onerror="this.src='https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=150&q=80'" />
        <div class="drawer-item-details">
          <h4>${prod.name}</h4>
          <div class="drawer-item-meta">Size: <b>${cartItem.size}</b></div>
          <div class="drawer-qty-row">
            <button class="qty-control-btn" onclick="updateCartQuantity(${index}, -1)" aria-label="Decrease quantity">-</button>
            <span class="qty-readout">${cartItem.quantity}</span>
            <button class="qty-control-btn" onclick="updateCartQuantity(${index}, 1)" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <div class="drawer-item-price-col">
          <span class="drawer-item-price">₹${itemTotal.toLocaleString('en-IN')}</span>
          <button class="drawer-remove-btn" onclick="removeFromCart(${index})" aria-label="Remove item">🗑️</button>
        </div>
      </div>
    `;
  }).join('');

  // Shipping Progress
  updateShippingProgress(subtotal);

  // Discounts & Grand Total Calculation
  let discountAmount = 0;
  if (state.coupon) {
    if (state.coupon.type === 'percent') {
      discountAmount = Math.round((subtotal * state.coupon.value) / 100);
    } else if (state.coupon.type === 'flat') {
      discountAmount = Math.min(state.coupon.value, subtotal);
    }
  }

  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD || (state.coupon && state.coupon.type === 'free_shipping');
  const shippingFee = isFreeShipping ? 0 : STANDARD_SHIPPING_FEE;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  // Update UI Elements
  document.getElementById('cartSubtotal').textContent = `₹${subtotal.toLocaleString('en-IN')}.00`;
  
  const discountRow = document.getElementById('discountRow');
  if (discountRow) {
    if (discountAmount > 0) {
      discountRow.style.display = 'flex';
      document.getElementById('discountName').textContent = state.coupon.label;
      document.getElementById('cartDiscount').textContent = `-₹${discountAmount.toLocaleString('en-IN')}.00`;
    } else {
      discountRow.style.display = 'none';
    }
  }

  document.getElementById('cartShipping').textContent = shippingFee === 0 ? 'FREE' : `₹${shippingFee.toLocaleString('en-IN')}.00`;
  document.getElementById('cartGrandTotal').textContent = `₹${grandTotal.toLocaleString('en-IN')}.00`;

  // Store totals for checkout
  state.currentSubtotal = subtotal;
  state.currentDiscount = discountAmount;
  state.currentShipping = shippingFee;
  state.currentGrandTotal = grandTotal;
}

function updateShippingProgress(subtotal) {
  const textEl = document.getElementById('shippingProgressText');
  const barEl = document.getElementById('shippingProgressBar');
  if (!textEl || !barEl) return;

  if (subtotal >= FREE_SHIPPING_THRESHOLD) {
    textEl.innerHTML = '🎉 <b>Congratulations!</b> You unlocked FREE Express Shipping!';
    barEl.style.width = '100%';
  } else {
    const diff = FREE_SHIPPING_THRESHOLD - subtotal;
    const pct = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
    textEl.innerHTML = `Add <b>₹${diff.toLocaleString('en-IN')}</b> more for FREE Express Shipping!`;
    barEl.style.width = `${pct}%`;
  }
}

function handleCouponApply() {
  const input = document.getElementById('couponInput');
  const feedback = document.getElementById('couponFeedback');
  if (!input || !feedback) return;

  const code = input.value.trim().toUpperCase();
  if (!code) {
    feedback.className = 'coupon-feedback error';
    feedback.textContent = 'Please enter a coupon code.';
    return;
  }

  if (COUPONS[code]) {
    state.coupon = COUPONS[code];
    feedback.className = 'coupon-feedback success';
    feedback.textContent = `Coupon applied: ${COUPONS[code].label}!`;
    renderCartDrawer();
  } else {
    feedback.className = 'coupon-feedback error';
    feedback.textContent = 'Invalid promo code. Try MOTOMART10 or WELCOME500.';
  }
}

// ==========================================
// 8. WISHLIST MANAGEMENT
// ==========================================
function handleToggleWishlist(event, productId) {
  event.stopPropagation();
  const index = state.wishlist.indexOf(productId);

  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast('Removed from wishlist');
  } else {
    state.wishlist.push(productId);
    showToast('Saved to your wishlist ♥');
  }

  localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(state.wishlist));
  updateHeaderCounts();
  renderProducts();
  renderWishlistDrawer();
}

function openWishlistDrawer() {
  document.getElementById('wishlistDrawer')?.classList.add('active');
  document.getElementById('wishlistOverlay')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeWishlistDrawer() {
  document.getElementById('wishlistDrawer')?.classList.remove('active');
  document.getElementById('wishlistOverlay')?.classList.remove('active');
  document.body.style.overflow = '';
}

function renderWishlistDrawer() {
  const list = document.getElementById('wishlistItemsList');
  const countEl = document.getElementById('drawerWishlistCount');
  if (!list) return;

  if (countEl) countEl.textContent = state.wishlist.length;

  if (state.wishlist.length === 0) {
    list.innerHTML = `
      <div class="empty-drawer-state">
        <span class="empty-icon">♡</span>
        <h4>Your wishlist is empty</h4>
        <p>Click the heart icon on any gear to save items for future rides.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = state.wishlist.map(id => {
    const prod = products.find(p => p.id === id);
    if (!prod) return '';

    return `
      <div class="drawer-item-card">
        <img class="drawer-item-img" src="${prod.image}" alt="${prod.name}" onerror="this.src='https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=150&q=80'" />
        <div class="drawer-item-details">
          <h4>${prod.name}</h4>
          <span class="price">₹${prod.price.toLocaleString('en-IN')}</span>
          <div style="margin-top: 8px;">
            <button class="primary-button" style="padding: 6px 14px; font-size: .75rem;" onclick="moveWishlistToCart('${prod.id}')">
              Move to Cart →
            </button>
          </div>
        </div>
        <div class="drawer-item-price-col">
          <button class="drawer-remove-btn" onclick="handleToggleWishlist(event, '${prod.id}')" title="Remove from wishlist">✕</button>
        </div>
      </div>
    `;
  }).join('');
}

function moveWishlistToCart(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  addToCart(productId, prod.sizes[0] || 'Universal', 1);
  handleToggleWishlist({ stopPropagation: () => {} }, productId);
  closeWishlistDrawer();
  openCartDrawer();
}

function updateHeaderCounts() {
  const totalCart = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartBadge = document.getElementById('cartCount');
  if (cartBadge) cartBadge.textContent = totalCart;

  const wishlistBadge = document.getElementById('wishlistCount');
  if (wishlistBadge) wishlistBadge.textContent = state.wishlist.length;
}

// ==========================================
// 9. PRODUCT DETAIL / QUICK VIEW MODAL
// ==========================================
function openProductModal(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  state.activeModalProductId = productId;
  state.modalSelectedSize = prod.sizes && prod.sizes.length ? prod.sizes[0] : 'Universal';

  const modalContent = document.getElementById('productModalContent');
  if (!modalContent) return;

  const discountPct = Math.round(((prod.originalPrice - prod.price) / prod.originalPrice) * 100);

  modalContent.innerHTML = `
    <div class="product-modal-media ${prod.tone}">
      <img src="${prod.image}" alt="${prod.name}" onerror="this.src='https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=700&q=80'" />
    </div>

    <div class="product-modal-details">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="eyebrow" style="margin:0;">${prod.category.toUpperCase()} · MOTOMART 2026</span>
        <span class="badge ${prod.stock <= 5 ? 'stock-warning' : ''}">${prod.stock <= 5 ? `Only ${prod.stock} Left` : 'In Stock'}</span>
      </div>

      <h2 style="font-size: 1.8rem; margin: 8px 0;">${prod.name}</h2>

      <div class="product-rating-row" style="margin-bottom: 12px;">
        <span class="rating-stars">★★★★★</span>
        <span style="font-weight:700;">${prod.rating}</span>
        <span class="rating-count">(${prod.reviewCount} Rider Reviews)</span>
      </div>

      <div class="modal-price-row">
        <span class="price">₹${prod.price.toLocaleString('en-IN')}.00</span>
        ${prod.originalPrice ? `<span class="original-price">₹${prod.originalPrice.toLocaleString('en-IN')}.00</span>` : ''}
        ${discountPct > 0 ? `<span class="badge discount">${discountPct}% OFF</span>` : ''}
      </div>

      <p style="color: var(--muted); font-size: .88rem; line-height: 1.6; margin-bottom: 18px;">
        ${prod.longDesc || prod.desc}
      </p>

      <!-- Sizing Area -->
      <div class="size-selection-area">
        <div class="size-header-row">
          <span>Select Size: <b id="modalSelectedSizeLabel">${state.modalSelectedSize}</b></span>
          <span class="size-guide-link" onclick="openSizeGuideModal()">Size Guide 📐</span>
        </div>
        <div class="size-chips-list">
          ${prod.sizes.map(s => `
            <button class="size-chip ${s === state.modalSelectedSize ? 'active' : ''}" onclick="selectModalSize('${s}')">
              ${s}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Pincode Estimator -->
      <div class="pincode-box">
        <label style="font-size:.78rem; font-weight:700; color:var(--muted);">CHECK DELIVERY SPEED & COD</label>
        <div class="pincode-input-row">
          <input type="text" id="modalPincodeInput" placeholder="Enter 6-digit PIN" maxlength="6" />
          <button onclick="estimateDelivery()">Check</button>
        </div>
        <div id="modalPincodeFeedback" class="pincode-feedback"></div>
      </div>

      <!-- Action Buttons -->
      <div style="display: flex; gap: 12px; margin-bottom: 24px;">
        <button class="primary-button" style="flex: 1;" onclick="handleModalAddToCart()">
          Add to Cart <span>+</span>
        </button>
        <button 
          class="outline-button wishlist-button" 
          onclick="handleToggleWishlist(event, '${prod.id}')"
          style="padding: 12px 18px;"
          title="Save to Wishlist"
        >
          ♥
        </button>
      </div>

      <!-- Specifications Table -->
      <h4 style="font-size: .92rem; font-weight: 700; margin-bottom: 6px;">Technical Specifications</h4>
      <table class="specs-table">
        <tbody>
          ${Object.entries(prod.specs || {}).map(([key, val]) => `
            <tr>
              <td>${key}</td>
              <td>${val}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  document.getElementById('productModalBackdrop')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function selectModalSize(size) {
  state.modalSelectedSize = size;
  document.querySelectorAll('.size-chip').forEach(chip => {
    chip.classList.toggle('active', chip.textContent.trim() === size);
  });
  const label = document.getElementById('modalSelectedSizeLabel');
  if (label) label.textContent = size;
}

function handleModalAddToCart() {
  if (state.activeModalProductId && state.modalSelectedSize) {
    addToCart(state.activeModalProductId, state.modalSelectedSize, 1);
    closeProductModal();
    openCartDrawer();
  }
}

function estimateDelivery() {
  const pinInput = document.getElementById('modalPincodeInput');
  const feedback = document.getElementById('modalPincodeFeedback');
  if (!pinInput || !feedback) return;

  const pin = pinInput.value.trim();
  if (pin.length !== 6 || isNaN(pin)) {
    feedback.style.color = 'var(--danger)';
    feedback.textContent = 'Please enter a valid 6-digit PIN code.';
    return;
  }

  // Calculate simulated arrival in 3 days
  const arrivalDate = new Date();
  arrivalDate.setDate(arrivalDate.getDate() + 3);
  const dateStr = arrivalDate.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' });

  feedback.style.color = 'var(--success)';
  feedback.innerHTML = `✓ Express Delivery by <b>${dateStr}</b> · Cash on Delivery Available.`;
}

function closeProductModal() {
  document.getElementById('productModalBackdrop')?.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// 10. SIZING GUIDE MODAL
// ==========================================
function openSizeGuideModal() {
  document.getElementById('sizeGuideModalBackdrop')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSizeGuideModal() {
  document.getElementById('sizeGuideModalBackdrop')?.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================
// 11. CHECKOUT MODAL FLOW
// ==========================================
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Your cart is empty.');
    return;
  }
  closeCartDrawer();
  goToCheckoutStep(1);
  document.getElementById('checkoutModalBackdrop')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
  document.getElementById('checkoutModalBackdrop')?.classList.remove('active');
  document.body.style.overflow = '';
}

function goToCheckoutStep(step) {
  // Update Stepper Nodes
  document.querySelectorAll('.step-node').forEach((node, idx) => {
    node.classList.toggle('active', idx + 1 <= step);
  });

  // Toggle step panes
  document.getElementById('checkoutStep1').style.display = step === 1 ? 'block' : 'none';
  document.getElementById('checkoutStep2').style.display = step === 2 ? 'block' : 'none';
  document.getElementById('checkoutStep3').style.display = step === 3 ? 'block' : 'none';

  if (step === 2) {
    const formattedTotal = `₹${(state.currentGrandTotal || 0).toLocaleString('en-IN')}.00`;
    const totalPreview = document.getElementById('checkoutTotalPreview');
    if (totalPreview) {
      totalPreview.textContent = formattedTotal;
    }
    const upiQrAmount = document.getElementById('upiQrAmount');
    if (upiQrAmount) {
      upiQrAmount.textContent = formattedTotal;
    }
  }
}

function handlePlaceOrder() {
  const paymentRadio = document.querySelector('input[name="paymentMethod"]:checked');
  const paymentMethod = paymentRadio ? paymentRadio.value : 'upi';

  if (paymentMethod === 'card') {
    const cardNum = document.getElementById('cardNumberInput')?.value.trim();
    if (cardNum && cardNum.replace(/\s/g, '').length < 15) {
      showToast('Please enter a valid 16-digit card number 💳');
      return;
    }
  } else if (paymentMethod === 'upi') {
    const vpaPane = document.getElementById('upiVpaPane');
    const isVpaActive = vpaPane && vpaPane.style.display !== 'none';
    if (isVpaActive) {
      const upiVal = document.getElementById('upiVpaInput')?.value.trim();
      if (upiVal && !upiVal.includes('@')) {
        showToast('Please enter a valid UPI ID (e.g. name@bank) 📱');
        return;
      }
    }
  }

  const name = document.getElementById('shipName').value.trim() || 'Rider';
  const city = document.getElementById('shipCity').value.trim() || 'Mumbai';
  const orderId = `#MM-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  // Estimated arrival (4 days from now)
  const arrival = new Date();
  arrival.setDate(arrival.getDate() + 4);
  const deliveryStr = arrival.toLocaleDateString('en-IN', { weekday: 'long', month: 'short', day: 'numeric' });

  // Update Receipt elements
  document.getElementById('receiptOrderId').textContent = orderId;
  document.getElementById('receiptDeliveryDate').textContent = deliveryStr;
  document.getElementById('receiptDestination').textContent = `${name}, ${city}`;
  document.getElementById('receiptTotalPaid').textContent = `₹${(state.currentGrandTotal || 0).toLocaleString('en-IN')}.00`;

  // Render items summary
  const summaryEl = document.getElementById('receiptItemsSummary');
  if (summaryEl) {
    summaryEl.innerHTML = state.cart.map(item => {
      const prod = products.find(p => p.id === item.id);
      return `
        <div class="receipt-item-row">
          <span>${item.quantity}x ${prod?.name || 'Gear'} (${item.size})</span>
          <b>₹${((prod?.price || 0) * item.quantity).toLocaleString('en-IN')}</b>
        </div>
      `;
    }).join('');
  }

  // Record Order to MongoDB User Profile
  const customerEmail = document.getElementById('shipEmail')?.value.trim() || currentUser?.email;
  if (customerEmail) {
    recordOrderWithMongoDB({
      email: customerEmail,
      orderId,
      totalAmount: state.currentGrandTotal || 0,
      itemsCount: state.cart.reduce((s, i) => s + i.quantity, 0),
      paymentMethod
    });
  }

  // Clear Cart
  state.cart = [];
  state.coupon = null;
  saveCart();
  updateHeaderCounts();
  renderCartDrawer();

  // Go to step 3
  goToCheckoutStep(3);
  showToast(`Order confirmed! Receipt ID: ${orderId} 🚀`);
}

// ==========================================
// 12. UTILITY TOAST NOTIFICATIONS
// ==========================================
let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

// ==========================================
// 13. MONGODB USER REGISTRATION & SESSION
// ==========================================
let currentUser = JSON.parse(localStorage.getItem('motomart_user') || 'null');

async function registerUserWithMongoDB(userData) {
  try {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });

    const data = await res.json();
    if (data.success && data.user) {
      currentUser = data.user;
      localStorage.setItem('motomart_user', JSON.stringify(currentUser));
      updateAuthUI();
      return { success: true, message: data.message, user: data.user, isNewUser: data.isNewUser };
    }
    return { success: false, message: data.message || 'Registration failed.' };
  } catch (err) {
    console.warn('MongoDB API offline or running static mode:', err);
    // Offline local caching fallback
    currentUser = {
      email: userData.email,
      name: userData.name || 'Rider',
      accessCount: (currentUser?.accessCount || 0) + 1,
      registeredAt: currentUser?.registeredAt || new Date().toISOString()
    };
    localStorage.setItem('motomart_user', JSON.stringify(currentUser));
    updateAuthUI();
    return { success: true, message: 'Account saved locally.', user: currentUser, isNewUser: true };
  }
}

async function loginUserWithMongoDB(email, password) {
  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (data.success && data.user) {
      currentUser = data.user;
      localStorage.setItem('motomart_user', JSON.stringify(currentUser));
      updateAuthUI();
      return { success: true, message: data.message, user: data.user };
    }
    return { success: false, message: data.message || 'Login failed. Please verify credentials.' };
  } catch (err) {
    console.warn('Login API offline or network issue:', err);
    return { success: false, message: 'Server is currently offline. Please run npm start.' };
  }
}

async function recordOrderWithMongoDB(orderData) {
  try {
    await fetch('/api/record-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });
  } catch (err) {
    console.warn('Could not record order to MongoDB API:', err);
  }
}

function updateAuthUI() {
  const badge = document.getElementById('accountBadge');
  const loggedOutView = document.getElementById('authLoggedOutView');
  const loggedInView = document.getElementById('authLoggedInView');
  const accountBtn = document.getElementById('accountButton');

  if (currentUser && currentUser.email) {
    if (badge) badge.style.display = 'block';
    if (accountBtn) accountBtn.title = `Signed In: ${currentUser.email}`;
    if (loggedOutView) loggedOutView.style.display = 'none';
    if (loggedInView) loggedInView.style.display = 'block';

    const pEmail = document.getElementById('profileEmailVal');
    const pName = document.getElementById('profileNameVal');
    const pPhone = document.getElementById('profilePhoneVal');
    const pVisits = document.getElementById('profileVisitsVal');
    const welcome = document.getElementById('loggedInWelcomeText');

    if (pEmail) pEmail.textContent = currentUser.email;
    if (pName) pName.textContent = currentUser.name || 'Rider';
    if (pPhone) pPhone.textContent = currentUser.phone || 'Not provided';
    if (pVisits) pVisits.textContent = currentUser.accessCount || 1;
    if (welcome) welcome.textContent = `Welcome back, ${currentUser.name || 'Rider'}!`;

    // Auto-fill checkout fields if empty
    const shipName = document.getElementById('shipName');
    const shipEmail = document.getElementById('shipEmail');
    const shipPhone = document.getElementById('shipPhone');
    if (shipName && !shipName.value && currentUser.name && currentUser.name !== 'Rider') shipName.value = currentUser.name;
    if (shipEmail && !shipEmail.value) shipEmail.value = currentUser.email;
    if (shipPhone && !shipPhone.value && currentUser.phone) shipPhone.value = currentUser.phone;
  } else {
    if (badge) badge.style.display = 'none';
    if (accountBtn) accountBtn.title = 'Sign In / Register Account';
    if (loggedOutView) loggedOutView.style.display = 'block';
    if (loggedInView) loggedInView.style.display = 'none';
  }
}

function openAuthModal() {
  updateAuthUI();
  document.getElementById('authModalBackdrop')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
  document.getElementById('authModalBackdrop')?.classList.remove('active');
  document.body.style.overflow = '';
}

// Auto-sync existing session with MongoDB on visit
if (currentUser && currentUser.email) {
  registerUserWithMongoDB({ email: currentUser.email, source: 'repeat_website_visit' });
}
updateAuthUI();
