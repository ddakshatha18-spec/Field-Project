/* ==========================================
   SRI PADMA TEXTILES — E-Commerce App JS
   ========================================== */

// ===== PRODUCT DATA =====
const STATIC_PRODUCTS = [
    {
        id: 1, name: "Royal Kanjivaram Pure Silk Saree",
        category: "kanjivaram", fabric: "silk", color: "red",
        occasion: ["wedding", "bridal", "festival"], border: "temple",
        price: 15999, originalPrice: 22999, rating: 4.8, reviews: 342,
        image: "images/saree_red_kanjivaram.png",
        description: "Exquisite handwoven Kanjivaram pure silk saree in rich red with traditional temple border and heavy zari pallu. Perfect for weddings and special occasions.",
        tags: ["bestseller", "trending"],
        meta: { fabric: "Pure Mulberry Silk", weight: "850g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Kanchipuram, Tamil Nadu" }
    },
    {
        id: 2, name: "Heritage Banarasi Silk Saree",
        category: "banarasi", fabric: "silk", color: "blue",
        occasion: ["wedding", "festival", "party"], border: "zari",
        price: 12999, originalPrice: 18999, rating: 4.7, reviews: 256,
        image: "images/saree_blue_banarasi.png",
        description: "Stunning royal blue Banarasi silk saree with intricate golden brocade work and floral motifs. A timeless piece of Indian textile artistry.",
        tags: ["bestseller", "new"],
        meta: { fabric: "Banarasi Silk", weight: "780g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Varanasi, Uttar Pradesh" }
    },
    {
        id: 3, name: "Elegant Cotton Handloom Saree",
        category: "cotton", fabric: "cotton", color: "green",
        occasion: ["casual", "office", "festival"], border: "contrast",
        price: 2999, originalPrice: 4999, rating: 4.5, reviews: 189,
        image: "images/saree_green_cotton.png",
        description: "Beautiful emerald green handloom cotton saree with contrast golden temple border. Comfortable and elegant for everyday wear.",
        tags: ["trending", "sale"],
        meta: { fabric: "Pure Cotton", weight: "450g", length: "6 meters", blouse: "Included (0.8m)", wash: "Hand Wash", origin: "Mangalgiri, Andhra Pradesh" }
    },
    {
        id: 4, name: "Designer Georgette Party Saree",
        category: "designer", fabric: "georgette", color: "pink",
        occasion: ["party", "festival"], border: "stonework",
        price: 7999, originalPrice: 12999, rating: 4.6, reviews: 128,
        image: "images/saree_pink_designer.png",
        description: "Gorgeous pink designer georgette saree with delicate silver sequin embroidery and scalloped border. Perfect for parties and celebrations.",
        tags: ["new", "trending"],
        meta: { fabric: "Georgette", weight: "520g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Surat, Gujarat" }
    },
    {
        id: 5, name: "Grand Pattu Silk Wedding Saree",
        category: "pattu", fabric: "silk", color: "gold",
        occasion: ["wedding", "bridal"], border: "temple",
        price: 24999, originalPrice: 35999, rating: 4.9, reviews: 412,
        image: "images/saree_gold_pattu.png",
        description: "Luxurious golden cream Pattu silk saree with rich maroon and gold zari border. A grand piece for brides and wedding ceremonies.",
        tags: ["bestseller", "bridal"],
        meta: { fabric: "Pure Pattu Silk", weight: "950g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Dharmavaram, Andhra Pradesh" }
    },
    {
        id: 6, name: "Classic Chanderi Silk Cotton Saree",
        category: "chanderi", fabric: "silk", color: "cream",
        occasion: ["casual", "office", "festival"], border: "zari",
        price: 5499, originalPrice: 7999, rating: 4.4, reviews: 97,
        image: "images/saree_gold_pattu.png",
        description: "Lightweight and lustrous Chanderi silk cotton saree in cream with delicate zari border and buttas. Ideal for daily elegance.",
        tags: ["new"],
        meta: { fabric: "Silk Cotton Blend", weight: "380g", length: "6 meters", blouse: "Included (0.8m)", wash: "Hand Wash", origin: "Chanderi, Madhya Pradesh" }
    },
    {
        id: 7, name: "Maroon Kanjivaram Bridal Saree",
        category: "kanjivaram", fabric: "silk", color: "maroon",
        occasion: ["bridal", "wedding"], border: "temple",
        price: 28999, originalPrice: 42999, rating: 4.9, reviews: 567,
        image: "images/saree_red_kanjivaram.png",
        description: "Magnificent maroon Kanjivaram silk saree with heavy gold zari work and grand pallu. The ultimate bridal saree for your special day.",
        tags: ["bestseller", "bridal"],
        meta: { fabric: "Pure Mulberry Silk", weight: "1050g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Kanchipuram, Tamil Nadu" }
    },
    {
        id: 8, name: "Purple Organza Designer Saree",
        category: "designer", fabric: "organza", color: "purple",
        occasion: ["party", "festival"], border: "threadwork",
        price: 6499, originalPrice: 9999, rating: 4.3, reviews: 85,
        image: "images/saree_pink_designer.png",
        description: "Ethereal purple organza saree with intricate thread work embroidery and sequin detailing. Light, elegant, and perfect for events.",
        tags: ["new", "trending"],
        meta: { fabric: "Pure Organza", weight: "350g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Surat, Gujarat" }
    },
    {
        id: 9, name: "Yellow Cotton Casual Saree",
        category: "cotton", fabric: "cotton", color: "yellow",
        occasion: ["casual", "office"], border: "contrast",
        price: 1999, originalPrice: 3499, rating: 4.2, reviews: 143,
        image: "images/saree_green_cotton.png",
        description: "Cheerful yellow cotton saree with contrast border, perfect for everyday wear. Comfortable, breathable, and stylish.",
        tags: ["sale"],
        meta: { fabric: "Pure Cotton", weight: "400g", length: "6 meters", blouse: "Included (0.8m)", wash: "Machine Wash", origin: "Salem, Tamil Nadu" }
    },
    {
        id: 10, name: "Navy Blue Tussar Silk Saree",
        category: "tussar", fabric: "tussar", color: "blue",
        occasion: ["festival", "party", "office"], border: "zari",
        price: 8999, originalPrice: 13999, rating: 4.5, reviews: 112,
        image: "images/saree_blue_banarasi.png",
        description: "Rich navy blue Tussar silk saree with subtle zari border and buttas. The natural texture of Tussar gives an unmatched elegance.",
        tags: ["trending"],
        meta: { fabric: "Pure Tussar Silk", weight: "580g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Bhagalpur, Bihar" }
    },
    {
        id: 11, name: "Orange Chiffon Festive Saree",
        category: "chiffon", fabric: "chiffon", color: "orange",
        occasion: ["festival", "party"], border: "stonework",
        price: 4999, originalPrice: 7499, rating: 4.4, reviews: 76,
        image: "images/saree_pink_designer.png",
        description: "Vibrant orange chiffon saree with stone work border, perfect for festive celebrations. Lightweight and flowing drape.",
        tags: ["sale", "trending"],
        meta: { fabric: "Pure Chiffon", weight: "320g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Surat, Gujarat" }
    },
    {
        id: 12, name: "Black Georgette Evening Saree",
        category: "designer", fabric: "georgette", color: "black",
        occasion: ["party"], border: "stonework",
        price: 9999, originalPrice: 14999, rating: 4.7, reviews: 203,
        image: "images/saree_blue_banarasi.png",
        description: "Sophisticated black georgette saree with heavy stone work and crystal embellishments. A statement piece for evening events.",
        tags: ["bestseller"],
        meta: { fabric: "Georgette", weight: "560g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Mumbai, Maharashtra" }
    },
    {
        id: 13, name: "White Linen Summer Saree",
        category: "cotton", fabric: "linen", color: "white",
        occasion: ["casual", "office"], border: "contrast",
        price: 3499, originalPrice: 5499, rating: 4.3, reviews: 91,
        image: "images/saree_green_cotton.png",
        description: "Crisp white linen saree with elegant contrast border. Breathable and perfect for summer days and office wear.",
        tags: ["new"],
        meta: { fabric: "Pure Linen", weight: "350g", length: "6 meters", blouse: "Included (0.8m)", wash: "Hand Wash", origin: "Bhagalpur, Bihar" }
    },
    {
        id: 14, name: "Green Banarasi Brocade Saree",
        category: "banarasi", fabric: "silk", color: "green",
        occasion: ["wedding", "festival"], border: "zari",
        price: 16999, originalPrice: 24999, rating: 4.8, reviews: 178,
        image: "images/saree_green_cotton.png",
        description: "Spectacular green Banarasi silk saree with rich brocade pattern and heavy gold zari work throughout. A magnificent festive choice.",
        tags: ["bestseller", "trending"],
        meta: { fabric: "Banarasi Silk", weight: "820g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Varanasi, Uttar Pradesh" }
    },
    {
        id: 15, name: "Peach Crepe Designer Saree",
        category: "designer", fabric: "crepe", color: "pink",
        occasion: ["party", "casual"], border: "threadwork",
        price: 5999, originalPrice: 8999, rating: 4.4, reviews: 67,
        image: "images/saree_pink_designer.png",
        description: "Delicate peach crepe saree with minimal thread work embroidery. Modern, stylish, and perfect for contemporary occasions.",
        tags: ["new"],
        meta: { fabric: "Crepe", weight: "420g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Surat, Gujarat" }
    },
    {
        id: 16, name: "Red Bridal Kanjivaram Grand Saree",
        category: "kanjivaram", fabric: "silk", color: "red",
        occasion: ["bridal", "wedding"], border: "temple",
        price: 45999, originalPrice: 65999, rating: 5.0, reviews: 892,
        image: "images/saree_red_kanjivaram.png",
        description: "The ultimate bridal Kanjivaram silk saree. Heavy pure gold zari with traditional temple motifs, peacock designs, and grand pallu. A generational heirloom piece.",
        tags: ["bestseller", "bridal"],
        meta: { fabric: "Pure Mulberry Silk (3-shuttle)", weight: "1200g", length: "6.3 meters", blouse: "Included (0.8m)", wash: "Dry Clean Only", origin: "Kanchipuram, Tamil Nadu" }
    }
];

