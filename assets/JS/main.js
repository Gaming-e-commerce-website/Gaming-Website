
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



// header slider 

const header = document.querySelector('header');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const h1 = document.querySelector( "header .container h1 ");
const p = document.querySelector( "header .container p ");


btn1.onclick =function(){
    h1.innerHTML =  "Exploring Premier <span>gaming accessories</span>"
    p.innerHTML =  "Discover top-tier gaming accessories designed to enhance your gameplay. Explore the best in precision, comfort, and performance for an unparalleled gaming experience."
    header.style.background =   "url(assets/images/files/B1.png) no-repeat center/cover ";
}
btn2.onclick =function(){
    h1.innerHTML = "Unlocking the Excellence of  <span>gaming accessories</span> ";
    p.innerHTML = " Elevate your gaming prowess with our premium accessories. From high-performance keyboards to immersive headsets, gear up for unparalleled gameplay. Explore our top-tier selection and dominate the competition."
    header.style.background = "url(assets/images/files/B2.png) no-repeat center/cover ";
}
btn3.onclick =function(){
    h1.innerHTML = "higher experience with world best  <span>gaming accessories</span> ";
    p.innerHTML = "Experience gaming at its peak with world-class accessories. Elevate your skills and immerse yourself in every game with precision-engineered gear designed for champions. Level up today."
    header.style.background = "url(assets/images/files/B3.png) no-repeat center/cover";
}





// opening side cart 
const cartIcon = document.querySelector(".navbar .container .icons .fa-cart-arrow-down")
const sideCart = document.querySelector(".sideCart");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector(".sideCart .content .cart .close")

cartIcon.onclick =function(){
    sideCart.style.opacity = "1" ;
    sideCart.style.visibility = "visible";
    cart.style.right= "0%";
    document.body.style.overflow = "hidden";
}
// closing side cart
closeCart.onclick = function(){
    cart.style.right= "-50%%";
    sideCart.style.opacity = "0" ;
    sideCart.style.visibility = "hidden";
    document.body.style.overflow = "auto"; 
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