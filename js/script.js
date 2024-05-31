function manejarScroll() {
  var elementos = document.querySelectorAll('.contenido');
  elementos.forEach(function(elemento) {
      if (estaEnPantalla(elemento)) {
          elemento.classList.add('aparecer');
      }
  });
}

function estaEnPantalla(elemento) {
  var rect = elemento.getBoundingClientRect();
  var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  return (rect.top <= windowHeight);
}

window.addEventListener('scroll', manejarScroll);

manejarScroll();

document.addEventListener('DOMContentLoaded', function() {
  var cursos = document.querySelectorAll('.curso');
  
  function revisarScroll() {
      cursos.forEach(function(curso) {
          if (estaEnPantalla(curso)) {
              curso.classList.add('visible');
          }
      });
  }
  
  function estaEnPantalla(elemento) {
      var posicion = elemento.getBoundingClientRect();
      return (
          posicion.top >= 0 &&
          posicion.left >= 0 &&
          posicion.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          posicion.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }
  
  revisarScroll();
  window.addEventListener('scroll', revisarScroll);
});

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[980,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:true,
        navigationText:["<",">"],
        autoPlay:true
    });
});

function initMap() {
    // Coordenadas del lugar
    var myLatLng = {lat: 40.7128, lng: -74.0060}; // Por ejemplo, Nueva York

    // Crear un mapa en el elemento con id "map"
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 12 // Nivel de zoom inicial
    });

    // Crear un marcador en la ubicación
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Ubicación de la empresa'
    });
}