// ===== CUSTOMIZATION OPTIONS =====
const CUSTOMIZATION = {
    fabrics: [
        { id: "puresilk", name: "Pure Silk", icon: "✨", price: 8000 },
        { id: "artsilk", name: "Art Silk", icon: "🎭", price: 3000 },
        { id: "cotton", name: "Pure Cotton", icon: "🌿", price: 2000 },
        { id: "chiffon", name: "Chiffon", icon: "🌊", price: 2500 },
        { id: "georgette", name: "Georgette", icon: "💎", price: 3000 },
        { id: "organza", name: "Organza", icon: "🦋", price: 3500 },
        { id: "crepe", name: "Crepe", icon: "🌸", price: 2800 },
        { id: "linen", name: "Linen", icon: "🍃", price: 2200 },
        { id: "tussar", name: "Tussar Silk", icon: "🍂", price: 5000 },
        { id: "satin", name: "Satin", icon: "💫", price: 3200 },
        { id: "banarasi", name: "Banarasi Silk", icon: "👑", price: 10000 },
        { id: "kanchi", name: "Kanjivaram Silk", icon: "🏛️", price: 12000 }
    ],
    colors: [
        { name: "Red", hex: "#D32F2F" },
        { name: "Maroon", hex: "#800020" },
        { name: "Gold", hex: "#C4A265" },
        { name: "Royal Blue", hex: "#1565C0" },
        { name: "Emerald Green", hex: "#2E7D32" },
        { name: "Pink", hex: "#E91E8C" },
        { name: "Purple", hex: "#7B1FA2" },
        { name: "Orange", hex: "#EF6C00" },
        { name: "Yellow", hex: "#F9A825" },
        { name: "Black", hex: "#212121" },
        { name: "White", hex: "#FAFAFA" },
        { name: "Cream", hex: "#FFFDD0" },
        { name: "Teal", hex: "#00897B" },
        { name: "Peach", hex: "#FFAB91" },
        { name: "Magenta", hex: "#AD1457" },
        { name: "Navy", hex: "#0D47A1" }
    ],
    borders: [
        { id: "temple", name: "Temple Border", icon: "🏛️", price: 1500 },
        { id: "zari", name: "Zari Border", icon: "✨", price: 2000 },
        { id: "contrast", name: "Contrast Border", icon: "🎨", price: 800 },
        { id: "plain", name: "Plain Border", icon: "▫️", price: 0 },
        { id: "kasuti", name: "Kasuti Work", icon: "🧵", price: 1800 },
        { id: "threadwork", name: "Thread Work", icon: "🪡", price: 1200 },
        { id: "stonework", name: "Stone Work", icon: "💎", price: 2500 },
        { id: "kutchwork", name: "Kutch Work", icon: "🪞", price: 2200 },
        { id: "gotapatti", name: "Gota Patti", icon: "🌟", price: 1800 },
        { id: "sequin", name: "Sequin Border", icon: "✦", price: 1600 }
    ],
    borderWidths: ["Narrow", "Medium", "Wide", "Extra Wide"],
    borderColors: [
        { name: "Gold", hex: "#C4A265" },
        { name: "Silver", hex: "#C0C0C0" },
        { name: "Maroon", hex: "#800020" },
        { name: "Red", hex: "#D32F2F" },
        { name: "Green", hex: "#2E7D32" },
        { name: "Black", hex: "#212121" },
        { name: "Copper", hex: "#B87333" },
        { name: "Rose Gold", hex: "#B76E79" }
    ],
    pallus: [
        { id: "heavyzari", name: "Heavy Zari Pallu", icon: "👑", price: 3000 },
        { id: "lightzari", name: "Light Zari", icon: "✨", price: 1500 },
        { id: "embroidered", name: "Embroidered Pallu", icon: "🧵", price: 2000 },
        { id: "plain", name: "Plain Pallu", icon: "▫️", price: 0 },
        { id: "brocade", name: "Brocade Pallu", icon: "🎭", price: 2500 },
        { id: "contrast", name: "Contrast Pallu", icon: "🎨", price: 1000 },
        { id: "printed", name: "Printed Pallu", icon: "🖼️", price: 800 },
        { id: "mirror", name: "Mirror Work Pallu", icon: "🪞", price: 2200 }
    ],
    weaves: [
        { id: "plain", name: "Plain", icon: "▫️", price: 0 },
        { id: "checks", name: "Checks", icon: "🔲", price: 500, pattern: "repeating-conic-gradient(#0003 0% 25%, transparent 0% 50%) 0 0/20px 20px" },
        { id: "stripes", name: "Stripes", icon: "📏", price: 500, pattern: "repeating-linear-gradient(90deg, #0003, #0003 2px, transparent 2px, transparent 20px)" },
        { id: "floral", name: "Floral", icon: "🌺", price: 1500, pattern: "radial-gradient(circle at 15px 15px, #fff2 4px, transparent 4px)" },
        { id: "paisley", name: "Paisley / Mango", icon: "🥭", price: 1800 },
        { id: "peacock", name: "Peacock", icon: "🦚", price: 2000 },
        { id: "elephant", name: "Elephant Motif", icon: "🐘", price: 1800 },
        { id: "geometric", name: "Geometric", icon: "◆", price: 800, pattern: "repeating-linear-gradient(45deg, #0002, #0002 2px, transparent 2px, transparent 15px)" },
        { id: "butta", name: "Butta / Butis", icon: "•", price: 1200, pattern: "radial-gradient(circle at 10px 10px, #fff2 2px, transparent 2px)" },
        { id: "temple", name: "Temple Motif", icon: "🏛️", price: 2000 }
    ],
    blouses: [
        { id: "matching", name: "Matching Blouse Piece", price: 0 },
        { id: "contrast", name: "Contrast Blouse Piece", price: 500 },
        { id: "readymade", name: "Ready-Made Blouse", price: 1500 },
        { id: "none", name: "No Blouse", price: -200 }
    ],
    occasions: ["Wedding", "Bridal", "Festival", "Party Wear", "Casual", "Office Wear", "Reception", "Engagement"]
};

