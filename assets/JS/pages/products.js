// PAGE LOADER
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.page-loader').classList.add('hidden');
    }, 1500);
});


// FILTER CHECKBOX (generic toggle — kept for non-filter uses)
var checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach(function (checkbox) {
    var icon = checkbox.querySelector("i");
    checkbox.addEventListener("click", function () {
        icon.classList.toggle("active");
    });
});


// PRODUCTS DATA
window.__PRODUCTS_PAGE__ = true;

window.__PRODUCTS_DATA__ = [
    { id: 1, name: "Nintendo Switch Lite", price: 543, img: "../assets/images/Products/1-1.png", desc: "Compatibility; Glass Screen Protector Compatible with Nintendo Switch. 9H Hardness; Tempered glass durability rated at 9H hardness to protect from everyday scratches." },
    { id: 2, name: "Rubber Keycaps", price: 580, img: "../assets/images/Products/2-1.png", desc: "Our Rubber Keycaps are designed to fit any gaming keyboard with any Cherry MX Switches or any new switches that have a + under your keycaps." },
    { id: 3, name: "Alien ware Monitor T 46", price: 850, img: "../assets/images/Products/3-1.png", desc: "Exceptional Full HD IPS 21.5 Inch Ultra Thin Display: Enjoy immaculate image quality with 1920x1080 resolution and 178 degree wide viewing angles. Zero Frame." },
    { id: 4, name: "Colossus Ergonomic", price: 356, img: "../assets/images/Products/4-1.png", desc: "ERGONOMICALLY DESIGNED FOR HARDCORE GAMING: From its unique contours and angled seat edges, to its fully adjustable recline, tilt, and height, the Dr Luxur." },
    { id: 5, name: "Cloud Alpha Gaming", price: 530, img: "../assets/images/Products/5-1.png", desc: "HyperX Dual Chamber Drivers for more distinction and less distortion. Signature Award-Winning HyperX comfort. Durable aluminum frame with an expanded design." },
    { id: 6, name: "Raptor Gaming Z95", price: 896, img: "../assets/images/Products/6-1.webp", desc: "Multiple connectivity options including HDMI, USB ports & RGB fans let you connect a variety of peripherals easily. Wi-Fi Ready – Connect to the internet wirelessly." },
    { id: 7, name: "Gaming Chair for Gamers", price: 560, img: "../assets/images/Products/7-1.png", desc: "Have back issues or don't want to develop them? This adjustable office chair includes Cushion Foam Padded support and a recline feature." },
    { id: 8, name: "Electrobot Xtreme Gaming", price: 468, img: "../assets/images/Products/8-1.png", desc: "Multiple connectivity options including HDMI, USB ports & RGB fans let you connect a variety of peripherals easily. Wi-Fi Ready – Connect to the internet wirelessly." },
    { id: 9, name: "VR Headset", price: 860, img: "../assets/images/Products/9-1.png", desc: "40MM HD optical resin lens with Focal and IPD adjustments with FOV up to 110 provides best VR Experience. Best-in-class headphones With 3.5mm Jack." },
    { id: 10, name: "Refurbished Xbox Series X", price: 430, img: "../assets/images/Products/10-1.webp", desc: "Compatibility; Glass Screen Protector Compatible with Nintendo Switch. 9H Hardness; Tempered glass durability rated at 9H hardness to protect from everyday scratches." },
    { id: 11, name: "Radeon™ RX 750 XT", price: 940, img: "../assets/images/Products/11-1.webp", desc: "Microsoft Windows 10 and Microsoft DirectX 12 supported Video Memory: 8GB DDR5. The XFX Radeon RX 580 Series graphics card coupled with AMD LiquidVR." },
    { id: 12, name: "Radeon™ RX 750 XT (II)", price: 560, img: "../assets/images/Products/12-1.webp", desc: "Microsoft Windows 10 and Microsoft DirectX 12 supported Video Memory: 8GB DDR5. The XFX Radeon RX 580 Series graphics card coupled with AMD LiquidVR." },
    { id: 13, name: "Radeon RX 680 GTS", price: 356, img: "../assets/images/Products/13-1.webp", desc: "Microsoft Windows 10 and Microsoft DirectX 12 supported Video Memory: 8GB DDR5. The XFX Radeon RX 580 Series graphics card coupled with AMD LiquidVR." },
    { id: 14, name: "Radeon RX 590 GTS", price: 890, img: "../assets/images/Products/14-1.webp", desc: "Microsoft Windows 10 and Microsoft DirectX 12 supported Video Memory: 8GB DDR5. The XFX Radeon RX 580 Series graphics card coupled with AMD LiquidVR." },
    { id: 15, name: "Radeon RX 590 GTS (II)", price: 890, img: "../assets/images/Products/15-1.webp", desc: "Microsoft Windows 10 and Microsoft DirectX 12 supported Video Memory: 8GB DDR5. The XFX Radeon RX 580 Series graphics card coupled with AMD LiquidVR." },
    { id: 16, name: "Multi-Functional Ergonomic", price: 560, img: "../assets/images/Products/16-1.webp", desc: "ERGONOMIC DESIGN: Feel less fatigued over long periods with the lumbar curve that gently supports your lower back and encourages sitting in a neutral position." },
    { id: 17, name: "Kepler Brooks Gaming Chair", price: 800, img: "../assets/images/Products/17-1.webp", desc: "Premium Material: PU Leather Upholstery made with High density foam and added seat cushion, more comfort and long-time use; High Tensile steel frame." },
    { id: 18, name: "KD DMTR Gaming Desktop", price: 865, img: "../assets/images/Products/18-1.webp", desc: "Multiple connectivity options including HDMI, USB ports & RGB fans let you connect a variety of peripherals easily. Wi-Fi Ready – Connect to the internet wirelessly." },
    { id: 19, name: "Hyper Clutch Gaming", price: 630, img: "../assets/images/Products/19-1.webp", desc: "Bring gaming worlds to life. Feel your in-game actions and environment simulated through haptic feedback. Experience varying force and tension at your fingertips." },
    { id: 20, name: "HTC Vive Tracker 3.0 PC", price: 560, img: "../assets/images/Products/20-1.webp", desc: "Body tracking – track the physical presence of your entire body within the virtual environment. Capture full-body motions with as few as 3 trackers." },
    { id: 21, name: "G-Series Curved VA Monitor", price: 453, img: "../assets/images/Products/21-1.webp", desc: "Lenovo Smart Artery Software: Self-learning software auto-adjusts display. Crosshair feature for FPS games. View Frame Rate and Timer. Create customized gaming modes." },
    { id: 22, name: "DualSense Wireless", price: 600, img: "../assets/images/Products/22-1.webp", desc: "Bring gaming worlds to life. Feel your in-game actions and environment simulated through haptic feedback. Experience varying force and tension at your fingertips." },
    { id: 23, name: "Alienware Monitor D 152", price: 752, img: "../assets/images/Products/23-1.webp", desc: "Exceptional Full HD IPS 21.5 Inch Ultra Thin Display: Enjoy immaculate image quality with 1920x1080 resolution and 178 degree wide viewing angles. Zero Frame." },
    { id: 24, name: "Alienware Gaming Monitor", price: 560, img: "../assets/images/Products/24-1.webp", desc: "Exceptional Full HD IPS 21.5 Inch Ultra Thin Display: Enjoy immaculate image quality with 1920x1080 resolution and 178 degree wide viewing angles. Zero Frame." },
];

