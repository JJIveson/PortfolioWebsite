/* ====================== MENU SHOW + HIDDEN ============================== */
const navMenu = document.getElementById('nav-menu');

const navToggle = document.getElementById('nav-toggle');

const navClose = document.getElementById('nav-close');

/* ====== MENU SHOW ======== */
/* Validate if constant exists */

if (navToggle) {
    console.log("2:" + navMenu)

    navToggle.addEventListener ('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* ====== MENU HIDDEN ======== */
/* Validate if constant exists */

if (navClose) {
    console.log("3:" + navMenu)

    navClose.addEventListener ('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/* ====== REMOVE MENU MOBILE ======== */

const navLink = document.querySelectorAll('.nav__link')

console.log(navLink);

function linkAction() {
    console.log("4:" + navMenu)

    const navMenu2 = document.getElementById('nav-menu');
    navMenu2.classList.remove('show-menu')
}
console.log(navLink);

navLink.forEach(n => n.addEventListener('click', linkAction))

console.log(navLink);


/* ====== PROJECTS MODAL ======== */
const modalViews = document.querySelectorAll('.projects__modal'),
        modalBtns = document.querySelectorAll('.projects__button'),
        modalCloses = document.querySelectorAll('.projects__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/* ====== Skills SWIPER ======== */
let swiper = new Swiper('.skills__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*========================= SCROLL SECTIONS ACTIVE LINK ===========================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__container a[href*= ' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__container a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*========================= SCROLL SECTIONS ACTIVE LINK ===========================*/
function scrollHeader() {
    const nav = document.getElementById('header')

    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.add('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*========================= SHOW SCROLL ===========================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >=400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*===================== DARK LIGHT THEME ========================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})