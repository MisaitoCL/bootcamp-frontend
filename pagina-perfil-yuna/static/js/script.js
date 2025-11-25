document.addEventListener("DOMContentLoaded", function () {

    const btnAceptar = document.querySelectorAll(".icon-color-aceptar");
    const btnRechazar = document.querySelectorAll(".icon-color");
    const sidebarContactos = document.querySelector(".sidebar-contactos");
    const editProfile = document.querySelector(".edit-profile");

    btnAceptar.forEach(boton => {

        boton.addEventListener("click", function ()  {
            const spanSolicitudes = document.querySelector("#Solicitudes");
            const spanConexiones = document.querySelector("#conexiones");
            const pSolicitudes =  document.querySelector(".sidebar-container > p").textContent;
            const imgSolicitudes =  document.querySelector(".image-profile").src;
            let x = parseInt(spanSolicitudes.textContent);
            spanSolicitudes.textContent = x - 1;
            spanConexiones.textContent = parseInt(spanConexiones.textContent) + 1;
            
             // Aquí eliminas el contenedor correcto
            const contenedor = this.closest(".sidebar-container");
            console.log(contenedor);
            if (contenedor) {
                contenedor.remove();
            }

           agregarContacto(imgSolicitudes, pSolicitudes);
        });
    });

    btnRechazar.forEach(boton => {
        boton.addEventListener("click", function ()  {
            const spanSolicitudes = document.querySelector("#Solicitudes");
            let x = parseInt(spanSolicitudes.textContent);
            spanSolicitudes.textContent = x - 1;

            // Aquí eliminas el contenedor correcto
            const contenedor = this.closest(".sidebar-container");
            console.log(contenedor);
            if (contenedor) {
                contenedor.remove();
            }

        });

    });

    editProfile.addEventListener("click", function(){
        const h1Nombre = document.querySelector(".block-texto > h1");
        const cajaNombre = document.querySelector("#nombre");

        if ( h1Nombre.hidden === true){
            h1Nombre.textContent = cajaNombre.value;
            h1Nombre.hidden = false;
            cajaNombre.hidden = true;
        }
        else {
            cajaNombre.value = h1Nombre.textContent;
            h1Nombre.hidden = true;
            cajaNombre.hidden = false;
        }
    });

    function agregarContacto(imgSrc, nombre) {
    // Crear IMG
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = "";
    img.classList.add("image-contacto");

    // Crear P
    const p = document.createElement("p");
    p.textContent = nombre;

    // Agregar al contenedor
    sidebarContactos.appendChild(img);
    sidebarContactos.appendChild(p);
}

});