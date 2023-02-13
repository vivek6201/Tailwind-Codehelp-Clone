feather.replace();

let typeData = new Typed("#typed", {
    strings: [
        "Love",
        "Babbar"
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

const navbar = document.querySelector('#navbar');
window.onscroll = () => {
    if (window.scrollY > 900) {
        navbar.classList.add('bg-offWhite');
    } else {
        navbar.classList.remove('bg-offWhite');
    }
};

const menuBtn = document.querySelector("#menu-btn");
const menuList = document.querySelector("#mobile-menu");

menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
})