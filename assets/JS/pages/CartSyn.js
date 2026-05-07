// assets/JS/cartSync.js
//   pages loading
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.page-loader').classList.add('hidden');
    }, 1500);
});

(function () {
    const cartItems = JSON.parse(localStorage.getItem('gamingCart')) || [];
    const totalQty = cartItems.reduce((s, i) => s + i.qty, 0);

     
    const badge = document.getElementById('count-items');
    if (badge) badge.textContent = totalQty;

     
    const sideCartEl = document.querySelector('.sideCart');
    const cartEl = document.querySelector('.sideCart .cart');
    const cartIcon = document.querySelector('.navbar .container .icons .fa-cart-arrow-down');
    const closeCartEl = document.querySelector('.sideCart .cart .nav .close');

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

    // render الـ cart items
    function renderCart() {
        const fullDiv = document.querySelector('.sideCart .full');
        const emptyDiv = document.querySelector('.sideCart .content-empty');
        const countSpan = document.getElementById('count');
        const priceSpan = document.getElementById('price');

        if (!fullDiv) return;

        const items = JSON.parse(localStorage.getItem('gamingCart')) || [];

        if (items.length === 0) {
            emptyDiv.style.display = 'flex';
            fullDiv.innerHTML = '';
            if (countSpan) countSpan.textContent = ' 0';
            if (priceSpan) priceSpan.textContent = ' $0.00';
            return;
        }

        emptyDiv.style.display = 'none';

        fullDiv.innerHTML = items.map(item => `
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
                    <p style="color:#007aff;font-weight:700;margin-top:8px;">
                        $${(item.price * item.qty).toFixed(2)}
                    </p>
                </div>
                <div class="remove" data-id="${item.id}" style="cursor:pointer">
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
        `).join('');

        const totalItems = items.reduce((s, i) => s + i.qty, 0);
        const totalPrice = items.reduce((s, i) => s + i.price * i.qty, 0);
        if (countSpan) countSpan.textContent = ' ' + totalItems;
        if (priceSpan) priceSpan.textContent = ' $' + totalPrice.toFixed(2);

        // أحداث + و - والحذف
        fullDiv.querySelectorAll('.plus').forEach(btn => {
            btn.addEventListener('click', () => updateQty(parseInt(btn.dataset.id), 1));
        });
        fullDiv.querySelectorAll('.minus').forEach(btn => {
            btn.addEventListener('click', () => updateQty(parseInt(btn.dataset.id), -1));
        });
        fullDiv.querySelectorAll('.remove').forEach(btn => {
            btn.addEventListener('click', () => removeItem(parseInt(btn.dataset.id)));
        });
    }

    function updateQty(id, delta) {
        let items = JSON.parse(localStorage.getItem('gamingCart')) || [];
        const item = items.find(i => i.id === id);
        if (!item) return;
        item.qty = Math.min(Math.max(item.qty + delta, 1), 10);
        localStorage.setItem('gamingCart', JSON.stringify(items));
        renderCart();
        updateBadge();
    }

    function removeItem(id) {
        let items = JSON.parse(localStorage.getItem('gamingCart')) || [];
        items = items.filter(i => i.id !== id);
        localStorage.setItem('gamingCart', JSON.stringify(items));
        renderCart();
        updateBadge();
    }

    function updateBadge() {
        const items = JSON.parse(localStorage.getItem('gamingCart')) || [];
        const qty = items.reduce((s, i) => s + i.qty, 0);
        const b = document.getElementById('count-items');
        if (b) b.textContent = qty;
    }

    // ربط الأحداث
    if (cartIcon) cartIcon.addEventListener('click', openSideCart);
    if (closeCartEl) closeCartEl.addEventListener('click', closeSideCart);
    if (sideCartEl) {
        sideCartEl.addEventListener('click', (e) => {
            if (e.target === sideCartEl) closeSideCart();
        });
    }

    // page loader
    window.addEventListener('load', () => {
        setTimeout(() => {
            const loader = document.querySelector('.page-loader');
            if (loader) loader.classList.add('hidden');
        }, 1500);
    });

    renderCart();
})();