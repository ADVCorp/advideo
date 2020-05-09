// declaracion de variables
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-movil');

let contador = 0;

// asignar eventos
btnMenu.addEventListener("click", function (e) {
    if (contador === 0) {
        menu.classList.add('active');
        contador = 1;
    }else if (contador === 1) {
        menu.classList.remove('active');
        contador = 0;
    }
});