document.addEventListener("DOMContentLoaded", function () {
    
    // Obtenemos todos los botones por su clase css
    const btnLike = document.querySelectorAll(".btn-like");

    //recorro todos los botones
    btnLike.forEach(boton => {
        // Agregamos un evento 'click'
        boton.addEventListener("click", () => {
            // Obtengo el div contenedor padre
            const divPadre = boton.closest('.post-footer');

            // obtengo el titulo h2 dentro del div
            const titulo = divPadre.querySelector('p')// obtiene el p

            // declaro una variable y obtengo la parte entera del texto de p
            let like = parseInt(titulo.innerText);
            
            // Le sumo 1 a mi variable
            like += 1;

            // muestro la suma concatenada con el p 
            titulo.innerText = like + " like(s)";

            //esto no lo pedian en el core pero quería dar un efectito :D
            // llamo a la clase pop para dar un efecto al texto de like 
            titulo.classList.add("pop");
            // remuevo la clase del efecto luego de unos segundos
            setTimeout(() => titulo.classList.remove("pop"), 300);

            
        });
    });

});