const products = window.__PRODUCTS_DATA__;


// AUTH CHECK
function isLoggedIn() {
    return !!localStorage.getItem('loggedInUser');
}

function requireLogin() {
    // حفظ الصفحة الحالية عشان نرجعلها بعد الـ sign in
    localStorage.setItem('redirectAfterLogin', window.location.href);
    showToast('⚠ Please sign in first to add items to your cart!');
    setTimeout(() => {
        window.location.href = '../Pages/Signin.html';
    }, 1500);
}


// CART STATE
let cartItems = JSON.parse(localStorage.getItem('gamingCart')) || [];

function saveCart() {
    localStorage.setItem('gamingCart', JSON.stringify(cartItems));
}


// SIDE CART — RENDER
function renderSideCart() {
    const fullDiv = document.querySelector('.sideCart .full');
    const emptyDiv = document.querySelector('.sideCart .content-empty');
    const countSpan = document.getElementById('count');
    const priceSpan = document.getElementById('price');
    const navCartCircle = document.querySelector(' #count-items')
    if (!fullDiv) return;

    const totalQty = cartItems.reduce((s, i) => s + i.qty, 0);
    if (navCartCircle) navCartCircle.textContent = totalQty;

    if (cartItems.length === 0) {
        emptyDiv.style.display = 'flex';
        fullDiv.innerHTML = '';
        if (countSpan) countSpan.textContent = ' 0';
        if (priceSpan) priceSpan.textContent = ' $0.00';
        return;
    }

    emptyDiv.style.display = 'none';

    fullDiv.innerHTML = cartItems.map(item => `
        <div class="item" data-id="${item.id}">
            <div class="image">
                <img src="${item.img}" alt="${item.name}">
            </div>
            <div class="info">
                <h2>${item.name}</h2>
                <div class="quantity">
                    <button class="minus" data-id="${item.id}">-</button>
                    <input type="number" value="${item.qty}" min="1" max="10" readonly>
                    <button class="plus" data-id="${item.id}">+</button>
                </div>
                <p style="color:#007aff;font-weight:700;margin-top:8px;">$${(item.price * item.qty).toFixed(2)}</p>
            </div>
            <div class="remove" data-id="${item.id}">
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
    `).join('');

    const totalItems = cartItems.reduce((s, i) => s + i.qty, 0);
    const totalPrice = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
    if (countSpan) countSpan.textContent = ' ' + totalItems;
    if (priceSpan) priceSpan.textContent = ' $' + totalPrice.toFixed(2);

    fullDiv.querySelectorAll('.plus').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const item = cartItems.find(i => i.id === id);
            if (item && item.qty < 10) { item.qty++; saveCart(); renderSideCart(); }
        });
    });
    fullDiv.querySelectorAll('.minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const item = cartItems.find(i => i.id === id);
            if (item && item.qty > 1) { item.qty--; saveCart(); renderSideCart(); }
        });
    });
    fullDiv.querySelectorAll('.remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            cartItems = cartItems.filter(i => i.id !== id);
            saveCart(); renderSideCart();
            showToast('Item removed from cart');
        });
    });
}


