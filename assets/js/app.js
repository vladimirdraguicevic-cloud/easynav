// Carrusel EasyNav - Sin conflictos con Bootstrap
document.addEventListener('DOMContentLoaded', function() {
  const carouselTrack = document.getElementById('carouselTrack');
  const playPauseBtn = document.getElementById('playPauseBtn');
  let isPlaying = true;

  // Inicializar el carrusel
  if (carouselTrack) {
    console.log('Carrusel EasyNav encontrado, iniciando animación...');
    carouselTrack.style.animation = 'easynav-scroll 40s linear infinite';
    
    // Pausar al hacer hover
    carouselTrack.addEventListener('mouseenter', function() {
      if (isPlaying) {
        carouselTrack.style.animationPlayState = 'paused';
      }
    });
    
    // Reanudar al quitar el hover
    carouselTrack.addEventListener('mouseleave', function() {
      if (isPlaying) {
        carouselTrack.style.animationPlayState = 'running';
      }
    });
  } else {
    console.log('No se encontró el elemento carouselTrack');
  }

  // Funciones globales para los controles
  window.toggleCarousel = function() {
    if (!carouselTrack || !playPauseBtn) {
      console.log('Elementos del carrusel no encontrados');
      return;
    }
    
    if (isPlaying) {
      carouselTrack.style.animationPlayState = 'paused';
      playPauseBtn.innerHTML = '<i class="bi bi-play-fill"></i>';
      isPlaying = false;
      console.log('Carrusel pausado');
    } else {
      carouselTrack.style.animationPlayState = 'running';
      playPauseBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
      isPlaying = true;
      console.log('Carrusel reanudado');
    }
  };

  window.resetCarousel = function() {
    if (!carouselTrack || !playPauseBtn) {
      console.log('Elementos del carrusel no encontrados para reset');
      return;
    }
    
    // Reiniciar animación
    carouselTrack.style.animation = 'none';
    setTimeout(() => {
      carouselTrack.style.animation = 'easynav-scroll 40s linear infinite';
    }, 10);
    
    // Actualizar estado del botón
    playPauseBtn.innerHTML = '<i class="bi bi-pause-fill"></i>';
    isPlaying = true;
    console.log('Carrusel EasyNav reiniciado');
  };

  // Actualizar año en footer si existe
  const yearElement = document.getElementById('y');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});