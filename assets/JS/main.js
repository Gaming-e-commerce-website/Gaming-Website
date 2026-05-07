// function Loading
const msgs = ['Booting system...', 'Loading products...', 'Fetching prices...', 'Syncing inventory...', 'Ready to shop!'];
let hp = 0;
const hlFill = document.getElementById('hlFill');
const hlPct = document.getElementById('hlPct');
const hlMsg = document.getElementById('hlMsg');

// progress bar
const iv1 = setInterval(() => {
    hp = Math.min(hp + Math.floor(Math.random() * 3) + 1, 100);
    hlFill.style.width = hp + '%';
    hlPct.textContent = hp + '%';
    hlMsg.textContent = msgs[Math.floor(hp / 22)] || 'Ready!';
    if (hp >= 100) {
        clearInterval(iv1);
        // hide loader after a small delay
        setTimeout(() => {
            document.getElementById('homeLoader').classList.add('hidden');
            document.getElementById('mainContent').style.opacity = '1';
        }, 600);
    }
}, 65);

// animated counters
function counter(id, target, suffix, dur) {
    let v = 0, step = target / dur * 50;
    const iv = setInterval(() => {
        v = Math.min(v + step, target);
        document.getElementById(id).textContent = Math.floor(v) + (suffix || '');
        if (v >= target) clearInterval(iv);
    }, 50);
}
counter('sGames', 500, '+', 60);
counter('sUsers', 12000, '+', 80);
counter('sDeals', 120, '+', 50);

// also hide on window load (safety net)
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('homeLoader').classList.add('hidden');
        document.getElementById('mainContent').style.opacity = '1';
    }, 2800);
});


// pages loading
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.page-loader').classList.add('hidden');
    }, 1500);
});

// nav scroll
let nav = document.querySelector('#nav');

window.addEventListener('scroll', function () {
    if (window.scrollY > 900) {
        nav.classList.add('fixed');
        nav.style.opacity = '1';
    } else if (window.scrollY > 100 && window.scrollY <= 900) {
        nav.style.opacity = '0';
        nav.classList.remove('fixed');
    } else {
        nav.style.opacity = '1';
        nav.classList.remove('fixed');
    }
});

// header slider 

const header = document.querySelector('header');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const h1 = document.querySelector("header .container h1 ");
const p = document.querySelector("header .container p ");