// check login before add to cart
function addToCart(productId, qty = 1) {

    if (!isLoggedIn()) {
        requireLogin();
        return;
    }

    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cartItems.find(i => i.id === productId);
    if (existing) {
        existing.qty = Math.min(existing.qty + qty, 10);
    } else {
        cartItems.push({ ...product, qty });
    }

    saveCart();
    renderSideCart();
    openSideCart();
    showToast(`"${product.name}" added to cart!`);
}


// SIDE CART — OPEN / CLOSE
const sideCartEl = document.querySelector('.sideCart');
const cartEl = document.querySelector('.sideCart .cart');
const cartIcon = document.querySelector('.navbar .container .icons .fa-cart-arrow-down');
const closeCartEl = document.querySelector('.sideCart .content .cart .nav .close');

function openSideCart() {
    if (!sideCartEl) return;
    sideCartEl.style.opacity = '1';
    sideCartEl.style.visibility = 'visible';
    cartEl.style.right = '0%';
    document.body.style.overflow = 'hidden';
}

function closeSideCart() {
    if (!sideCartEl) return;
    cartEl.style.right = '-50%';
    sideCartEl.style.opacity = '0';
    sideCartEl.style.visibility = 'hidden';
    document.body.style.overflow = 'auto';
}

if (cartIcon) cartIcon.addEventListener('click', openSideCart);
if (closeCartEl) closeCartEl.addEventListener('click', closeSideCart);

if (sideCartEl) {
    sideCartEl.addEventListener('click', (e) => {
        if (e.target === sideCartEl) closeSideCart();
    });
}


// PRODUCT VIEW MODAL
const productViewEl = document.querySelector('.product-veiw');
const pvImg = document.querySelector('.product-veiw .img img');
const pvName = document.querySelector('.product-veiw .info h2');
const pvDesc = document.querySelector('.product-veiw .info p');
const pvPrice = document.querySelector('.product-veiw .info h4');
const pvAddBtn = document.querySelector('.product-veiw #ADD');
const pvQtyInput = document.querySelector('.product-veiw .quantity input');
const pvPlus = document.querySelector('.product-veiw .plus');
const pvMinus = document.querySelector('.product-veiw .minus');
const pvClose = document.querySelector('.product-veiw .close');

let currentViewProduct = null;

function openProductView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || !productViewEl) return;

    currentViewProduct = product;
    pvImg.src = product.img;
    pvImg.alt = product.name;
    pvName.textContent = product.name;
    pvDesc.textContent = product.desc;
    pvPrice.innerHTML = `Price: <span style="color:#007aff">$${product.price.toFixed(2)}</span>`;
    pvQtyInput.value = 1;

    productViewEl.style.opacity = '1';
    productViewEl.style.visibility = 'visible';
    productViewEl.querySelector('.content').style.transform = 'translateY(0%) scale(1)';
    document.body.style.overflow = 'hidden';
}