// ===== CATEGORIES =====
const CATEGORIES = [
    { id: 'kanjivaram', name: 'Kanjivaram Silk', icon: '👘', gradient: 'linear-gradient(135deg, #800020 0%, #C62828 100%)', image: 'images/kanjivaram_maroon.png' },
    { id: 'banarasi', name: 'Banarasi Silk', icon: '✨', gradient: 'linear-gradient(135deg, #1565C0 0%, #1976D2 100%)', image: 'images/saree_blue_banarasi.png' },
    { id: 'cotton', name: 'Cotton Sarees', icon: '🍃', gradient: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)', image: 'images/saree_green_cotton.png' },
    { id: 'designer', name: 'Designer Sarees', icon: '👗', gradient: 'linear-gradient(135deg, #AD1457 0%, #D81B60 100%)', image: 'images/saree_pink_designer.png' },
    { id: 'chiffon', name: 'Chiffon & Georgette', icon: '💨', gradient: 'linear-gradient(135deg, #F06292 0%, #F48FB1 100%)', image: 'images/saree_pink_designer.png' },
    { id: 'bridal', name: 'Bridal Collection', icon: '👰', gradient: 'linear-gradient(135deg, #C62828 0%, #800020 100%)', image: 'images/saree_red_kanjivaram.png' },
    { id: 'pattu', name: 'Pattu Silk', icon: '🧶', gradient: 'linear-gradient(135deg, #B8892A 0%, #D4A93A 100%)', image: 'images/saree_gold_pattu.png' },
    { id: 'organza', name: 'Organza Silk', icon: '🦋', gradient: 'linear-gradient(135deg, #9C27B0 0%, #BA68C8 100%)', image: 'images/saree_pink_designer.png' }
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('spt_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('spt_wishlist') || '[]');
let currentUser = JSON.parse(localStorage.getItem('spt_user') || 'null');
let authToken = localStorage.getItem('spt_token') || null;
let products = []; // Will be fetched from backend

let currentPage = 'home';
let currentFilter = null;
let currentSort = 'featured';
let shopCurrentPage = 1;
const ITEMS_PER_PAGE = 12;
let heroInterval = null;
let currentHeroSlide = 0;

let customization = {
    fabric: null, color: null, border: null, borderWidth: 'Medium',
    borderColor: '#C4A265', pallu: null, weave: null,
    blouse: 'matching', occasion: 'Wedding'
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', async () => {
    await fetchProducts();
    if (typeof initRouter === 'function') initRouter();
    if (typeof initHeroCarousel === 'function') initHeroCarousel();
    if (typeof renderCategories === 'function') renderCategories();
    if (typeof renderFeaturedProducts === 'function') renderFeaturedProducts('bestseller');
    if (typeof renderTrendingProducts === 'function') renderTrendingProducts();
    if (typeof initSearch === 'function') initSearch();
    if (typeof initCart === 'function') initCart();
    if (typeof initAuth === 'function') initAuth();
    if (typeof initCustomizer === 'function') initCustomizer();
    if (typeof initAiGeneration === 'function') initAiGeneration();
    if (typeof initBackToTop === 'function') initBackToTop();
    if (typeof initMobileNav === 'function') initMobileNav();
    if (typeof initFilterToggles === 'function') initFilterToggles();
    if (typeof updateCartUI === 'function') updateCartUI();
    if (typeof updateWishlistCount === 'function') updateWishlistCount();
    if (typeof checkAuthStatus === 'function') checkAuthStatus();
});

async function fetchProducts() {
    try {
        const response = await fetch('/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        products = await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback to local array if server fails
        products = STATIC_PRODUCTS;
    }
}

// ===== ROUTER =====
function initRouter() {
    window.addEventListener('hashchange', handleRoute);
    document.querySelectorAll('[data-page]').forEach(el => {
        el.addEventListener('click', (e) => {
            const page = el.dataset.page;
            const filter = el.dataset.filter;

            if (filter) {
                currentFilter = filter;
                shopCurrentPage = 1; // Reset to first page when filtering
                if (window.location.hash === '#shop') {
                    renderShopPage(); // Force re-render if already on shop page
                }
            } else if (page === 'shop' && !filter) {
                currentFilter = null; // Clear filter if clicking "Shop All"
                shopCurrentPage = 1;
                if (window.location.hash === '#shop') {
                    renderShopPage();
                }
            }

            closeMobileNav();
        });
    });


    handleRoute();
}

function handleRoute() {
    const hash = window.location.hash.replace('#', '') || 'home';
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');

    pages.forEach(p => p.classList.remove('active'));
    navLinks.forEach(n => n.classList.remove('active'));

    let pageId;
    if (hash === 'home' || hash === '') {
        pageId = 'homePage';
        currentPage = 'home';
    } else if (hash === 'shop') {
        pageId = 'shopPage';
        currentPage = 'shop';
        renderShopPage();
    } else if (hash === 'customize') {
        pageId = 'customizePage';
        currentPage = 'customize';
    } else if (hash === 'checkout') {
        pageId = 'checkoutPage';
        currentPage = 'checkout';
        renderCheckoutPage();
    } else if (hash === 'orders') {
        pageId = 'ordersPage';
        currentPage = 'orders';
        renderOrdersPage();
    } else {
        pageId = 'homePage';
        currentPage = 'home';
    }

    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.add('active');

    const activeNav = document.querySelector(`.nav-link[data-page="${currentPage}"]`);
    if (activeNav) activeNav.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== HERO CAROUSEL =====
function initHeroCarousel() {
    const slides = document.querySelectorAll('.hero-slide');
    const dotsContainer = document.getElementById('heroDots');

    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = `hero-dot${i === 0 ? ' active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    document.getElementById('heroPrev').addEventListener('click', () => {
        goToSlide((currentHeroSlide - 1 + slides.length) % slides.length);
    });

    document.getElementById('heroNext').addEventListener('click', () => {
        goToSlide((currentHeroSlide + 1) % slides.length);
    });

    startHeroAutoplay();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');

    slides[currentHeroSlide].classList.remove('active');
    dots[currentHeroSlide].classList.remove('active');

    currentHeroSlide = index;

    slides[currentHeroSlide].classList.add('active');
    dots[currentHeroSlide].classList.add('active');

    startHeroAutoplay();
}

function startHeroAutoplay() {
    clearInterval(heroInterval);
    heroInterval = setInterval(() => {
        const slides = document.querySelectorAll('.hero-slide');
        goToSlide((currentHeroSlide + 1) % slides.length);
    }, 5000);
}

// ===== CATEGORIES =====
function renderCategories() {
    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = CATEGORIES.map(cat => `
        <a href="#shop" class="category-card" data-page="shop" data-filter="${cat.id}" onclick="currentFilter='${cat.id}'">
            <div class="category-card-bg" style="background: ${cat.gradient}">
                <img src="${cat.image}" alt="${cat.name}" class="category-card-img" onerror="this.style.display='none'">
                <span class="category-icon-fallback" style="font-size: 56px; opacity: 0.3">${cat.icon}</span>
            </div>
            <div class="category-card-content">
                <h3>${cat.name}</h3>
                <span>${products.filter(p => p.category === cat.id || (cat.id === 'bridal' && p.occasion.includes('bridal'))).length} Products</span>
            </div>
        </a>
    `).join('');
}

// ===== PRODUCT CARD RENDERER =====
function createProductCard(product) {
    const discount = Math.round((1 - product.price / product.originalPrice) * 100);
    const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '');
    const isWishlisted = wishlist.includes(product.id);

    let badges = '';
    if (product.tags.includes('bestseller')) badges += '<span class="card-badge badge-bestseller">Bestseller</span>';
    if (product.tags.includes('new')) badges += '<span class="card-badge badge-new">New</span>';
    if (discount >= 25) badges += `<span class="card-badge badge-sale">${discount}% Off</span>`;
    if (product.tags.includes('trending')) badges += '<span class="card-badge badge-trending">Trending</span>';

    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-card-image" onclick="openProductModal(${product.id})">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-card-badges">${badges}</div>
                <div class="product-card-actions">
                    <button class="product-action-btn ${isWishlisted ? 'wishlisted' : ''}" onclick="event.stopPropagation(); toggleWishlist(${product.id})" title="Add to Wishlist">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="product-action-btn" onclick="event.stopPropagation(); openProductModal(${product.id})" title="Quick View">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <div class="product-card-body" onclick="openProductModal(${product.id})">
                <div class="product-card-category">${product.category}</div>
                <h3 class="product-card-name">${product.name}</h3>
                <div class="product-card-rating">
                    <span class="stars">${stars}</span>
                    <span>${product.rating}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-card-price">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                    <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
                    <span class="discount-tag">${discount}% off</span>
                </div>
            </div>
            <div class="product-card-footer">
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
}

// ===== FEATURED products =====
function renderFeaturedProducts(tab) {
    const grid = document.getElementById('featuredGrid');
    let filtered;

    if (tab === 'bestseller') {
        filtered = products.filter(p => p.tags.includes('bestseller')).sort((a, b) => b.reviews - a.reviews);
    } else if (tab === 'new') {
        filtered = products.filter(p => p.tags.includes('new'));
    } else if (tab === 'trending') {
        filtered = products.filter(p => p.tags.includes('trending'));
    } else if (tab === 'sale') {
        filtered = products.filter(p => {
            const discount = Math.round((1 - p.price / p.originalPrice) * 100);
            return discount >= 25 || p.tags.includes('sale');
        });
    } else {
        filtered = products.slice(0, 8);
    }

    grid.innerHTML = filtered.slice(0, 8).map(createProductCard).join('');

    // Tab buttons
    document.querySelectorAll('#featuredTabs .tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
        btn.onclick = () => renderFeaturedProducts(btn.dataset.tab);
    });
}

// ===== TRENDING products =====
function renderTrendingProducts() {
    const container = document.getElementById('trendingScroll');
    const trending = products.filter(p => p.tags.includes('trending') || p.tags.includes('bestseller')).slice(0, 10);
    container.innerHTML = trending.map(createProductCard).join('');
}

// ===== SHOP PAGE =====
function renderShopPage() {
    let filtered = [...products];

    // Apply category filter from navigation
    if (currentFilter) {
        const f = currentFilter.toLowerCase();
        if (f === 'new') {
            filtered = filtered.filter(p => p.tags.includes('new'));
        } else if (f === 'sale') {
            filtered = filtered.filter(p => p.tags.includes('sale') || Math.round((1 - p.price / p.originalPrice) * 100) >= 25);
        } else if (f === 'bestseller') {
            filtered = filtered.filter(p => p.tags.includes('bestseller'));
        } else if (f === 'bridal') {
            filtered = filtered.filter(p => p.occasion.includes('bridal'));
        } else if (f === 'wedding') {
            filtered = filtered.filter(p => p.occasion.includes('wedding'));
        } else if (f === 'festival') {
            filtered = filtered.filter(p => p.occasion.includes('festival'));
        } else if (f === 'party') {
            filtered = filtered.filter(p => p.occasion.includes('party'));
        } else if (f === 'casual') {
            filtered = filtered.filter(p => p.occasion.includes('casual'));
        } else {
            filtered = filtered.filter(p => p.category === f || p.fabric === f);
        }
    }

    // Apply sidebar filters
    const checkedFabrics = [...document.querySelectorAll('#fabricFilter input:checked')].map(i => i.value);
    if (checkedFabrics.length) filtered = filtered.filter(p => checkedFabrics.includes(p.fabric));

    const checkedOccasions = [...document.querySelectorAll('#occasionFilter input:checked')].map(i => i.value);
    if (checkedOccasions.length) filtered = filtered.filter(p => p.occasion.some(o => checkedOccasions.includes(o)));

    const checkedBorders = [...document.querySelectorAll('#borderFilter input:checked')].map(i => i.value);
    if (checkedBorders.length) filtered = filtered.filter(p => checkedBorders.includes(p.border));

    const selectedColors = [...document.querySelectorAll('#colorFilter .color-swatch.active')].map(s => s.dataset.color);
    if (selectedColors.length) filtered = filtered.filter(p => selectedColors.includes(p.color));

    const maxPrice = document.getElementById('priceSlider').value;
    filtered = filtered.filter(p => p.price <= maxPrice);

    const ratingFilter = document.querySelector('#ratingFilter input:checked');
    if (ratingFilter) {
        filtered = filtered.filter(p => p.rating >= parseInt(ratingFilter.value));
    }

    // Sort
    const sortSelect = document.getElementById('sortSelect');
    const sort = sortSelect.value;
    if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else if (sort === 'newest') filtered.sort((a, b) => (b.tags.includes('new') ? 1 : 0) - (a.tags.includes('new') ? 1 : 0));
    else if (sort === 'name-az') filtered.sort((a, b) => a.name.localeCompare(b.name));

    // Update breadcrumb
    const breadcrumb = document.getElementById('shopBreadcrumb');
    breadcrumb.textContent = currentFilter ? (currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1) + ' Sarees') : 'All Sarees';

    // Results count
    document.getElementById('resultsCount').textContent = `${filtered.length} products`;

    // Pagination
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    if (shopCurrentPage > totalPages) shopCurrentPage = 1;
    const startIdx = (shopCurrentPage - 1) * ITEMS_PER_PAGE;
    const pageProducts = filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE);

    // Render
    const grid = document.getElementById('shopGrid');
    if (pageProducts.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 80px 20px; color: var(--text-muted);">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 16px; display: block;"></i>
                <h3 style="margin-bottom: 8px;">No products found</h3>
                <p>Try adjusting your filters or browse all sarees.</p>
                <button class="btn btn-outline" style="margin-top: 16px;" onclick="currentFilter=null; document.getElementById('clearFilters').click();">Clear Filters</button>
            </div>
        `;
    } else {
        grid.innerHTML = pageProducts.map(createProductCard).join('');
    }

    // Pagination buttons
    renderPagination(totalPages);

    // Active filters display
    renderActiveFilters();
}

function renderPagination(totalPages) {
    const container = document.getElementById('shopPagination');
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }

    let html = `<button class="page-btn" onclick="goToShopPage(${shopCurrentPage - 1})" ${shopCurrentPage === 1 ? 'disabled' : ''}><i class="fas fa-chevron-left"></i></button>`;

    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="page-btn ${i === shopCurrentPage ? 'active' : ''}" onclick="goToShopPage(${i})">${i}</button>`;
    }

    html += `<button class="page-btn" onclick="goToShopPage(${shopCurrentPage + 1})" ${shopCurrentPage === totalPages ? 'disabled' : ''}><i class="fas fa-chevron-right"></i></button>`;

    container.innerHTML = html;
}

function goToShopPage(page) {
    shopCurrentPage = page;
    renderShopPage();
    document.getElementById('shopPage').scrollIntoView({ behavior: 'smooth' });
}

function renderActiveFilters() {
    const container = document.getElementById('activeFilters');
    let tags = [];

    if (currentFilter) {
        tags.push(`<div class="active-filter-tag">${currentFilter} <button onclick="currentFilter=null; renderShopPage()">×</button></div>`);
    }

    document.querySelectorAll('.shop-sidebar input:checked').forEach(input => {
        tags.push(`<div class="active-filter-tag">${input.value} <button onclick="document.querySelector('.shop-sidebar input[value=\\'${input.value}\\']').click();">×</button></div>`);
    });

    document.querySelectorAll('#colorFilter .color-swatch.active').forEach(swatch => {
        tags.push(`<div class="active-filter-tag">${swatch.title} <button onclick="document.querySelector('#colorFilter .color-swatch[data-color=\\'${swatch.dataset.color}\\']').click();">×</button></div>`);
    });

    container.innerHTML = tags.join('');
}

// ===== SHOP FILTERS & EVENTS =====
function initFilterToggles() {
    // Filter title toggles
    document.querySelectorAll('.filter-title').forEach(title => {
        title.addEventListener('click', () => {
            const target = document.getElementById(title.dataset.toggle);
            if (target) {
                target.style.display = target.style.display === 'none' ? 'flex' : 'none';
                title.classList.toggle('collapsed');
            }
        });
    });

    // Sort change
    document.getElementById('sortSelect').addEventListener('change', () => {
        if (currentPage === 'shop') renderShopPage();
    });

    // Price slider
    document.getElementById('priceSlider').addEventListener('input', (e) => {
        document.getElementById('priceSliderVal').textContent = `₹${parseInt(e.target.value).toLocaleString()}`;
        if (currentPage === 'shop') renderShopPage();
    });

    // Checkbox filters
    document.querySelectorAll('.shop-sidebar input[type="checkbox"], .shop-sidebar input[type="radio"]').forEach(input => {
        input.addEventListener('change', () => {
            if (currentPage === 'shop') renderShopPage();
        });
    });

    // Color swatches
    document.querySelectorAll('#colorFilter .color-swatch').forEach(swatch => {
        swatch.addEventListener('click', () => {
            swatch.classList.toggle('active');
            if (currentPage === 'shop') renderShopPage();
        });
    });

    // Clear filters
    document.getElementById('clearFilters').addEventListener('click', () => {
        currentFilter = null;
        document.querySelectorAll('.shop-sidebar input:checked').forEach(i => i.checked = false);
        document.querySelectorAll('#colorFilter .color-swatch.active').forEach(s => s.classList.remove('active'));
        document.getElementById('priceSlider').value = 50000;
        document.getElementById('priceSliderVal').textContent = '₹50,000';
        document.getElementById('priceMin').value = '';
        document.getElementById('priceMax').value = '';
        renderShopPage();
    });

    // View toggle
    document.getElementById('viewGrid').addEventListener('click', () => {
        document.getElementById('shopGrid').classList.remove('list-view');
        document.getElementById('viewGrid').classList.add('active');
        document.getElementById('viewList').classList.remove('active');
    });

    document.getElementById('viewList').addEventListener('click', () => {
        document.getElementById('shopGrid').classList.add('list-view');
        document.getElementById('viewList').classList.add('active');
        document.getElementById('viewGrid').classList.remove('active');
    });

    // Mobile filter toggle
    document.getElementById('filterToggleBtn').addEventListener('click', () => {
        const sidebar = document.getElementById('shopSidebar');
        sidebar.classList.toggle('active');
    });
}

// ===== SEARCH =====
function initSearch() {
    const input = document.getElementById('searchInput');
    const suggestions = document.getElementById('searchSuggestions');

    input.addEventListener('input', () => {
        const q = input.value.trim().toLowerCase();
        if (q.length < 2) {
            suggestions.classList.remove('active');
            return;
        }

        const results = products.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.fabric.toLowerCase().includes(q) ||
            p.color.toLowerCase().includes(q)
        ).slice(0, 6);

        if (results.length === 0) {
            suggestions.classList.remove('active');
            return;
        }

        suggestions.innerHTML = results.map(p => `
            <div class="search-suggestion-item" onclick="openProductModal(${p.id}); document.getElementById('searchSuggestions').classList.remove('active'); document.getElementById('searchInput').value='';">
                <img src="${p.image}" alt="${p.name}">
                <div class="suggestion-text">
                    <div class="suggestion-name">${p.name}</div>
                    <div class="suggestion-price">₹${p.price.toLocaleString()}</div>
                </div>
            </div>
        `).join('');

        suggestions.classList.add('active');
    });

    input.addEventListener('blur', () => {
        setTimeout(() => suggestions.classList.remove('active'), 200);
    });

    document.getElementById('searchBtn').addEventListener('click', () => {
        const q = input.value.trim();
        if (q) {
            currentFilter = q;
            window.location.hash = '#shop';
            input.value = '';
            suggestions.classList.remove('active');
        }
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('searchBtn').click();
        }
    });
}

// ===== PRODUCT MODAL =====
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const discount = Math.round((1 - product.price / product.originalPrice) * 100);
    const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '');

    document.getElementById('productMainImage').innerHTML = `<img src="${product.image}" alt="${product.name}">`;
    document.getElementById('productBadge').textContent = product.category.toUpperCase();
    document.getElementById('productDetailName').textContent = product.name;
    document.getElementById('productDetailRating').innerHTML = `<span class="stars">${stars}</span> ${product.rating} <span class="rating-count">(${product.reviews} reviews)</span>`;
    document.getElementById('productDetailPrice').textContent = `₹${product.price.toLocaleString()}`;
    document.getElementById('productDetailOriginal').textContent = `₹${product.originalPrice.toLocaleString()}`;
    document.getElementById('productDetailDiscount').textContent = `${discount}% off`;
    document.getElementById('productDetailDesc').textContent = product.description;

    document.getElementById('productDetailMeta').innerHTML = Object.entries(product.meta).map(([key, val]) => `
        <div class="meta-item"><span class="meta-label">${key.charAt(0).toUpperCase() + key.slice(1)}:</span> <span class="meta-value">${val}</span></div>
    `).join('');

    document.getElementById('qtyInput').value = 1;

    // Actions
    document.getElementById('addToCartDetail').onclick = () => {
        const qty = parseInt(document.getElementById('qtyInput').value);
        addToCart(productId, qty);
        closeProductModal();
    };

    document.getElementById('buyNowDetail').onclick = () => {
        const qty = parseInt(document.getElementById('qtyInput').value);
        addToCart(productId, qty);
        closeProductModal();
        openCart();
    };

    document.getElementById('wishlistDetail').onclick = () => toggleWishlist(productId);

    document.getElementById('qtyMinus').onclick = () => {
        const inp = document.getElementById('qtyInput');
        if (parseInt(inp.value) > 1) inp.value = parseInt(inp.value) - 1;
    };

    document.getElementById('qtyPlus').onclick = () => {
        const inp = document.getElementById('qtyInput');
        if (parseInt(inp.value) < 10) inp.value = parseInt(inp.value) + 1;
    };

    document.getElementById('productModalOverlay').classList.add('active');
    document.getElementById('productModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('productModalOverlay').classList.remove('active');
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = '';
}

document.getElementById('productModalClose').addEventListener('click', closeProductModal);
document.getElementById('productModalOverlay').addEventListener('click', closeProductModal);

// ===== CART =====
function initCart() {
    document.getElementById('cartBtn').addEventListener('click', openCart);
    document.getElementById('cartClose').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);

    document.getElementById('applyCouponBtn').addEventListener('click', () => {
        const code = document.getElementById('couponInput').value.trim().toUpperCase();
        if (code === 'PADMA20' || code === 'SILK30') {
            showToast('Coupon applied successfully!', 'success');
            updateCartUI();
        } else {
            showToast('Invalid coupon code', 'error');
        }
    });

    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Your cart is empty!', 'error');
            return;
        }
        showToast('Order placed successfully! 🎉', 'success');
        cart = [];
        saveCart();
        updateCartUI();
        closeCart();
    });
}

function openCart() {
    document.getElementById('cartOverlay').classList.add('active');
    document.getElementById('cartSidebar').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartOverlay').classList.remove('active');
    document.getElementById('cartSidebar').classList.remove('active');
    document.body.style.overflow = '';
}

function addToCart(productId, qty = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId && !item.custom);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            qty: qty
        });
    }

    saveCart();
    updateCartUI();
    showToast(`${product.name} added to cart!`, 'success');
}

function addCustomToCart(customItem) {
    cart.push(customItem);
    saveCart();
    updateCartUI();
    showToast('Custom saree added to cart!', 'success');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function updateCartQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        removeFromCart(index);
        return;
    }
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('spt_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cartCount').textContent = count;
    document.getElementById('cartItemCount').textContent = count;

    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartFooter = document.getElementById('cartFooter');

    if (cart.length === 0) {
        cartEmpty.style.display = 'flex';
        cartItems.style.display = 'none';
        cartFooter.style.display = 'none';
        return;
    }

    cartEmpty.style.display = 'none';
    cartItems.style.display = 'flex';
    cartFooter.style.display = 'block';

    cartItems.innerHTML = cart.map((item, i) => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-variant">${item.category || 'Custom Design'}</div>
                <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
                <div class="cart-item-qty">
                    <button class="cart-qty-btn" onclick="updateCartQty(${i}, -1)">−</button>
                    <span>${item.qty}</span>
                    <button class="cart-qty-btn" onclick="updateCartQty(${i}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${i})" title="Remove"><i class="fas fa-trash-alt"></i></button>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const coupon = document.getElementById('couponInput').value.trim().toUpperCase();
    let discount = 0;
    if (coupon === 'PADMA20') discount = Math.round(subtotal * 0.2);
    if (coupon === 'SILK30') discount = Math.round(subtotal * 0.3);
    const shipping = subtotal >= 2999 ? 0 : 199;
    const total = subtotal - discount + shipping;

    document.getElementById('cartSubtotal').textContent = `₹${subtotal.toLocaleString()}`;
    document.getElementById('cartDiscount').textContent = `-₹${discount.toLocaleString()}`;
    document.getElementById('cartShipping').textContent = shipping === 0 ? 'Free' : `₹${shipping}`;
    document.getElementById('cartTotal').textContent = `₹${total.toLocaleString()}`;
}

// ===== WISHLIST =====
function toggleWishlist(productId) {
    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast('Removed from wishlist', 'info');
    } else {
        wishlist.push(productId);
        showToast('Added to wishlist ❤️', 'success');
    }
    localStorage.setItem('spt_wishlist', JSON.stringify(wishlist));
    updateWishlistCount();

    // Re-render current product cards
    if (currentPage === 'home') {
        // Re-render without breaking tab state
    } else if (currentPage === 'shop') {
        renderShopPage();
    }
}

function updateWishlistCount() {
    document.getElementById('wishlistCount').textContent = wishlist.length;
}

// ===== AUTH =====
function initAuth() {
    document.getElementById('accountBtn').addEventListener('click', () => {
        if (currentUser) {
            // If already logged in, maybe show a profile menu? 
            // For now, let's just toggle a logout option or stay as is.
            if (confirm(`Logged in as ${currentUser.name}. Do you want to logout?`)) {
                logout();
            }
            return;
        }
        document.getElementById('authOverlay').classList.add('active');
        document.getElementById('authModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    document.getElementById('authClose').addEventListener('click', closeAuth);
    document.getElementById('authOverlay').addEventListener('click', closeAuth);

    document.getElementById('loginTab').addEventListener('click', () => {
        document.getElementById('loginTab').classList.add('active');
        document.getElementById('registerTab').classList.remove('active');
        document.getElementById('loginForm').classList.remove('hidden');
        document.getElementById('registerForm').classList.add('hidden');
    });

    document.getElementById('registerTab').addEventListener('click', () => {
        document.getElementById('registerTab').classList.add('active');
        document.getElementById('loginTab').classList.remove('active');
        document.getElementById('registerForm').classList.remove('hidden');
        document.getElementById('loginForm').classList.add('hidden');
    });

    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="text"]').value;
        const password = e.target.querySelector('input[type="password"]').value;

        try {
            const formData = new FormData();
            formData.append('username', email);
            formData.append('password', password);

            const response = await fetch('/api/auth/login', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.detail || 'Login failed');
            }

            const data = await response.json();
            loginUser(data);
            showToast('Signed in successfully! Welcome back.', 'success');
            closeAuth();
        } catch (error) {
            showToast(error.message, 'error');
        }
    });

    document.getElementById('registerForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = e.target.querySelector('input[type="text"]').value;
        const email = e.target.querySelector('input[type="email"]').value;
        const password = e.target.querySelector('input[type="password"]').value;

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, name })
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.detail || 'Registration failed');
            }

            const data = await response.json();
            loginUser(data);
            showToast('Account created successfully! Welcome.', 'success');
            closeAuth();
        } catch (error) {
            showToast(error.message, 'error');
        }
    });
}

function loginUser(data) {
    currentUser = data.user;
    authToken = data.access_token;
    localStorage.setItem('spt_user', JSON.stringify(currentUser));
    localStorage.setItem('spt_token', authToken);
    checkAuthStatus();
}

function logout() {
    currentUser = null;
    authToken = null;
    localStorage.removeItem('spt_user');
    localStorage.removeItem('spt_token');
    checkAuthStatus();
    window.location.hash = '#home';
    showToast('Logged out successfully', 'info');
}

function checkAuthStatus() {
    const accountBtn = document.querySelector('#accountBtn .action-text');
    const navOrders = document.getElementById('navOrdersLink');
    const mobileOrders = document.getElementById('mobileOrdersLink');

    if (currentUser) {
        accountBtn.innerHTML = `Hello, ${currentUser.name.split(' ')[0]}<br><strong>Account</strong>`;
        if (navOrders) navOrders.style.display = 'block';
        if (mobileOrders) mobileOrders.style.display = 'flex';
    } else {
        accountBtn.innerHTML = 'Hello, Sign in<br><strong>Account</strong>';
        if (navOrders) navOrders.style.display = 'none';
        if (mobileOrders) mobileOrders.style.display = 'none';
    }
}

function closeAuth() {
    document.getElementById('authOverlay').classList.remove('active');
    document.getElementById('authModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== CUSTOMIZER =====
function initCustomizer() {
    renderFabricOptions();
    renderColorOptions();
    renderBorderOptions();
    renderBorderWidthOptions();
    renderBorderColorOptions();
    renderPalluOptions();
    renderWeaveOptions();
    renderBlouseOptions();
    renderOccasionOptions();
    updateCustomPreview();
    initAiGeneration();

    document.getElementById('customColorPicker').addEventListener('input', (e) => {
        customization.color = e.target.value;
        document.getElementById('customColorHex').textContent = e.target.value;
        // Deselect palette colors
        document.querySelectorAll('#colorOptions .color-option').forEach(c => c.classList.remove('selected'));
        updateCustomPreview();
    });

    document.getElementById('addCustomToCart').addEventListener('click', () => {
        if (!customization.fabric) {
            showToast('Please select a fabric type', 'error');
            return;
        }
        if (!customization.color) {
            showToast('Please select a color', 'error');
            return;
        }

        const price = calculateCustomPrice();
        const fabricInfo = CUSTOMIZATION.fabrics.find(f => f.id === customization.fabric);
        const borderInfo = CUSTOMIZATION.borders.find(b => b.id === customization.border);
        const palluInfo = CUSTOMIZATION.pallus.find(p => p.id === customization.pallu);

        const item = {
            id: 'custom_' + Date.now(),
            name: `Custom ${fabricInfo?.name || ''} Saree`,
            price: price,
            image: 'images/saree_red_kanjivaram.png',
            category: `Custom: ${fabricInfo?.name || ''}, ${borderInfo?.name || 'No Border'}, ${palluInfo?.name || 'No Pallu'}`,
            qty: 1,
            custom: true
        };

        addCustomToCart(item);
        openCart();
    });

    document.getElementById('resetCustomization').addEventListener('click', () => {
        customization = {
            fabric: null, color: null, border: null, borderWidth: 'Medium',
            borderColor: '#C4A265', pallu: null, weave: null,
            blouse: 'matching', occasion: 'Wedding'
        };
        initCustomizer();
        showToast('Customization reset', 'info');
    });
}

function renderFabricOptions() {
    const container = document.getElementById('fabricOptions');
    container.innerHTML = CUSTOMIZATION.fabrics.map(f => `
        <div class="option-card ${customization.fabric === f.id ? 'selected' : ''}" onclick="selectFabric('${f.id}')">
            <span class="option-icon">${f.icon}</span>
            <span class="option-name">${f.name}</span>
            <span class="option-price">₹${f.price.toLocaleString()}</span>
        </div>
    `).join('');
}

function selectFabric(id) {
    customization.fabric = id;
    renderFabricOptions();
    updateCustomPreview();
}

function renderColorOptions() {
    const container = document.getElementById('colorOptions');
    container.innerHTML = CUSTOMIZATION.colors.map(c => `
        <button class="color-option ${customization.color === c.hex ? 'selected' : ''}"
            style="background: ${c.hex}${c.name === 'White' || c.name === 'Cream' ? '; border: 1px solid #555' : ''}"
            title="${c.name}"
            onclick="selectColor('${c.hex}')">
        </button>
    `).join('');
}

function selectColor(hex) {
    customization.color = hex;
    document.getElementById('customColorPicker').value = hex;
    document.getElementById('customColorHex').textContent = hex;
    renderColorOptions();
    updateCustomPreview();
}

function renderBorderOptions() {
    const container = document.getElementById('borderOptions');
    container.innerHTML = CUSTOMIZATION.borders.map(b => `
        <div class="option-card ${customization.border === b.id ? 'selected' : ''}" onclick="selectBorder('${b.id}')">
            <span class="option-icon">${b.icon}</span>
            <span class="option-name">${b.name}</span>
            <span class="option-price">+₹${b.price.toLocaleString()}</span>
        </div>
    `).join('');
}

function selectBorder(id) {
    customization.border = id;
    renderBorderOptions();
    updateCustomPreview();
}

function renderBorderWidthOptions() {
    const container = document.getElementById('borderWidthOptions');
    container.innerHTML = CUSTOMIZATION.borderWidths.map(w => `
        <button class="option-pill ${customization.borderWidth === w ? 'selected' : ''}" onclick="selectBorderWidth('${w}')">${w}</button>
    `).join('');
}

function selectBorderWidth(w) {
    customization.borderWidth = w;
    renderBorderWidthOptions();
    updateCustomPreview();
}

function renderBorderColorOptions() {
    const container = document.getElementById('borderColorOptions');
    container.innerHTML = CUSTOMIZATION.borderColors.map(c => `
        <button class="color-option ${customization.borderColor === c.hex ? 'selected' : ''}"
            style="background: ${c.hex}" title="${c.name}"
            onclick="selectBorderColor('${c.hex}')">
        </button>
    `).join('');
}

function selectBorderColor(hex) {
    customization.borderColor = hex;
    renderBorderColorOptions();
    updateCustomPreview();
}

function renderPalluOptions() {
    const container = document.getElementById('palluOptions');
    container.innerHTML = CUSTOMIZATION.pallus.map(p => `
        <div class="option-card ${customization.pallu === p.id ? 'selected' : ''}" onclick="selectPallu('${p.id}')">
            <span class="option-icon">${p.icon}</span>
            <span class="option-name">${p.name}</span>
            <span class="option-price">+₹${p.price.toLocaleString()}</span>
        </div>
    `).join('');
}

function selectPallu(id) {
    customization.pallu = id;
    renderPalluOptions();
    updateCustomPreview();
}

function renderWeaveOptions() {
    const container = document.getElementById('weaveOptions');
    container.innerHTML = CUSTOMIZATION.weaves.map(w => `
        <div class="option-card ${customization.weave === w.id ? 'selected' : ''}" onclick="selectWeave('${w.id}')">
            <span class="option-icon">${w.icon}</span>
            <span class="option-name">${w.name}</span>
            <span class="option-price">+₹${w.price.toLocaleString()}</span>
        </div>
    `).join('');
}

function selectWeave(id) {
    customization.weave = id;
    renderWeaveOptions();
    updateCustomPreview();
}

function renderBlouseOptions() {
    const container = document.getElementById('blouseOptions');
    container.innerHTML = CUSTOMIZATION.blouses.map(b => `
        <button class="option-pill ${customization.blouse === b.id ? 'selected' : ''}" onclick="selectBlouse('${b.id}')">${b.name} ${b.price > 0 ? '(+₹' + b.price + ')' : b.price < 0 ? '(-₹' + Math.abs(b.price) + ')' : ''}</button>
    `).join('');
}

function selectBlouse(id) {
    customization.blouse = id;
    renderBlouseOptions();
    updateCustomPreview();
}

function renderOccasionOptions() {
    const container = document.getElementById('occasionOptions');
    container.innerHTML = CUSTOMIZATION.occasions.map(o => `
        <button class="option-pill ${customization.occasion === o ? 'selected' : ''}" onclick="selectOccasion('${o}')">${o}</button>
    `).join('');
}

function selectOccasion(o) {
    customization.occasion = o;
    renderOccasionOptions();
    updateCustomPreview();
}

function calculateCustomPrice() {
    let price = 0;
    const fabric = CUSTOMIZATION.fabrics.find(f => f.id === customization.fabric);
    if (fabric) price += fabric.price;
    const border = CUSTOMIZATION.borders.find(b => b.id === customization.border);
    if (border) price += border.price;
    const pallu = CUSTOMIZATION.pallus.find(p => p.id === customization.pallu);
    if (pallu) price += pallu.price;
    const weave = CUSTOMIZATION.weaves.find(w => w.id === customization.weave);
    if (weave) price += weave.price;
    const blouse = CUSTOMIZATION.blouses.find(b => b.id === customization.blouse);
    if (blouse) price += blouse.price;

    // Width multiplier
    if (customization.borderWidth === 'Wide') price += 500;
    if (customization.borderWidth === 'Extra Wide') price += 1000;

    return Math.max(0, price);
}

function updateCustomPreview() {
    // Preview body color
    const body = document.getElementById('previewBody');
    body.style.background = customization.color || '#D32F2F';

    // Border
    const borderTop = document.getElementById('previewBorderTop');
    const borderBottom = document.getElementById('previewBorderBottom');
    const borderColor = customization.borderColor || '#C4A265';

    let borderH = 30;
    if (customization.borderWidth === 'Narrow') borderH = 15;
    if (customization.borderWidth === 'Wide') borderH = 45;
    if (customization.borderWidth === 'Extra Wide') borderH = 60;

    borderTop.style.height = borderH + 'px';
    borderBottom.style.height = borderH + 'px';

    const borderStyle = customization.border;
    if (borderStyle === 'temple') {
        borderTop.style.background = `repeating-linear-gradient(90deg, ${borderColor}, ${borderColor} 15px, transparent 15px, transparent 17px)`;
        borderBottom.style.background = borderTop.style.background;
    } else if (borderStyle === 'zari') {
        borderTop.style.background = `linear-gradient(90deg, ${borderColor}, #E8D5A8, ${borderColor})`;
        borderBottom.style.background = borderTop.style.background;
    } else if (borderStyle === 'contrast') {
        borderTop.style.background = borderColor;
        borderBottom.style.background = borderColor;
    } else {
        borderTop.style.background = `linear-gradient(90deg, ${borderColor}, #E8D5A8, ${borderColor})`;
        borderBottom.style.background = borderTop.style.background;
    }

    // Pallu
    const pallu = document.getElementById('previewPallu');
    if (customization.pallu === 'heavyzari') {
        pallu.style.background = `linear-gradient(180deg, ${borderColor}80, transparent 70%)`;
        pallu.style.width = '45%';
    } else if (customization.pallu === 'embroidered') {
        pallu.style.background = `linear-gradient(180deg, ${borderColor}50, transparent 50%)`;
        pallu.style.width = '35%';
    } else if (customization.pallu === 'plain') {
        pallu.style.background = 'transparent';
    } else {
        pallu.style.background = `linear-gradient(180deg, ${borderColor}40, transparent 60%)`;
        pallu.style.width = '40%';
    }

    // Motifs
    const motifs = document.getElementById('previewMotifs');
    const weave = CUSTOMIZATION.weaves.find(w => w.id === customization.weave);
    if (weave && weave.pattern) {
        motifs.style.background = weave.pattern;
        motifs.style.opacity = '0.2';
    } else if (customization.weave === 'plain') {
        motifs.style.background = 'none';
    } else if (customization.weave) {
        motifs.style.background = `radial-gradient(circle at 20px 20px, ${borderColor}20 3px, transparent 3px)`;
        motifs.style.backgroundSize = '40px 40px';
        motifs.style.opacity = '0.3';
    } else {
        motifs.style.background = 'none';
    }

    // Info
    const fabricInfo = CUSTOMIZATION.fabrics.find(f => f.id === customization.fabric);
    const borderInfo = CUSTOMIZATION.borders.find(b => b.id === customization.border);
    const palluInfo = CUSTOMIZATION.pallus.find(p => p.id === customization.pallu);
    const weaveInfo = CUSTOMIZATION.weaves.find(w => w.id === customization.weave);

    document.getElementById('previewTitle').textContent = fabricInfo ? `Custom ${fabricInfo.name} Saree` : 'Your Custom Saree';
    document.getElementById('previewDesc').textContent = fabricInfo ? `${fabricInfo.name} with ${borderInfo?.name || 'custom border'} and ${palluInfo?.name || 'elegant pallu'}` : 'Select options to see your design come to life';

    const price = calculateCustomPrice();
    document.getElementById('previewPrice').textContent = `₹${price.toLocaleString()}`;
    document.getElementById('customTotalPrice').textContent = `₹${price.toLocaleString()}`;

    // Summary
    const summary = document.getElementById('customSummary');
    summary.innerHTML = `
        <div class="summary-item"><span class="label">Fabric</span><span class="value">${fabricInfo?.name || '—'}</span></div>
        <div class="summary-item"><span class="label">Color</span><span class="value"><span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${customization.color || '#999'};vertical-align:middle;margin-right:4px;border:1px solid #555"></span> ${customization.color || '—'}</span></div>
        <div class="summary-item"><span class="label">Border</span><span class="value">${borderInfo?.name || '—'}</span></div>
        <div class="summary-item"><span class="label">Border Width</span><span class="value">${customization.borderWidth}</span></div>
        <div class="summary-item"><span class="label">Border Color</span><span class="value"><span style="display:inline-block;width:14px;height:14px;border-radius:50%;background:${customization.borderColor};vertical-align:middle;margin-right:4px;border:1px solid #555"></span></span></div>
        <div class="summary-item"><span class="label">Pallu</span><span class="value">${palluInfo?.name || '—'}</span></div>
        <div class="summary-item"><span class="label">Weave</span><span class="value">${weaveInfo?.name || '—'}</span></div>
        <div class="summary-item"><span class="label">Blouse</span><span class="value">${CUSTOMIZATION.blouses.find(b => b.id === customization.blouse)?.name || '—'}</span></div>
        <div class="summary-item"><span class="label">Occasion</span><span class="value">${customization.occasion || '—'}</span></div>
    `;
}

// ===== AI IMAGE GENERATION (Connected to FastAPI Backend) =====
// API: FastAPI + Stable Diffusion v1.5 (main.py backend at localhost:8000)
// Fallback: Pollinations.ai (free Stable Diffusion API, no key required)

const AI_CONFIG = {
    backendUrl: '/generate',
    fallbackUrl: 'https://image.pollinations.ai/prompt/',
    useBackend: true  // Backend handles Pollinations.ai to avoid CORS issues
};

let isGeneratingAi = false;

/**
 * Convert a hex color string to its closest human-readable name.
 * First tries CUSTOMIZATION.borderColors, then CUSTOMIZATION.colors,
 * then falls back to a broad color-name map.
 */
function hexToColorName(hex) {
    if (!hex) return 'gold';
    const h = hex.toLowerCase();

    // Check border color palette first
    const borderMatch = CUSTOMIZATION.borderColors.find(c => c.hex.toLowerCase() === h);
    if (borderMatch) return borderMatch.name;

    // Check main saree color palette
    const colorMatch = CUSTOMIZATION.colors.find(c => c.hex.toLowerCase() === h);
    if (colorMatch) return colorMatch.name;

    // Broad fallback map for custom picker values
    function getColorName(hex) {
        if (!hex) return "Pink";

        const preset = {
            "#D32F2F": "Red",
            "#800020": "Maroon",
            "#C4A265": "Gold",
            "#1565C0": "Royal Blue",
            "#2E7D32": "Emerald Green",
            "#E91E8C": "Pink",
            "#7B1FA2": "Purple",
            "#EF6C00": "Orange",
            "#F9A825": "Yellow",
            "#212121": "Black",
            "#FAFAFA": "White",
            "#FFFDD0": "Cream",
            "#00897B": "Teal",
            "#FFAB91": "Peach",
            "#AD1457": "Magenta",
            "#0D47A1": "Navy Blue"
        };

        hex = hex.toUpperCase();

        if (preset[hex]) return preset[hex];

        return "custom color " + hex;
    }
    // Very rough hue-based fallback
    try {
        const r = parseInt(h.slice(1, 3), 16), g = parseInt(h.slice(3, 5), 16), b = parseInt(h.slice(5, 7), 16);
        const max = Math.max(r, g, b);
        if (max === r && r > 150) return 'Red';
        if (max === g && g > 120) return 'Green';
        if (max === b && b > 120) return 'Blue';
        if (r > 150 && g > 130 && b < 80) return 'Golden';
        if (r < 60 && g < 60 && b < 60) return 'Black';
        if (r > 220 && g > 220 && b > 220) return 'White';
    } catch (e) { }
    return 'metallic';
}

function initAiGeneration() {
    const generateBtn = document.getElementById('generateAiBtn');
    if (generateBtn) {
        generateBtn.addEventListener('click', generateAiPreview);
    }
}

async function generateAiPreview() {
    if (isGeneratingAi) {
        showToast('AI is already generating an image, please wait...', 'info');
        return;
    }

    // Validate selections
    if (!customization.fabric) {
        showToast('Please select a fabric type first', 'error');
        return;
    }
    if (!customization.color) {
        showToast('Please select a color first', 'error');
        return;
    }

    // Gather customization details for an accurate, detailed AI prompt
    const fabricInfo = CUSTOMIZATION.fabrics.find(f => f.id === customization.fabric);
    const borderInfo = CUSTOMIZATION.borders.find(b => b.id === customization.border);
    const palluInfo = CUSTOMIZATION.pallus.find(p => p.id === customization.pallu);
    const weaveInfo = CUSTOMIZATION.weaves.find(w => w.id === customization.weave);
    const colorInfo = CUSTOMIZATION.colors.find(c => c.hex === customization.color);

    // Resolve border color name (never send a hex code to the AI)
    const borderColorName = hexToColorName(customization.borderColor || '#C4A265');

    const fabricText = fabricInfo?.name || 'Silk';
    const colorText = colorInfo?.name || hexToColorName(customization.color) || 'Red';
    const borderWidth = customization.borderWidth || 'Medium';
    const borderStyle = borderInfo?.name || 'Temple Border';
    const palluText = palluInfo?.name || 'elegant zari pallu';
    const weaveText = weaveInfo && weaveInfo.id !== 'plain' ? `${weaveInfo.name} weave pattern on the body, ` : '';
    const occasionText = customization.occasion || 'Wedding';

    // Rich, fully-described border text — border COLOR is the dominant, first descriptor
    // SD pays most attention to the first few tokens, so lead with color
    const borderText = `a vivid ${borderColorName} colored ${borderWidth} ${borderStyle}, with ${borderColorName} thread work and ${borderColorName} zari embroidery on the border`;

    // Show loading state
    isGeneratingAi = true;
    const loadingEl = document.getElementById('aiLoading');
    const overlayEl = document.getElementById('aiImageOverlay');
    const generateBtn = document.getElementById('generateAiBtn');

    loadingEl.classList.add('active');
    overlayEl.classList.remove('active');
    generateBtn.disabled = true;
    generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';

    // Update loading message based on API being used
    const loadingSub = loadingEl.querySelector('.ai-loading-sub');
    if (loadingSub) {
        loadingSub.textContent = AI_CONFIG.useBackend
            ? 'Powered by FastAPI + Stable Diffusion v1.5 (local backend)'
            : 'Powered by Pollinations.ai (Free Stable Diffusion API)';
    }

    try {
        let imageUrl = null;

        if (AI_CONFIG.useBackend) {
            // ============================
            // METHOD 1: FastAPI Backend
            // POST to /generate endpoint
            // ============================
            try {
                const formData = new FormData();
                formData.append('fabric_text', fabricText);
                formData.append('color_text', colorText);
                formData.append('border_text', borderText);
                formData.append('pallu_text', palluText);
                formData.append('weave_text', weaveText);
                formData.append('occasion_text', occasionText);

                const response = await fetch(AI_CONFIG.backendUrl, {
                    method: 'POST',
                    body: formData
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    throw new Error(errorData.detail || `Backend error: ${response.status}`);
                }

                const data = await response.json();

                if (data.image) {
                    // Backend returns base64 encoded image
                    imageUrl = `data:image/png;base64,${data.image}`;
                    console.log('✅ AI image generated via FastAPI backend (Stable Diffusion v1.5)');
                } else {
                    throw new Error('No image data in response');
                }

            } catch (backendError) {
                console.warn('⚠️ FastAPI backend unavailable, falling back to Pollinations.ai:', backendError.message);
                showToast('Backend not available, using Pollinations.ai fallback...', 'info');

                // Fallback to Pollinations.ai
                imageUrl = await generateWithPollinations(fabricText, colorText, borderText, palluText, weaveText, occasionText);
            }

        } else {
            // ============================
            // METHOD 2: Pollinations.ai (Free API, no key needed)
            // ============================
            imageUrl = await generateWithPollinations(fabricText, colorText, borderText, palluText, weaveText, occasionText);
        }

        // Display the generated image
        if (imageUrl) {
            const aiImage = document.getElementById('aiGeneratedImage');
            aiImage.src = imageUrl;

            aiImage.onload = () => {
                loadingEl.classList.remove('active');
                overlayEl.classList.add('active');
                showToast('🎨 AI saree preview generated successfully!', 'success');
            };

            aiImage.onerror = () => {
                throw new Error('Failed to load the generated image');
            };
        }

    } catch (error) {
        console.error('AI Generation Error:', error);
        loadingEl.classList.remove('active');
        showToast(`AI generation failed: ${error.message}. Try again!`, 'error');
    } finally {
        isGeneratingAi = false;
        generateBtn.disabled = false;
        generateBtn.innerHTML = '<i class="fas fa-wand-magic-sparkles"></i> Generate AI Preview';
    }
}

async function generateWithPollinations(fabricText, colorText, borderText, palluText, weaveText, occasionText) {
    // Build the richest possible prompt — all colour names, no hex codes
    const prompt = encodeURIComponent(
        `A beautiful professional Indian fashion model elegantly wearing a ${fabricText} saree, ` +
        `in ${colorText} color, draped perfectly in traditional style, ` +
        `featuring ${borderText}, ` +
        `with ${palluText}, ` +
        `${weaveText}` +
        `perfect for ${occasionText || 'wedding'}, ` +
        `full body shot, standing gracefully, ` +
        `high-end Indian fashion photography, studio lighting, bokeh background, ` +
        `vogue magazine style, ultra realistic, 8k quality, no text, no watermark`
    );

    const seed = Math.floor(Math.random() * 999999);
    const imageUrl = `${AI_CONFIG.fallbackUrl}${prompt}?width=512&height=768&seed=${seed}&nologo=true&model=flux`;

    // Return the URL directly — the img tag will load it without CORS issues
    return new Promise((resolve, reject) => {
        const testImg = new Image();
        testImg.onload = () => {
            console.log('✅ AI image generated via Pollinations.ai');
            resolve(imageUrl);
        };
        testImg.onerror = () => {
            // Even if preload fails, try returning the URL anyway
            console.warn('Preload check failed, attempting direct load...');
            resolve(imageUrl);
        };
        testImg.src = imageUrl;

        // Timeout after 90 seconds
        setTimeout(() => reject(new Error('Image generation timed out (90s)')), 90000);
    });
}

// ===== MOBILE NAV =====
function initMobileNav() {
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
        document.getElementById('mobileNavOverlay').classList.add('active');
        document.getElementById('mobileNavSidebar').classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    document.getElementById('mobileNavClose').addEventListener('click', closeMobileNav);
    document.getElementById('mobileNavOverlay').addEventListener('click', closeMobileNav);

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (link.dataset.filter) {
                currentFilter = link.dataset.filter;
            }
            closeMobileNav();
        });
    });
}

