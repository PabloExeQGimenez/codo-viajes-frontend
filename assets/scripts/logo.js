document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("logo-img").style.opacity = "0";
    document.getElementById("logo-text").style.opacity = "1";
  }, 3000); // Cambia 3000 por el tiempo de retraso en milisegundos que desees
});

console.log("funciona")