let menu = document.querySelector(".menu");
let flag = false;
let contador = 0;

function iniciar() {
  var imagenes = document.querySelectorAll("#caja-imagenes img");
  soltar = document.getElementById("foto-vacia");
  soltar2 = document.getElementById("foto-vacia2");
  soltar3 = document.getElementById("foto-vacia3");

  for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("dragstart", arrastrado, false);
  }

  soltar.addEventListener("dragenter", function(e) {
    e.preventDefault();
  }, false);
  soltar.addEventListener("dragover", function(e) {
    e.preventDefault();
  }, false);

  soltar.addEventListener("drop", soltado, false);

  soltar2.addEventListener("dragenter", function(e) {
    e.preventDefault();
  }, false);
  soltar2.addEventListener("dragover", function(e) {
    e.preventDefault();
  }, false);
  soltar2.addEventListener("drop", soltado, false);

  soltar3.addEventListener("dragenter", function(e) {
    e.preventDefault();
  }, false);
  soltar3.addEventListener("dragover", function(e) {
    e.preventDefault();
  }, false);
  soltar3.addEventListener("drop", soltado, false);
}

function arrastrado(e) {
  elemento = e.target;
  e.dataTransfer.setData("Text", elemento.getAttribute('id'));
}

async function soltado(e) {
  e.preventDefault();
  let id = e.dataTransfer.getData("Text");
  let imagen = document.getElementById(id);
  e.target.innerHTML = '<img src="' + imagen.src + '" height="350px" width="250px">';
  contador++;

  // mensaje de agradecimiento
  if (contador === 3) {
    mostrarMensaje(true); 
  }
}

function reinicio() {
  window.location.reload();
}

function mostrarMensaje(completo) {
  let mensaje = document.createElement("div");
  mensaje.classList.add("mensaje");

  if (completo) {
    mensaje.textContent = "¡Gracias por jugar!";
    mensaje.classList.add("mensaje-felicitaciones");
 
  }

  document.body.appendChild(mensaje);
}

iniciar();