function closeMobileNav() {
    document.getElementById('mobileNavOverlay').classList.remove('active');
    document.getElementById('mobileNavSidebar').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== BACK TO TOP =====
function initBackToTop() {
    const btn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);

        // Sticky header shrink effect
        const header = document.getElementById('mainHeader');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let icon = 'fa-info-circle';
    if (type === 'success') icon = 'fa-check-circle';
    if (type === 'error') icon = 'fa-exclamation-circle';

    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== NEWSLETTER =====
document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Subscribed successfully! Welcome to the family.', 'success');
    e.target.reset();
});

// ===== CHECKOUT PAGE =====
function renderCheckoutPage() {
    if (cart.length === 0) {
        window.location.hash = '#shop';
        return;
    }

    const container = document.getElementById('checkoutSummaryItems');
    container.innerHTML = cart.map(item => `
        <div class="checkout-item-summary">
            <div class="item-img"><img src="${item.image}" alt=""></div>
            <div class="item-details">
                <h5>${item.name}</h5>
                <p>Qty: ${item.qty} × ₹${item.price.toLocaleString()}</p>
            </div>
            <div class="item-total">₹${(item.price * item.qty).toLocaleString()}</div>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const shipping = subtotal >= 2999 ? 0 : 199;
    const total = subtotal + shipping;

    document.getElementById('checkoutSubtotal').textContent = `₹${subtotal.toLocaleString()}`;
    document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'Free' : `₹${shipping}`;
    document.getElementById('checkoutTotal').textContent = `₹${total.toLocaleString()}`;

    // Prefill form if user logged in
    if (currentUser) {
        document.getElementById('shipName').value = currentUser.name || '';
    }
}

document.getElementById('checkoutForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!currentUser) {
        showToast('Please sign in to place your order', 'error');
        document.getElementById('accountBtn').click();
        return;
    }

    const shipping_address = `
        ${document.getElementById('shipName').value}, 
        ${document.getElementById('shipAddress').value}, 
        ${document.getElementById('shipCity').value}, 
        ${document.getElementById('shipState').value} - ${document.getElementById('shipZip').value}, 
        Ph: ${document.getElementById('shipPhone').value}
    `.trim();

    const orderItems = cart.map(item => ({
        product_id: item.custom ? null : item.id,
        name: item.name,
        price: item.price,
        qty: item.qty,
        is_custom: !!item.custom,
        custom_details: item.custom ? item.category : null
    }));

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const total_amount = subtotal + (subtotal >= 2999 ? 0 : 199);

    try {
        const response = await fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify({
                items: orderItems,
                total_amount: total_amount,
                shipping_address: shipping_address
            })
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.detail || 'Failed to place order');
        }

        const data = await response.json();
        showToast(`Order #${data.order_id} placed successfully! 🎉`, 'success');
        cart = [];
        saveCart();
        updateCartUI();
        window.location.hash = '#orders';
    } catch (error) {
        showToast(error.message, 'error');
    }
});