btn1.onclick = function () {
    h1.innerHTML = "Exploring Premier <span>gaming accessories</span>"
    p.innerHTML = "Discover top-tier gaming accessories designed to enhance your gameplay. Explore the best in precision, comfort, and performance for an unparalleled gaming experience."
    header.style.background = "url(assets/images/files/B1.png) no-repeat center/cover ";
}
btn2.onclick = function () {
    h1.innerHTML = "Unlocking the Excellence of  <span>gaming accessories</span> ";
    p.innerHTML = " Elevate your gaming prowess with our premium accessories. From high-performance keyboards to immersive headsets, gear up for unparalleled gameplay. Explore our top-tier selection and dominate the competition."
    header.style.background = "url(assets/images/files/B2.png) no-repeat center/cover ";
}
btn3.onclick = function () {
    h1.innerHTML = "higher experience with world best  <span>gaming accessories</span> ";
    p.innerHTML = "Experience gaming at its peak with world-class accessories. Elevate your skills and immerse yourself in every game with precision-engineered gear designed for champions. Level up today."
    header.style.background = "url(assets/images/files/B3.png) no-repeat center/cover";
}




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
    { id: 1, name: "Nintendo Switch Lite", price: 543, img: "/assets/images/Products/1-1.png", desc: "Compatibility; Glass Screen Protector Compatible with Nintendo Switch. 9H Hardness; Tempered glass durability rated at 9H hardness to protect from everyday scratches." },
    { id: 2, name: "Rubber Keycaps", price: 580, img: "assets/images/Products/2-1.png", desc: "Our Rubber Keycaps are designed to fit any gaming keyboard with any Cherry MX Switches or any new switches that have a + under your keycaps." },
    { id: 3, name: "Alien ware Monitor T 46", price: 850, img: "assets/images/Products/3-1.png", desc: "Exceptional Full HD IPS 21.5 Inch Ultra Thin Display: Enjoy immaculate image quality with 1920x1080 resolution and 178 degree wide viewing angles. Zero Frame." },
    { id: 4, name: "Colossus Ergonomic", price: 356, img: "assets/images/Products/4-1.png", desc: "ERGONOMICALLY DESIGNED FOR HARDCORE GAMING: From its unique contours and angled seat edges, to its fully adjustable recline, tilt, and height, the Dr Luxur." },
    { id: 5, name: "Cloud Alpha Gaming", price: 530, img: "assets/images/Products/5-1.png", desc: "HyperX Dual Chamber Drivers for more distinction and less distortion. Signature Award-Winning HyperX comfort. Durable aluminum frame with an expanded design." },
    { id: 6, name: "Raptor Gaming Z95", price: 896, img: "assets/images/Products/6-1.webp", desc: "Multiple connectivity options including HDMI, USB ports & RGB fans let you connect a variety of peripherals easily. Wi-Fi Ready – Connect to the internet wirelessly." },
    { id: 7, name: "Gaming Chair for Gamers", price: 560, img: "assets/images/Products/7-1.png", desc: "Have back issues or don't want to develop them? This adjustable office chair includes Cushion Foam Padded support and a recline feature." },
    { id: 8, name: "Electrobot Xtreme Gaming", price: 468, img: "assets/images/Products/8-1.png", desc: "Multiple connectivity options including HDMI, USB ports & RGB fans let you connect a variety of peripherals easily. Wi-Fi Ready – Connect to the internet wirelessly." },
    { id: 9, name: "VR Headset", price: 860, img: "assets/images/Products/9-1.png", desc: "40MM HD optical resin lens with Focal and IPD adjustments with FOV up to 110 provides best VR Experience. Best-in-class headphones With 3.5mm Jack." },
    { id: 10, name: "Refurbished Xbox Series X", price: 430, img: "assets/images/Products/10-1.webp", desc: "Compatibility; Glass Screen Protector Compatible with Nintendo Switch. 9H Hardness; Tempered glass durability rated at 9H hardness to protect from everyday scratches." },
    { id: 11, name: "Radeon™ RX 750 XT", price: 940, img: "assets/images/Products/11-1.webp", desc: "Microsoft Windows 10 and Microsoft DirectX 12 supported Video Memory: 8GB DDR5. The XFX Radeon RX 580 Series graphics card coupled with AMD LiquidVR." },
    { id: 12, name: "Radeon™ RX 750 XT (II)", price: 560, img: "assets/images/Products/12-1.webp", desc: "Microsoft Windows 10 and Microsoft DirectX 12 supported Video Memory: 8GB DDR5. The XFX Radeon RX 580 Series graphics card coupled with AMD LiquidVR." },
    { id: 13, name: "Radeon RX 680 GTS", price: 356, img: "assets/images/Products/13-1.webp", desc: "Microsoft Windows 10 and Microsoft DirectX 12 supported Video Memory: 8GB DDR5. The XFX Radeon RX 580 Series graphics card coupled with AMD LiquidVR." },
    { id: 14, name: "Radeon RX 590 GTS", price: 890, img: "assets/images/Products/14-1.webp", desc: "Microsoft Windows 10 and Microsoft DirectX 12 supported Video Memory: 8GB DDR5. The XFX Radeon RX 580 Series graphics card coupled with AMD LiquidVR." },
    { id: 15, name: "Radeon RX 590 GTS (II)", price: 890, img: "assets/images/Products/15-1.webp", desc: "Microsoft Windows 10 and Microsoft DirectX 12 supported Video Memory: 8GB DDR5. The XFX Radeon RX 580 Series graphics card coupled with AMD LiquidVR." },
    { id: 16, name: "Multi-Functional Ergonomic", price: 560, img: "assets/images/Products/16-1.webp", desc: "ERGONOMIC DESIGN: Feel less fatigued over long periods with the lumbar curve that gently supports your lower back and encourages sitting in a neutral position." },
    { id: 17, name: "Kepler Brooks Gaming Chair", price: 800, img: "assets/images/Products/17-1.webp", desc: "Premium Material: PU Leather Upholstery made with High density foam and added seat cushion, more comfort and long-time use; High Tensile steel frame." },
    { id: 18, name: "KD DMTR Gaming Desktop", price: 865, img: "assets/images/Products/18-1.webp", desc: "Multiple connectivity options including HDMI, USB ports & RGB fans let you connect a variety of peripherals easily. Wi-Fi Ready – Connect to the internet wirelessly." },
    { id: 19, name: "Hyper Clutch Gaming", price: 630, img: "assets/images/Products/19-1.webp", desc: "Bring gaming worlds to life. Feel your in-game actions and environment simulated through haptic feedback. Experience varying force and tension at your fingertips." },
    { id: 20, name: "HTC Vive Tracker 3.0 PC", price: 560, img: "assets/images/Products/20-1.webp", desc: "Body tracking – track the physical presence of your entire body within the virtual environment. Capture full-body motions with as few as 3 trackers." },
    { id: 21, name: "G-Series Curved VA Monitor", price: 453, img: "assets/images/Products/21-1.webp", desc: "Lenovo Smart Artery Software: Self-learning software auto-adjusts display. Crosshair feature for FPS games. View Frame Rate and Timer. Create customized gaming modes." },
    { id: 22, name: "DualSense Wireless", price: 600, img: "assets/images/Products/22-1.webp", desc: "Bring gaming worlds to life. Feel your in-game actions and environment simulated through haptic feedback. Experience varying force and tension at your fingertips." },
    { id: 23, name: "Alienware Monitor D 152", price: 752, img: "assets/images/Products/23-1.webp", desc: "Exceptional Full HD IPS 21.5 Inch Ultra Thin Display: Enjoy immaculate image quality with 1920x1080 resolution and 178 degree wide viewing angles. Zero Frame." },
    { id: 24, name: "Alienware Gaming Monitor", price: 560, img: "assets/images/Products/24-1.webp", desc: "Exceptional Full HD IPS 21.5 Inch Ultra Thin Display: Enjoy immaculate image quality with 1920x1080 resolution and 178 degree wide viewing angles. Zero Frame." },
];

