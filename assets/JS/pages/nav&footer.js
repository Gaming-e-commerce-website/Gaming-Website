// Navbar
let nav = document.querySelector('#nav');

window.addEventListener('scroll', function () {
    if (window.scrollY > 900) {
        nav.classList.add('fixed');
        nav.style.opacity = '1';

    }
    else if (window.scrollY > 100 && window.scrollY <= 900) {
        nav.style.opacity = '0';
        nav.classList.remove('fixed');
    }
    else {
        nav.style.opacity = '1';
        nav.classList.remove('fixed');
    }
});
 