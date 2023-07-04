const abrir = document.querySelector('.navbar-toggler');
const cerrar = document.querySelector('.cerrar');
const nav = document.querySelector('.navbar-nav');

console.log(abrir);
console.log(cerrar);

abrir.addEventListener('click', ()=>{
    nav.classList.toggle('navbar_nav');

})

window.addEventListener('click',)