// ============================================================
// CART PAGE JS  — assets/JS/pages/cart.js
// ============================================================

// ---------- shared cart helpers ----------
let cartItems = JSON.parse(localStorage.getItem('gamingCart')) || [];

function saveCart() {
    localStorage.setItem('gamingCart', JSON.stringify(cartItems));
}

// ---------- DOM refs ----------
const emptyCartEl = document.querySelector('.empty-cart');
const fullCartEl = document.querySelector('.full-cart');
const itemsContainer = document.querySelector('.full-cart .content .container');
const orderBtn = document.querySelector('.full-cart .order button');

// ---------- RENDER CART PAGE ----------
function renderCartPage() {
    updateNavBadge();

    if (cartItems.length === 0) {
        emptyCartEl.style.display = 'block';
        fullCartEl.style.display = 'none';
        return;
    }

    emptyCartEl.style.display = 'none';
    fullCartEl.style.display = 'block';

    // build rows
    itemsContainer.innerHTML = cartItems.map(item => 
        `<div class="item" data-id="${item.id}">
            <div class="image">
                <img src="${item.img}" alt="${item.name}">
            </div>
            <div class="name">
                <h2>${item.name}</h2>
                <p style="color:#838383;font-size:13px;">Unit price: $${item.price.toFixed(2)}</p>
                <p id="price" style="color:#0098ff;font-weight:700;margin-top:6px;">
                    $${(item.price * item.qty).toFixed(2)}
                </p>
            </div>
            <div class="quantity">
                <button class="minus" data-id="${item.id}">-</button>
                <input type="number" min="1" value="${item.qty}" max="10" readonly>
                <button class="plus" data-id="${item.id}">+</button>
            </div>
            <div class="Total">
                <p>$${(item.price * item.qty).toFixed(2)}</p>
            </div>
            <div class="remove" data-id="${item.id}">
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
    `).join('');

    // total row
    const existingSummary = document.querySelector('.cart-summary');
    if (existingSummary) existingSummary.remove();

    const totalQty = cartItems.reduce((s, i) => s + i.qty, 0);
    const totalPrice = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

    const summaryEl = document.createElement('div');
    summaryEl.className = 'cart-summary';
    summaryEl.innerHTML = `
        <div class="summary-line">
            <span>Total Items</span>
            <span>${totalQty}</span>
        </div>
        <div class="summary-line">
            <span>Subtotal</span>
            <span>$${totalPrice.toFixed(2)}</span>
        </div>
        <div class="summary-line">
            <span>Shipping</span>
            <span style="color:#24d57a">Free</span>
        </div>
        <div class="summary-line total-line">
            <span>Total</span>
            <span>$${totalPrice.toFixed(2)}</span>
        </div>
    `;

    // insert summary before the order button wrapper
    const orderDiv = document.querySelector('.full-cart .order');
    fullCartEl.insertBefore(summaryEl, orderDiv);

    // wire up +/- and remove
    itemsContainer.querySelectorAll('.plus').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const item = cartItems.find(i => i.id === id);
            if (item && item.qty < 10) { item.qty++; saveCart(); renderCartPage(); }
        });
    });

    itemsContainer.querySelectorAll('.minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const item = cartItems.find(i => i.id === id);
            if (item && item.qty > 1) { item.qty--; saveCart(); renderCartPage(); }
        });
    });

    itemsContainer.querySelectorAll('.remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            cartItems = cartItems.filter(i => i.id !== id);
            saveCart();
            renderCartPage();
            showToast('Item removed');
        });
    });
}

// ---------- ORDER BUTTON ----------
if (orderBtn) {
    orderBtn.addEventListener('click', () => {
        //  window.alert(" Nintendo Switch Lite is ordered successfully");
        if (cartItems.length === 0) return;
        showToast(' Order placed successfully! Thank you!');
        cartItems = [];
        saveCart();
        setTimeout(renderCartPage, 1600);
       
    });
}