function closeProductView() {
    if (!productViewEl) return;
    productViewEl.querySelector('.content').style.transform = 'translateY(-50%) scale(0)';
    setTimeout(() => {
        productViewEl.style.opacity = '0';
        productViewEl.style.visibility = 'hidden';
        document.body.style.overflow = 'auto';
    }, 300);
}

if (pvClose) pvClose.addEventListener('click', closeProductView);
if (productViewEl) {
    productViewEl.addEventListener('click', (e) => {
        if (e.target === productViewEl) closeProductView();
    });
}

if (pvPlus) {
    pvPlus.addEventListener('click', (e) => {
        e.preventDefault();
        if (parseInt(pvQtyInput.value) < 10) pvQtyInput.value = parseInt(pvQtyInput.value) + 1;
    });
}
if (pvMinus) {
    pvMinus.addEventListener('click', (e) => {
        e.preventDefault();
        if (parseInt(pvQtyInput.value) > 1) pvQtyInput.value = parseInt(pvQtyInput.value) - 1;
    });
}

if (pvAddBtn) {
    pvAddBtn.addEventListener('click', () => {
        if (!currentViewProduct) return;
        addToCart(currentViewProduct.id, parseInt(pvQtyInput.value));
        closeProductView();
    });
}


// WIRE UP PRODUCT CARDS
document.querySelectorAll('.card').forEach((card, index) => {
    const productId = index + 1;

    const addBtn = card.querySelector('button#ADD');
    if (addBtn) {
        addBtn.addEventListener('click', () => addToCart(productId));
    }

    const eyeIcon = card.querySelector('.fa-eye');
    if (eyeIcon) {
        eyeIcon.style.cursor = 'pointer';
        eyeIcon.addEventListener('click', () => openProductView(productId));
    }

    const heartIcon = card.querySelector('.fa-heart');
    if (heartIcon) {
        heartIcon.style.cursor = 'pointer';
        heartIcon.addEventListener('click', () => {
            heartIcon.classList.toggle('fa-regular');
            heartIcon.classList.toggle('fa-solid');
            heartIcon.style.color = heartIcon.classList.contains('fa-solid') ? '#ff4757' : '';
        });
    }
});


