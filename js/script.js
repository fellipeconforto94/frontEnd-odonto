//alert('OK');

// Seleção de DOM (Selecionar itens do HTML)

var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

console.log(btnMenu);
console.log(menu);

function menuOpen() {
    console.log('Menu aberto!');
    menu.classList.toggle('menu-open');
}

btnMenu.addEventListener('click', menuOpen);