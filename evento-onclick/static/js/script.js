//1. Cuando sé de clic en el botón “Iniciar sesión” este debe cambiar a “Cerrar sesión”.

// obtengo el botón por su clase css
let botonLogin = document.querySelector(".btn-login");
//defino una banderita para cambiar valor por cada click
let flag = 0;
// se agrega un evento 'click' al botón
botonLogin.addEventListener("click", function () {
    // Cambiamos el contenido del botón a cerrar sesión si la variable es 0 para que actue como switch
    if (flag === 0) {
        this.innerText = "Cerrar Sesión";
        flag = 1;
    }
    //si la bandera no es 0 volvemos a mostrar iniciar y dejamos la variable en 0
    else {
        this.innerText = "Iniciar Sesión";
        flag = 0;
    }

});

//2. Cuando se da clic en “Agregar definición” el botón debe desaparecer.

// obtengo el botón por su clase css
let btnAdd = document.querySelector(".btn-add");
// agrego un evento 'click' al botón
btnAdd.addEventListener("click", function () {
    //elimino boton
    this.remove();
});

//3. Cuando se da clic en “Me gusta” para una de las definiciones se dispara una alarma indicando que te gusto la definición junto con el título de la misma.
//y
//4. Cada vez que se le da clic al botón de like de cada definición, este debe aumentar el conteo de likes de cada definición.

// Obtenemos todos los botones por su clase css
const btnLike = document.querySelectorAll(".btn-like");

//recorro todos los botones
btnLike.forEach(boton => {
    // Agregamos un evento 'click'
    boton.addEventListener("click", () => {
        // Obtengo el div contenedor padre
        const divPadre = boton.closest('.box-section');
        // obtengo el titulo h2 dentro del div
        const titulo = divPadre.querySelector('h2').textContent; // obtiene el h2
        // declaro una variable y obtengo la parte entera del boton
        let like = parseInt(boton.innerText);
        // Le sumo 1 a mi variable
        like += 1;
        // muestro la suma concatenada con el texto en el boton 
        boton.innerText = like + " me gusta";
        // muestro alerta con titulo
        alert("Te gusta " + titulo);
    });
});

