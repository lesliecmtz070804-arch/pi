
    /* IMAGENES EN CARUSEL */
document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const images = document.querySelectorAll(".carousel img");

    function cambiarImagen() {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }

    setInterval(cambiarImagen, 3000);
});

    /* MENU DESPLEGABLE */
function toggleMenu(e) {
    e.stopPropagation();
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener("click", function() {
    document.getElementById("menu").classList.remove("active");
});