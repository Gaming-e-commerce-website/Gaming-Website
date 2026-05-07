document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic data collection
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        description: document.getElementById('description').value
    };

    console.log('Form Submitted:', formData);
  
   
    this.reset();
});


const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const input = document.querySelector(".quantity input");

plus.addEventListener("click", function (e) {
    e.preventDefault();
    input.value = parseInt(input.value) + 1;
});

minus.addEventListener("click", function (e) {
    e.preventDefault();
    if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
    }
});


// CART STATE

let cartItems = JSON.parse(localStorage.getItem('gamingCart')) || [];

function saveCart() {
    localStorage.setItem('gamingCart', JSON.stringify(cartItems));
}


// PRODUCT DATA   

const products = window.__PRODUCTS_DATA__ ? window.__PRODUCTS_DATA__ : [
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

function isLoggedIn() {
    return !!localStorage.getItem('loggedInUser');
}

function requireLogin() {

    localStorage.setItem('redirectAfterLogin', window.location.href);
    showToast('  Please sign in first to add items to your cart!');
    setTimeout(() => {
        window.location.href = '../Pages/Signin.html';
    }, 1500);
}


// SIDE CART — RENDER

function renderSideCart() {
    const fullDiv = document.querySelector('.sideCart .full');
    const emptyDiv = document.querySelector('.sideCart .content-empty');
    const countSpan = document.getElementById('count');
    const priceSpan = document.getElementById('price');
    const navCartCircle = document.querySelector(' #count-items')

    if (!fullDiv) return;

    // badge on nav icon
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

    // build items
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

    // totals
    const totalItems = cartItems.reduce((s, i) => s + i.qty, 0);
    const totalPrice = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
    if (countSpan) countSpan.textContent = ' ' + totalItems;
    if (priceSpan) priceSpan.textContent = ' $' + totalPrice.toFixed(2);

    // events on rendered items
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
            showToast(`"${product.name}"  removed from cart!`);
        });
    });
}

function addToCart(productId, qty = 1) {
    // ── تحقق من تسجيل الدخول ──
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


