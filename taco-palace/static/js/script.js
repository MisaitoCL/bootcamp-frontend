document.addEventListener("DOMContentLoaded", function () {

    // obtengo boton add por su clase
    const btnAdd = document.querySelectorAll(".btn-add");
    // obtengo span con cantita por su clase 
    const spnCantidad = document.querySelector(".cantidad");
    // obtengo noton login por su id 
    const btnLogin = document.querySelector("#btnLogin");
    // obtengo imagen principal por su id
    const miImagen = document.querySelector("#imagen-principal");
    // obtengo el input de correo por su id
    const correo = document.querySelector("#email");

    // recorro todo los botones add encontrados 
    btnAdd.forEach(boton => {
        // asigno una funcion 
        boton.addEventListener("click", function () {
            // le sumo a la cantidad 1, lo dejo como entrero para que no contatene 
            spnCantidad.textContent = parseInt(spnCantidad.textContent) + 1;

            //esto no lo pedian en el core pero quería dar un efectito :D
            // llamo a la clase pop para dar un efecto al texto de like 
            spnCantidad.classList.add("pop");
            // remuevo la clase del efecto luego de unos segundos
            setTimeout(() => spnCantidad.classList.remove("pop"), 300);
        });
    });

    // asigno una funcion al boton login
    btnLogin.addEventListener("click", () => {
        // valido que ingresen un correo 
        if (correo.value === "") {
            // si no ingresaron correo envio un mensaje indicando 
            alert("Debe ingresar su correo");
        }
        else {
            // por el contrario si pusieorn un correo lo muestro en el alert 
            alert(" Bienvenido " + correo.value);
        }

    });

    // asigno funcion para cambiar la imagen al poner curso sobre esta 
    miImagen.addEventListener("mouseenter", function () {
        // establezco nueva ruta de imagen 
        this.src = "static/images/comida-mexicana-02.jpg";
        // establezco el texto asociado 
        this.alt = "comida mexicana 1";
    });

    // asigno funcion para cambiar la imagen al sacar curso sobre esta 
    miImagen.addEventListener("mouseleave", function () {
        // establezco nueva ruta de imagen 
        this.src = "static/images/comida-mexicana-01.jpg";
        // establezco el texto asociado 
        this.alt = "comida mexicana 2";
    });
});