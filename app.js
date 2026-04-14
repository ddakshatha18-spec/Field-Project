// Store Data
const products = [
    {
        id: 1, name: "Premium 6 Meters Saree", price: 4500, originalPrice: 5999,
        image: "images/saree_6m.png", category: "Saree",
        rating: 4.8, reviews: 342, inStock: true,
        features: ["Pure cotton & silk blend", "Traditional South Indian weaving", "6 Meters length with unstitched blouse", "Intricate Golden Zari Border"]
    },
    {
        id: 2, name: "Royal 9 Meters Silk Saree", price: 8500, originalPrice: 12500,
        image: "images/saree_9m.png", category: "Saree",
        rating: 4.9, reviews: 89, inStock: true,
        features: ["Premium Kanjeevaram pure silk", "Authentic 9 Meters continuous wrap", "Heavy Grand Pallu design", "Dry clean only"]
    },
    {
        id: 3, name: "Traditional Golden Border Lungi", price: 1200, originalPrice: 1500,
        image: "images/lungi.png", category: "Bottom",
        rating: 4.6, reviews: 412, inStock: true,
        features: ["100% Breathable Cotton", "Shimmering real gold-thread border", "Pre-washed for ultimate softness", "Standard free size"]
    },
    {
        id: 4, name: "Premium Cotton Towel", price: 600, originalPrice: 850,
        image: "images/towel.png", category: "Accessory",
        rating: 4.7, reviews: 231, inStock: true,
        features: ["High-absorption pure white cotton", "Elegant minimal golden stripes", "Quick-dry fabric", "Generous sizing"]
    },
    {
        id: 5, name: "Elegant White Pancha", price: 2100, originalPrice: 3000,
        image: "images/pancha.png", category: "Bottom",
        rating: 4.8, reviews: 156, inStock: true,
        features: ["Traditional Dhoti styling", "Thick rich golden border", "Wrinkle-resistant premium blend", "Ready to wear or wrap"]
    },
    {
        id: 6, name: "Royal Kanduva (Upper Cloth)", price: 1500, originalPrice: 2000,
        image: "images/kanduva.png", category: "Accessory",
        rating: 4.9, reviews: 305, inStock: true,
        features: ["Shoulder drape (Angavastram)", "Rich continuous golden weave", "Pairs perfectly with our Pancha", "Luxuriously soft"]
    }
];

let cart = [];

// Initialize Lucide Icons
lucide.createIcons();

// DOM Elements
const mainContent = document.getElementById('main-content');
const navLinks = document.querySelectorAll('.nav-link');
const cartBtn = document.getElementById('cart-toggle');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const cartOverlay = document.getElementById('cart-overlay');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalPrice = document.getElementById('cart-total-price');

