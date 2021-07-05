burger = document.querySelectorAll('.burger');
navbar = document.querySelectorAll('.h-nav');
logo = document.querySelectorAll('.logo');
menu = document.querySelectorAll('.MenuBar');

burger.addEventListener('click', ()=>{
    logo.classList.toggle('.v-resp');
    menu.classList.toggle('.v-resp');
    navbar.classList.toggle('.h-resp');
})