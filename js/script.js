//alert('OK');

// Seleção de DOM (Selecionar itens do HTML)

var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

console.log(btnMenu);
console.log(menu);

function menuOpen() {
    console.log('Menu aberto!');
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
}

function menuClose() {
    console.log('Menu fechado!');
    menu.classList.remove('menu-open');
    btnMenu.classList.remove('x');

}

btnMenu.addEventListener('click', menuOpen);

menu.addEventListener('click', menuClose);