// ---------- NAV BADGE ----------
function updateNavBadge() {
    const badge = document.querySelectorAll('.navbar .icons .circle')[1];
    if (badge) badge.textContent = cartItems.reduce((s, i) => s + i.qty, 0);
}

// ---------- SIDE CART (same panel used across pages) ----------
const sideCartEl = document.querySelector('.sideCart');
const cartEl = document.querySelector('.sideCart .cart');
const cartIcon = document.querySelector('.navbar .container .icons .fa-cart-arrow-down');
const closeCartEl = document.querySelector('.sideCart .content .cart .nav .close');

function renderSideCart() {
    const fullDiv = document.querySelector('.sideCart .full');
    const emptyDiv = document.querySelector('.sideCart .content-empty');
    const countSpan = document.getElementById('count');
    const priceSpan = document.getElementById('price');

    if (!fullDiv) return;

    updateNavBadge();

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
            <div class="image"><img src="${item.img}" alt="${item.name}"></div>
            <div class="info">
                <h2>${item.name}</h2>
                <div class="quantity">
                    <button class="minus" data-id="${item.id}">-</button>
                    <input type="number" value="${item.qty}" min="1" max="10" readonly>
                    <button class="plus" data-id="${item.id}">+</button>
                </div>
                <p style="color:#007aff;font-weight:700;margin-top:6px;">
                    $${(item.price * item.qty).toFixed(2)}
                </p>
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

    // events
    fullDiv.querySelectorAll('.plus').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const item = cartItems.find(i => i.id === id);
            if (item && item.qty < 10) { item.qty++; saveCart(); renderSideCart(); renderCartPage(); }
        });
    });
    fullDiv.querySelectorAll('.minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const item = cartItems.find(i => i.id === id);
            if (item && item.qty > 1) { item.qty--; saveCart(); renderSideCart(); renderCartPage(); }
        });
    });
    fullDiv.querySelectorAll('.remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            cartItems = cartItems.filter(i => i.id !== id);
            saveCart(); renderSideCart(); renderCartPage();
        });
    });
}

if (cartIcon) cartIcon.addEventListener('click', () => {
    sideCartEl.style.opacity = '1';
    sideCartEl.style.visibility = 'visible';
    cartEl.style.right = '0%';
    document.body.style.overflow = 'hidden';
});
if (closeCartEl) closeCartEl.addEventListener('click', () => {
    cartEl.style.right = '-50%';
    sideCartEl.style.opacity = '0';
    sideCartEl.style.visibility = 'hidden';
    document.body.style.overflow = 'auto';
});
if (sideCartEl) sideCartEl.addEventListener('click', e => {
    if (e.target === sideCartEl) closeCartEl.click();
});

// ---------- TOAST ----------
function showToast(msg) {
    let toast = document.getElementById('cartToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'cartToast';
        toast.style.cssText = `
            position:fixed; bottom:30px; left:50%;
            transform:translateX(-50%) translateY(80px);
            background:linear-gradient(93.25deg,#0098ff 4.45%,#7c34c8 93.88%);
            color:#fff; padding:14px 28px;
            border-radius:0 20px 0 20px;
            font-weight:600; font-size:14px;
            z-index:99999; opacity:0; white-space:nowrap;
            transition:transform .4s cubic-bezier(.34,1.56,.64,1),opacity .4s ease;
            box-shadow:0 8px 32px rgba(0,152,255,.4);
            font-family:Raleway,sans-serif;
        `;
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    requestAnimationFrame(() => {
        toast.style.transform = 'translateX(-50%) translateY(0)';
        toast.style.opacity = '1';
    });
    clearTimeout(toast._t);
    toast._t = setTimeout(() => {
        toast.style.transform = 'translateX(-50%) translateY(80px)';
        toast.style.opacity = '0';
    }, 2500);
}

// ---------- PAGE LOADER ----------
window.addEventListener('load', () => {
    setTimeout(() => {
        const pl = document.getElementById('pageLoader');
        if (pl) pl.classList.add('hidden');
    }, 1200);
});

// ---------- INIT ----------
renderCartPage();
renderSideCart();