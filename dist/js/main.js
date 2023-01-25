const menuBtn = document.querySelector('.menu-button');
const hamburger = document.querySelector('.menu-button_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}

window.onscroll = function () {
    const threshold = 0.5; // 80% of the total height
    if (window.scrollY >= (document.body.offsetHeight - window.innerHeight + (document.body.offsetHeight * threshold))) {
        const elements = document.getElementsByClassName("social-icons");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
            elements[i].classList.add('reachedBottom');
        }
    } else {
        const elements = document.getElementsByClassName("social-icons");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "flex";
            elements[i].classList.remove('reachedBottom')
        }
    }
}



/* ====================== Working Landing Page======================= */