// Pages
const pages = {
    home: () => `
        <section class="hero">
            <div class="hero-content">
                <h1>Pure White. Royal Gold.</h1>
                <p>Discover the elegance of authentic South Indian tradition, redefined for the modern connoisseur.</p>
                <button class="btn-primary" onclick="navigate('shop')">Explore Collection <i data-lucide="arrow-right"></i></button>
            </div>
        </section>
        <section class="featured-products">
            <h2 class="section-title">Trending Elegance</h2>
            <div class="product-grid" id="featured-grid">
                ${renderProductGrid(products.slice(0, 3))}
            </div>
        </section>
        <section class="featured-products">
            <h2 class="section-title">Essential Traditional Wear</h2>
            <div class="product-grid">
                ${renderProductGrid(products.slice(3, 6))}
            </div>
        </section>
    `,
    shop: () => `
        <h2 class="section-title" style="margin-top: 2rem;">Full Collection</h2>
        <div class="product-grid">
            ${renderProductGrid(products)}
        </div>
    `,
    customize: () => `
        <h2 class="section-title" style="margin-top: 2rem;">Saree Customization Studio</h2>
        <div class="customizer-container">
            <div class="customizer-visual-panel" style="position: relative;">
                <img id="live-saree-preview" src="${products[0].image}" alt="Live Preview">
                
                <button id="ai-regenerate-btn" onclick="simulateAIGeneration()" class="ai-gen-btn">
                    <i data-lucide="sparkles"></i> Generate AI Design
                </button>
                
                <div id="ai-loading-overlay" class="ai-loading-overlay">
                    <div class="spinner"></div>
                    <p style="color: var(--gold-dark); font-weight: 600; text-align: center;">Rendering True AI Model...<br><span style="font-size: 0.8rem; opacity: 0.7;">(Usually 5-8 seconds)</span></p>
                </div>
            </div>
            
            <div class="customizer-configuration-panel">
                <div class="customizer-sidebar">
                    <h3 style="margin-bottom: 2rem; color: var(--gold-dark); font-family: 'Playfair Display';">Build Your Dream Saree</h3>
                    <div class="step-indicator">
                        <div class="step active" onclick="setStep(1)" id="step-1">1. Fabric</div>
                        <div class="step" onclick="setStep(2)" id="step-2">2. Color</div>
                        <div class="step" onclick="setStep(3)" id="step-3">3. Border</div>
                        <div class="step" onclick="setStep(4)" id="step-4">4. Pallu</div>
                    </div>
                </div>
                <div class="customizer-content">
                    <div id="customize-step-content">
                        <!-- Dynamic Step Content -->
                    </div>
                    <div class="customizer-preview">
                        <div class="preview-details">
                            <h4>Total Estimation</h4>
                            <h3 id="customize-price">₹6,000</h3>
                        </div>
                        <button class="btn-primary" onclick="addCustomToCart()">Add Custom Saree to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    productDetail: (id) => {
        const product = products.find(p => p.id === id);
        if (!product) return `<h2 style="text-align:center; padding: 4rem;">Product not found</h2>`;

        let savings = product.originalPrice - product.price;
        let discountPercent = Math.round((savings / product.originalPrice) * 100);

        return `
        <div class="pdp-container">
            <div class="pdp-image-section">
                <img src="${product.image}" alt="${product.name}" class="pdp-main-image">
            </div>
            
            <div class="pdp-details-section">
                <nav class="breadcrumb">
                    <a href="#" onclick="navigate('home'); return false;">Home</a> &rsaquo; 
                    <a href="#" onclick="navigate('shop'); return false;">Shop</a> &rsaquo; 
                    <span>${product.category}</span>
                </nav>
                
                <h1 class="pdp-title">${product.name}</h1>
                <div class="pdp-rating">
                    <span class="stars">★★★★★</span> <span class="rating-text">${product.rating}</span>
                    <span class="review-count">(${product.reviews} ratings)</span>
                </div>
                
                <hr class="pdp-divider">
                
                <div class="pdp-price-block">
                    <div class="pdp-discount-tag">-${discountPercent}%</div>
                    <div class="pdp-price">
                        <span class="currency">₹</span>${product.price.toLocaleString()}
                    </div>
                </div>
                <div class="pdp-mrp">
                    M.R.P.: <span class="strikethrough">₹${product.originalPrice.toLocaleString()}</span>
                </div>
                <p class="pdp-taxes">Inclusive of all taxes</p>
                
                <hr class="pdp-divider">
                
                <div class="pdp-features">
                    <h3>About this item</h3>
                    <ul>
                        ${product.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="pdp-action-box">
                    <h3 class="${product.inStock ? 'in-stock' : 'out-of-stock'}">
                        ${product.inStock ? 'In Stock' : 'Currently Unavailable'}
                    </h3>
                    
                    <div class="quantity-selector">
                        <label>Quantity:</label>
                        <select id="pdp-qty">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    
                    <div class="pdp-buttons">
                        <button class="btn-primary pdp-add-cart" onclick="addToCartPDP(${product.id})">Add to Cart</button>
                        <button class="pdp-buy-now" onclick="buyNow(${product.id})">Buy Now</button>
                    </div>
                    
                    <div class="pdp-trust-badges">
                        <div class="trust-badge"><i data-lucide="truck"></i><span>Free Delivery</span></div>
                        <div class="trust-badge"><i data-lucide="shield-check"></i><span>Secure Transaction</span></div>
                        <div class="trust-badge"><i data-lucide="award"></i><span>Top Brand</span></div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
};

let currentCustomization = { fabric: 'cotton', color: 'white', border: 'temple', pallu: 'plain', price: 6000 };

function renderProductGrid(items) {
    return items.map(product => `
        <div class="product-card">
            <div class="product-img-wrap" onclick="navigate('productDetail', ${product.id})" style="cursor:pointer;" title="Click to view details">
                <img src="${product.image}" alt="${product.name}" class="product-img">
            </div>
            <div class="product-info">
                <h3 class="product-title" onclick="navigate('productDetail', ${product.id})" style="cursor:pointer;" title="Click to view details">${product.name}</h3>
                <p class="product-price">₹${product.price.toLocaleString()}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function navigate(page, param = null) {
    mainContent.innerHTML = pages[page](param);
    lucide.createIcons(); // Re-initialize icons for new DOM
    window.scrollTo(0, 0);

    // Update active nav
    navLinks.forEach(link => {
        if (link.dataset.page === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    if (page === 'customize') {
        renderCustomizationStep(1);
    }
}

// Customization Logic
function setStep(step) {
    document.querySelectorAll('.step').forEach((el, index) => {
        if (index + 1 === step) el.classList.add('active');
        else el.classList.remove('active');
    });
    renderCustomizationStep(step);
}

function renderCustomizationStep(step) {
    const container = document.getElementById('customize-step-content');
    if (step === 1) {
        container.innerHTML = `
            <h3>Select Base Fabric</h3>
            <p style="color: var(--text-muted); margin-bottom: 1rem;">All fabrics are pure white.</p>
            <div class="customizer-options">
                <div class="option-card ${currentCustomization.fabric === 'cotton' ? 'selected' : ''}" onclick="updateCustomization('fabric', 'cotton', 6000)">
                    <i data-lucide="leaf" style="color: var(--gold-primary); width: 32px; height: 32px;"></i>
                    <h4>Pure Cotton</h4>
                    <p>Breathable, traditional weave.</p>
                </div>
                <div class="option-card ${currentCustomization.fabric === 'silk' ? 'selected' : ''}" onclick="updateCustomization('fabric', 'silk', 12000)">
                    <i data-lucide="droplets" style="color: var(--gold-primary); width: 32px; height: 32px;"></i>
                    <h4>Kanjeevaram Silk</h4>
                    <p>Luxurious shine, premium feel.</p>
                </div>
            </div>
        `;
    } else if (step === 2) {
        container.innerHTML = `
            <h3>Select Base Saree Color</h3>
            <div class="customizer-options">
                <div class="option-card ${currentCustomization.color === 'white' ? 'selected' : ''}" onclick="updateCustomization('color', 'white', 0)">
                    <div style="height: 40px; background: #FFF; border: 1px solid #EAEAEA; border-radius: 4px; margin-bottom: 0.5rem;"></div>
                    <h4>Pristine White</h4>
                </div>
                <div class="option-card ${currentCustomization.color === 'red' ? 'selected' : ''}" onclick="updateCustomization('color', 'red', 0)">
                    <div style="height: 40px; background: #B11226; border-radius: 4px; margin-bottom: 0.5rem;"></div>
                    <h4>Majestic Red</h4>
                </div>
                <div class="option-card ${currentCustomization.color === 'green' ? 'selected' : ''}" onclick="updateCustomization('color', 'green', 0)">
                    <div style="height: 40px; background: #0E5C3B; border-radius: 4px; margin-bottom: 0.5rem;"></div>
                    <h4>Emerald Green</h4>
                </div>
                <div class="option-card ${currentCustomization.color === 'blue' ? 'selected' : ''}" onclick="updateCustomization('color', 'blue', 0)">
                    <div style="height: 40px; background: #082E5A; border-radius: 4px; margin-bottom: 0.5rem;"></div>
                    <h4>Royal Blue</h4>
                </div>
            </div>
        `;
    } else if (step === 3) {
        container.innerHTML = `
            <h3>Select Gold Border Style</h3>
            <div class="customizer-options">
                <div class="option-card ${currentCustomization.border === 'temple' ? 'selected' : ''}" onclick="updateCustomization('border', 'temple', 0)">
                    <div style="height: 40px; border-bottom: 4px solid var(--gold-primary); border-top: 2px solid var(--gold-light);"></div>
                    <h4>Temple Design</h4>
                </div>
                <div class="option-card ${currentCustomization.border === 'plain' ? 'selected' : ''}" onclick="updateCustomization('border', 'plain', -500)">
                    <div style="height: 40px; border-bottom: 6px solid var(--gold-primary);"></div>
                    <h4>Thick Plain Gold</h4>
                </div>
                <div class="option-card ${currentCustomization.border === 'floral' ? 'selected' : ''}" onclick="updateCustomization('border', 'floral', 1000)">
                    <div style="height: 40px; border-bottom: 4px dashed var(--gold-primary);"></div>
                    <h4>Floral Zari</h4>
                </div>
            </div>
        `;
    } else if (step === 4) {
        container.innerHTML = `
            <h3>Select Pallu Intricacy</h3>
            <div class="customizer-options">
                <div class="option-card ${currentCustomization.pallu === 'plain' ? 'selected' : ''}" onclick="updateCustomization('pallu', 'plain', 0)">
                    <h4>Standard Gold Lines</h4>
                </div>
                <div class="option-card ${currentCustomization.pallu === 'heavy' ? 'selected' : ''}" onclick="updateCustomization('pallu', 'heavy', 2500)">
                    <h4>Heavy Zari Work</h4>
                    <p>Perfect for weddings.</p>
                </div>
            </div>
        `;
    }
    lucide.createIcons();
}

function updateCustomization(key, value, priceImpact) {
    currentCustomization[key] = value;

    // Recalculate price
    let basePrice = currentCustomization.fabric === 'silk' ? 12000 : 6000;
    let borderPrice = currentCustomization.border === 'floral' ? 1000 : (currentCustomization.border === 'plain' ? -500 : 0);
    let palluPrice = currentCustomization.pallu === 'heavy' ? 2500 : 0;

    currentCustomization.price = basePrice + borderPrice + palluPrice;
    document.getElementById('customize-price').innerText = `₹${currentCustomization.price.toLocaleString()}`;

    // Update Dynamic Image Visualizer
    const previewEl = document.getElementById('live-saree-preview');
    if (previewEl) {
        // Add a micro-animation class purely for cross-fades
        previewEl.style.opacity = '0.5';
        setTimeout(() => {
            // Swap base material asset
            previewEl.src = currentCustomization.fabric === 'cotton' ? products[0].image : products[1].image;

            // Map the border / pallu designs via intelligent CSS filtration tracking
            let filterStr = "";
            if (currentCustomization.border === 'floral') {
                filterStr += "saturate(1.8) hue-rotate(-5deg) ";
            } else if (currentCustomization.border === 'plain') {
                filterStr += "contrast(1.4) brightness(0.9) grayscale(20%) ";
            } else {
                filterStr += "contrast(1.05) "; // Temple standard
            }

            if (currentCustomization.pallu === 'heavy') {
                filterStr += "brightness(0.92) contrast(1.1) ";
            }

            previewEl.style.filter = filterStr;
            previewEl.style.opacity = '1';
        }, 150); // very short crossfade timing
    }

    // re-render to update selected state
    const currentActiveStep = document.querySelector('.step.active').id.split('-')[1];
    renderCustomizationStep(parseInt(currentActiveStep));
}

window.simulateAIGeneration = function () {
    const overlay = document.getElementById('ai-loading-overlay');
    const preview = document.getElementById('live-saree-preview');

    if (!overlay || !preview) return;

    overlay.classList.add('active');

    // Build a true, highly detailed Generative AI prompt using their specific Customizations
    const fabricDesc = currentCustomization.fabric === "cotton" ? "matte breathable cotton" : "glossy bright luxurious kanjeevaram silk";
    const colorDesc = currentCustomization.color.charAt(0).toUpperCase() + currentCustomization.color.slice(1);
    const borderDesc = currentCustomization.border === "floral" ? "intricate gold floral zari" : (currentCustomization.border === "temple" ? "vivid gold temple design" : "thick solid plain shiny gold");
    const palluDesc = currentCustomization.pallu === "heavy" ? "grand heavy gold zari" : "minimalist elegant gold";

    // Explicitly command the AI on the core color and fabric elements
    const aiPrompt = `Highly professional 8k fashion photography of an exquisite South Indian saree draped elegantly on a high-end retail mannequin. Placed on a pure seamless white studio background with dramatic lighting. The saree features a pure ${colorDesc} colored ${fabricDesc} body, showcasing a stunning ${borderDesc} border and an intricate ${palluDesc} pallu. Photorealistic, Vogue editorial aesthetic, ultra-detailed ${currentCustomization.color} and gold luxury masterpiece.`;

    const randomSeed = Math.floor(Math.random() * 999999);
    // Connect explicitly to the public free AI visual generation endpoint
    const liveAiUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(aiPrompt)}?width=800&height=1200&nologo=true&seed=${randomSeed}`;

    // When the true AI image finishes transmitting and rendering over the web, drop the spinner
    preview.onload = () => {
        overlay.classList.remove('active');
        preview.style.filter = "none";
        preview.style.transform = "none";
        preview.classList.remove('ai-flip');
    };

    // Trigger real AI generation!
    preview.src = liveAiUrl;

    // Safe fallback timeout just in case of exceptionally slow remote generations (15s ceiling)
    setTimeout(() => { if (overlay.classList.contains('active')) overlay.classList.remove('active'); }, 15000);
}

function addCustomToCart() {
    // Make sure we practically grab the EXACT AI Model image they generated
    const currentPreviewUrl = document.getElementById('live-saree-preview').src;
    const colorCap = currentCustomization.color.charAt(0).toUpperCase() + currentCustomization.color.slice(1);

    const customProduct = {
        id: 'custom-' + Date.now(),
        name: `Custom ${colorCap} & Gold Saree (${currentCustomization.fabric}, ${currentCustomization.border})`,
        price: currentCustomization.price,
        image: currentPreviewUrl, // Pass their specific AI creation permanently into checkout
        quantity: 1
    };
    cart.push(customProduct);
    updateCartUI();
    toggleCart();
}

window.addToCartPDP = function (id) {
    const qty = parseInt(document.getElementById('pdp-qty').value) || 1;
    const product = products.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += qty;
    } else {
        cart.push({ ...product, quantity: qty });
    }
    updateCartUI();
    toggleCart();
};

window.buyNow = function (id) {
    window.addToCartPDP(id);
};

// Cart Logic
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    toggleCart(); // Open cart to show user
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id != id); // loose equality to support string ids passed from DOM
    updateCartUI();
}

function updateCartUI() {
    // Update Badge
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = count;

    // Update Sidebar content
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg" style="text-align:center; margin-top: 2rem; color: #666;">Your cart is empty.</p>';
        cartTotalPrice.innerText = '₹0';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <p>Qty: ${item.quantity}</p>
                <p class="cart-item-price">₹${(item.price * item.quantity).toLocaleString()}</p>
                <button class="remove-item" onclick="removeFromCart('${item.id}')">Remove</button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalPrice.innerText = `₹${total.toLocaleString()}`;
}

// Cart UI toggles
function toggleCart() {
    cartSidebar.classList.toggle('open');
    if (cartSidebar.classList.contains('open')) {
        cartOverlay.classList.add('show');
    } else {
        cartOverlay.classList.remove('show');
    }
}

cartBtn.addEventListener('click', toggleCart);
closeCart.addEventListener('click', toggleCart);
cartOverlay.addEventListener('click', toggleCart);

// Init Nav Listeners
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigate(e.target.closest('.nav-link').dataset.page);
    });
});

// Load initial page
navigate('home');