// ===== ORDERS PAGE =====
async function renderOrdersPage() {
    if (!currentUser) {
        document.getElementById('ordersList').innerHTML = '';
        document.getElementById('ordersEmpty').classList.remove('hidden');
        document.getElementById('ordersEmpty').querySelector('p').textContent = 'Please sign in to view your orders.';
        return;
    }

    try {
        const response = await fetch('/api/orders', {
            headers: { 'Authorization': `Bearer ${authToken}` }
        });

        if (!response.ok) throw new Error('Failed to fetch orders');
        const orders = await response.json();

        const list = document.getElementById('ordersList');
        if (orders.length === 0) {
            list.innerHTML = '';
            document.getElementById('ordersEmpty').classList.remove('hidden');
            return;
        }

        document.getElementById('ordersEmpty').classList.add('hidden');
        list.innerHTML = orders.map(o => `
            <div class="order-card">
                <div class="order-header">
                    <div class="order-id">Order #${o.id}</div>
                    <div class="order-date">${o.created_at}</div>
                    <div class="order-status status-${o.status.toLowerCase()}">${o.status}</div>
                </div>
                <div class="order-body">
                    ${o.items.map(item => `
                        <div class="order-item-row">
                            <span>${item.name} × ${item.qty}</span>
                            <span>₹${(item.price * item.qty).toLocaleString()}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="order-footer">
                    <span>Total Amount:</span>
                    <strong>₹${o.total.toLocaleString()}</strong>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Orders error:', error);
        showToast('Error loading orders', 'error');
    }
}
