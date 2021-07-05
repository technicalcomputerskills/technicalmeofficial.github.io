burger = document.querySelector('.burger');
navbar = document.querySelector('.h-resp');
logo = document.querySelector('.logo');
menu = document.querySelector('.MenuBar');

burger.addEventListener('click', ()=>{
    logo.classList.toggle('.v-resp');
    menu.classList.toggle('.v-resp');
    // navbar.classList.toggle('.h-resp');
})