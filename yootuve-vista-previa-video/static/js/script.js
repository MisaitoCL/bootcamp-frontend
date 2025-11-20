//DOMContentLoaded se asegura de trabajar una que vez que esta el DOM cargado listo para manipular
document.addEventListener("DOMContentLoaded", function () {
    //obtengo mi video
    const videos = document.querySelectorAll(".miVideo");
    const VideoPrincipal = document.querySelector(".miVideoPrincipal");
    console.log(VideoPrincipal);

    // Función para reproducir el video cuando pasa el mouse sobre él
    function reproducirVideo() {

        this.play();
    }

    function reproducirVideoenPrincipal() {

        const videoseleccionado = VideoPrincipal.src; //guardo el video que estaba en grande
        VideoPrincipal.src = this.src;   // nueva ruta para el video principal
        this.src = videoseleccionado //dejo el video que estaba en grande en chikitio

        const h3seleccionado = this.parentElement.nextElementSibling.querySelector("h3");
        const h1tituloPrincipal = document.querySelector("#tituloPrincipal");
        const textoPrincipal = h1tituloPrincipal.textContent

        h1tituloPrincipal.textContent = h3seleccionado.textContent;
        h3seleccionado.textContent = textoPrincipal

        VideoPrincipal.load();
        VideoPrincipal.play();
    }

    // Función para pausar el video cuando se retira el mouse del mismo
    function pausarVideo() {
        this.pause();
    }

    // Mostrar los videos al cargar el contenido
    videos.forEach(function (video) {
        video.style.display = "block";

        // Evento para reproducir el video al pasar el mouse sobre él
        video.addEventListener("mouseenter", reproducirVideo);
        video.addEventListener("click", reproducirVideoenPrincipal);

        // Evento para pausar el video al salir el mouse del mismo
        video.addEventListener("mouseleave", pausarVideo);
    });
});