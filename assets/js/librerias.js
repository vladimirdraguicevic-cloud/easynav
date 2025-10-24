// Script para actualizar el año en el footer
document.getElementById('y').textContent = new Date().getFullYear();

// Variables para el carrusel
let isCarouselPaused = false;
const carouselTrack = document.getElementById('carouselTrack');
const playPauseBtn = document.getElementById('playPauseBtn');

// Función para pausar/reanudar el carrusel
function toggleCarousel() {
    if (isCarouselPaused) {
        carouselTrack.style.animationPlayState = 'running';
        playPauseBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
        isCarouselPaused = false;
    } else {
        carouselTrack.style.animationPlayState = 'paused';
        playPauseBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
        isCarouselPaused = true;
    }
}

// Función para reiniciar el carrusel
function resetCarousel() {
    carouselTrack.style.animation = 'none';
    setTimeout(() => {
        carouselTrack.style.animation = 'scroll 35s linear infinite';
        if (isCarouselPaused) {
            carouselTrack.style.animationPlayState = 'paused';
        }
    }, 10);
}

// Pausar automáticamente cuando el usuario pasa el mouse sobre el carrusel
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', function() {
            if (!isCarouselPaused) {
                carouselTrack.style.animationPlayState = 'paused';
            }
        });
        
        carouselContainer.addEventListener('mouseleave', function() {
            if (!isCarouselPaused) {
                carouselTrack.style.animationPlayState = 'running';
            }
        });
    }
});