// TOAST NOTIFICATION
function showToast(message) {
    let toast = document.getElementById('cartToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'cartToast';
        toast.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%) translateY(80px);
            background: linear-gradient(93.25deg, #0098ff 4.45%, #7c34c8 93.88%);
            color: white;
            padding: 14px 28px;
            border-radius: 0 20px 0 20px;
            font-weight: 600;
            font-size: 14px;
            z-index: 99999;
            transition: transform 0.4s cubic-bezier(.34,1.56,.64,1), opacity 0.4s ease;
            opacity: 0;
            white-space: nowrap;
            box-shadow: 0 8px 32px rgba(0,152,255,0.4);
        `;
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    requestAnimationFrame(() => {
        toast.style.transform = 'translateX(-50%) translateY(0)';
        toast.style.opacity = '1';
    });

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(80px)';
        toast.style.opacity = '0';
    }, 2500);
}


// initial cart render
renderSideCart();


// filter ending

const productMeta = [
    { id: 1, inStock: true, type: "Console", brand: "XFX", colors: ["black"], sizes: [] },
    { id: 2, inStock: true, type: "Keycaps", brand: "XFX", colors: ["black", "white"], sizes: ["Small", "Large"] },
    { id: 3, inStock: true, type: "Monitors", brand: "Acer", colors: ["black"], sizes: ["21.5 Inches"] },
    { id: 4, inStock: true, type: "Chair", brand: "Kepler Brooks", colors: ["black", "blue"], sizes: ["50D x 65W"] },
    { id: 5, inStock: true, type: "Headset", brand: "HyperX", colors: ["black", "red"], sizes: [] },
    { id: 6, inStock: true, type: "Game PCs", brand: "XFX", colors: ["black"], sizes: ["20 x 12.5 x 13"] },
    { id: 7, inStock: true, type: "Chairs", brand: "Kepler Brooks", colors: ["black", "blue"], sizes: ["52D x 66W"] },
    { id: 8, inStock: false, type: "Game PCs", brand: "Electrobot", colors: ["black"], sizes: ["18 x 11.5 x 11"] },
    { id: 9, inStock: true, type: "Console", brand: "KandE", colors: ["black", "white"], sizes: [] },
    { id: 10, inStock: false, type: "Console", brand: "XFX", colors: ["black", "white"], sizes: ["256 GB"] },
    { id: 11, inStock: true, type: "Cards", brand: "XFX", colors: ["black"], sizes: ["8 GB", "RX 750"] },
    { id: 12, inStock: true, type: "Cards", brand: "XFX", colors: ["black"], sizes: ["8 GB"] },
    { id: 13, inStock: false, type: "Cards", brand: "XFX", colors: ["black"], sizes: ["3 GB"] },
    { id: 14, inStock: true, type: "Cards", brand: "XFX", colors: ["black"], sizes: ["364 GB"] },
    { id: 15, inStock: false, type: "Cards", brand: "XFX", colors: ["black"], sizes: ["364 GB"] },
    { id: 16, inStock: true, type: "Chair", brand: "Kepler Brooks", colors: ["black", "gray"], sizes: ["52D x 66W"] },
    { id: 17, inStock: true, type: "Chair", brand: "Kepler Brooks", colors: ["black", "blue"], sizes: ["50D x 66W"] },
    { id: 18, inStock: true, type: "Game PCs", brand: "Electrobot", colors: ["black"], sizes: ["256 GB", "128 GB"] },
    { id: 19, inStock: false, type: "Console", brand: "Sony PS5", colors: ["white"], sizes: [] },
    { id: 20, inStock: true, type: "Remote", brand: "Vulture", colors: ["black", "gray"], sizes: [] },
    { id: 21, inStock: true, type: "Monitors", brand: "Lenovo", colors: ["black"], sizes: ["25.5 Inches"] },
    { id: 22, inStock: false, type: "Remote", brand: "Sony PS5", colors: ["white"], sizes: [] },
    { id: 23, inStock: true, type: "Monitors", brand: "Samsung", colors: ["black"], sizes: ["28 Inches"] },
    { id: 24, inStock: true, type: "Monitors", brand: "LG", colors: ["black"], sizes: ["32 Inches"] },
];

const colorOrder = ["black", "blue", "green", "gray", "red", "white"];

const activeFilters = {
    availability: [],
    minPrice: 0,
    maxPrice: 940,
    types: [],
    brands: [],
    colors: [],
    sizes: [],
};

function applyFilters() {
    const cards = document.querySelectorAll('.productCards .card');
    let visible = 0;

    cards.forEach((card, i) => {
        const id = i + 1;
        const meta = productMeta.find(m => m.id === id);
        const product = products.find(p => p.id === id);
        if (!meta || !product) { card.style.display = ''; return; }

        if (activeFilters.availability.length) {
            const wantIn = activeFilters.availability.includes('In stock');
            const wantOut = activeFilters.availability.includes('Out of stock');
            if (wantIn && !wantOut && !meta.inStock) { card.style.display = 'none'; return; }
            if (!wantIn && wantOut && meta.inStock) { card.style.display = 'none'; return; }
        }

        if (product.price < activeFilters.minPrice || product.price > activeFilters.maxPrice) {
            card.style.display = 'none'; return;
        }

        if (activeFilters.types.length && !activeFilters.types.includes(meta.type)) {
            card.style.display = 'none'; return;
        }

        if (activeFilters.brands.length && !activeFilters.brands.includes(meta.brand)) {
            card.style.display = 'none'; return;
        }

        if (activeFilters.colors.length) {
            if (!activeFilters.colors.some(c => meta.colors.includes(c))) {
                card.style.display = 'none'; return;
            }
        }

        if (activeFilters.sizes.length) {
            if (!activeFilters.sizes.some(s => meta.sizes.includes(s))) {
                card.style.display = 'none'; return;
            }
        }

        card.style.display = '';
        visible++;
    });

    const counter = document.querySelector('.products .header p span');
    if (counter) counter.textContent = visible;
}

function getCheckedLabels(section) {
    const results = [];
    section.querySelectorAll('li').forEach(li => {
        const icon = li.querySelector('.checkbox i');
        if (icon && icon.classList.contains('active')) {
            const span = li.querySelector('label span:first-child');
            if (span) results.push(span.textContent.trim());
        }
    });
    return results;
}

function wireChecklistSection(sectionSelector, filterKey) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    section.querySelectorAll('li').forEach(li => {
        const checkbox = li.querySelector('.checkbox');
        if (!checkbox) return;
        checkbox.addEventListener('click', () => {
            setTimeout(() => {
                activeFilters[filterKey] = getCheckedLabels(section);
                const selectedSpan = section.querySelector('.detail-head span');
                if (selectedSpan) {
                    const count = activeFilters[filterKey].length;
                    selectedSpan.textContent = count ? `${count} selected` : '0 selected';
                }
                applyFilters();
            }, 0);
        });
    });

    const resetLink = section.querySelector('.reset a');
    if (resetLink) {
        resetLink.addEventListener('click', (e) => {
            e.preventDefault();
            section.querySelectorAll('.checkbox i').forEach(i => i.classList.remove('active'));
            activeFilters[filterKey] = [];
            const selectedSpan = section.querySelector('.detail-head span');
            if (selectedSpan) selectedSpan.textContent = '0 selected';
            applyFilters();
        });
    }
}

wireChecklistSection('.availabilityFilter', 'availability');
wireChecklistSection('.typeFilter', 'types');
wireChecklistSection('.brandFilter', 'brands');
wireChecklistSection('.sizeFilter', 'sizes');

(function wirePriceFilter() {
    const section = document.querySelector('.priceFilter');
    if (!section) return;
    const inputs = section.querySelectorAll('input[type="number"]');
    const minInput = inputs[0];
    const maxInput = inputs[1];

    function onPriceChange() {
        const min = parseFloat(minInput?.value) || 0;
        const max = parseFloat(maxInput?.value) || 940;
        activeFilters.minPrice = Math.min(min, max);
        activeFilters.maxPrice = Math.max(min, max);
        applyFilters();
    }

    if (minInput) minInput.addEventListener('input', onPriceChange);
    if (maxInput) maxInput.addEventListener('input', onPriceChange);

    const resetLink = section.querySelector('.reset a');
    if (resetLink) {
        resetLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (minInput) minInput.value = '';
            if (maxInput) maxInput.value = '';
            activeFilters.minPrice = 0;
            activeFilters.maxPrice = 940;
            applyFilters();
        });
    }
})();

(function wireColorFilter() {
    const section = document.querySelector('.colorFilter');
    if (!section) return;
    const colorItems = section.querySelectorAll('.colorlist li');

    colorItems.forEach((li, idx) => {
        const colorName = colorOrder[idx];
        if (!colorName) return;

        li.style.cursor = 'pointer';
        li.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';

        li.addEventListener('click', () => {
            const isActive = li.dataset.active === 'true';
            if (isActive) {
                li.dataset.active = 'false';
                li.style.transform = '';
                li.style.boxShadow = '';
                activeFilters.colors = activeFilters.colors.filter(c => c !== colorName);
            } else {
                li.dataset.active = 'true';
                li.style.transform = 'scale(1.25)';
                li.style.boxShadow = '0 0 0 2px #007aff';
                activeFilters.colors.push(colorName);
            }

            const selectedSpan = section.querySelector('.detail-head span');
            if (selectedSpan) {
                const count = activeFilters.colors.length;
                selectedSpan.textContent = count ? `${count} selected` : '0 selected';
            }
            applyFilters();
        });
    });

    const resetLink = section.querySelector('.reset a');
    if (resetLink) {
        resetLink.addEventListener('click', (e) => {
            e.preventDefault();
            colorItems.forEach(li => {
                li.dataset.active = 'false';
                li.style.transform = '';
                li.style.boxShadow = '';
            });
            activeFilters.colors = [];
            const selectedSpan = section.querySelector('.detail-head span');
            if (selectedSpan) selectedSpan.textContent = '0 selected';
            applyFilters();
        });
    }
})();

document.querySelectorAll('.filters .border').forEach(panel => {
    const toggle = panel.querySelector('.filter-type');
    const details = panel.querySelector('.details');
    const plusIcon = panel.querySelector('.plus i');
    if (!toggle || !details) return;

    details.style.display = 'block';
    toggle.style.cursor = 'pointer';

    toggle.addEventListener('click', () => {
        const isOpen = details.style.display !== 'none';
        details.style.display = isOpen ? 'none' : 'block';
        if (plusIcon) {
            plusIcon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(45deg)';
            plusIcon.style.transition = 'transform 0.3s ease';
        }
    });
});

applyFilters();