function isLoggedIn() {
    return !!localStorage.getItem('loggedInUser');
}

function requireLogin() {
    localStorage.setItem('redirectAfterLogin', window.location.href);
    showToast('Please sign in first to add items to your cart!');
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
    // check login
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

// close on backdrop click
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

// qty inside modal
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

// Add to cart from modal
if (pvAddBtn) {
    pvAddBtn.addEventListener('click', () => {
        if (!currentViewProduct) return;
        addToCart(currentViewProduct.id, parseInt(pvQtyInput.value));
        closeProductView();
    });
}


// WIRE UP PRODUCT CARDS

document.querySelectorAll('.card').forEach((card, index) => {
    const productId = index + 1; // cards are 1-indexed

    // ADD TO CART button
    const addBtn = card.querySelector('button#ADD');
    if (addBtn) {
        addBtn.addEventListener('click', () => addToCart(productId));
    }

    // Eye icon → product view
    const eyeIcon = card.querySelector('.fa-eye');
    if (eyeIcon) {
        eyeIcon.style.cursor = 'pointer';
        eyeIcon.addEventListener('click', () => openProductView(productId));
    }

    // Heart icon  wishlist (just toggles color for now)
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
            font-family: Arial, Helvetica, sans-serif;
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

renderSideCart();


// slider section  for products 

const cards = document.querySelectorAll('.card');
const btns = document.querySelectorAll('.selected-btns p');
const container = document.querySelector('.products');

let current = 0;


function goTo(index) {

    const total = cards.length;
    current = (index + total) % total;



    cards.forEach(c => c.classList.remove('selected'));



    cards[current].classList.add('selected');


    const card = cards[current];
    const containerW = container.offsetWidth;
    const scrollTo = card.offsetLeft
        - (containerW / 2)
        + (card.offsetWidth / 2);

    container.scrollTo({ left: scrollTo, behavior: 'smooth' });
}


btns.forEach((btn, i) => btn.addEventListener('click', () => goTo(i)));


window.addEventListener('load', () => {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            goTo(0);
        });
    });
});


//  Show Username After Login 
let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
let nameParagraph = document.querySelector('.name');
let accountLink = document.querySelector('.account a');

if (loggedInUser) {
    nameParagraph.textContent = loggedInUser.firstName;
    accountLink.href = "#";
} else {
    nameParagraph.textContent = '';
    accountLink.href = "Pages/Signin.html";
}
