// Selecciona la capa de opacidad, las imágenes y el título
const capaOpacidad = document.querySelector('.capa-opacidad');
const imagenOriginal = document.querySelector('.img-original');
const imagenNueva = document.querySelector('.img-nueva');
const titulo = document.getElementById('titulo');

// Variable para rastrear el estado de la imagen
let imagenVisible = true;

// Agrega un evento de clic al contenedor de imágenes
document.querySelector('.imagen-container').addEventListener('click', function () {
    // Alterna la opacidad de la capa
    capaOpacidad.classList.toggle('opacidad');

    // Alterna la visibilidad de las imágenes
    if (imagenVisible) {
        imagenOriginal.style.opacity = 0; // Oculta la imagen original
        imagenNueva.style.opacity = 1;   // Muestra la nueva imagen
        titulo.textContent = "SÍ, TU SIENDO LA NOCHE ESTRELLADA"; // Cambia el texto del título
    } else {
        imagenOriginal.style.opacity = 1; // Muestra la imagen original
        imagenNueva.style.opacity = 0;   // Oculta la nueva imagen
        titulo.textContent = "¿HAY ALGO MÁS BELLO QUE LA NOCHE ESTRELLADA DE VAN GOGH?"; // Restaura el texto original
    }

    // Cambia el estado de la imagen visible
    imagenVisible = !imagenVisible;
});