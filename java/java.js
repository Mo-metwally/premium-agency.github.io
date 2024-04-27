let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}


window.onscroll = () => {
    navbar.classList.remove('active');
};

var navbarr = document.querySelector('.header')
var logo = document.querySelector('.logo')
var logo2 = document.querySelector('.logo-2')

window.onscroll = function () {

    // pageYOffset or scrollY
    if (window.pageYOffset > 150) {
        navbarr.classList.add('bg-active')
        logo.classList.add('hide')
        logo2.classList.add('show')
    } else {
        navbarr.classList.remove('bg-active')
        logo.classList.remove('hide')
        logo2.classList.remove('show')
    }
};


const button = document.querySelector("#mute");
const icon = document.querySelector("#mute > i");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.volume = 0.2;
        audio.play();
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');

    } else {
        audio.pause();
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-mute');
    }
    // button.classList.add("fade");
});



