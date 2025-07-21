function abrirModal(id) {
  document.getElementById(id).style.display = 'block';
}

function cerrarModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Carrusel 2024
let imagenes2024 = [];
let textos2024 = {};
let indice2024 = 0;

for (let i = 1; i <= 100; i++) {
  imagenes2024.push(`images/2024_${i}.jpg`);
}

fetch("./2024.json")
  .then(res => res.json())
  .then(data => {
    textos2024 = data;
    actualizarSlide2024();
  });

function moverSlide(direccion, idCarrusel) {
  indice2024 += direccion;
  if (indice2024 < 0) indice2024 = imagenes2024.length - 1;
  if (indice2024 >= imagenes2024.length) indice2024 = 0;
  actualizarSlide2024();
}

function actualizarSlide2024() {
  const nombreImg = imagenes2024[indice2024];
  document.getElementById("carousel2024").src = nombreImg;

  const texto = textos2024[nombreImg] || {
    titulo: "Sin título",
    descripcion: "No se ha asignado una descripción para esta imagen."
  };

  document.getElementById("titulo2024").textContent = texto.titulo;
  document.getElementById("descripcion2024").textContent = texto.descripcion;
}

// Carrusel 2025
let imagenes2025 = [];
let textos2025 = {};
let indice2025 = 0;

for (let i = 1; i <= 100; i++) {
  imagenes2025.push(`images/2025_${i}.jpg`);
}

fetch("./2025.json")
  .then(res => res.json())
  .then(data => {
    textos2025 = data;
    actualizarSlide2025();
  });

function moverSlide25(direccion, idCarrusel) {
  indice2025 += direccion;
  if (indice2025 < 0) indice2025 = imagenes2025.length - 1;
  if (indice2025 >= imagenes2025.length) indice2025 = 0;
  actualizarSlide2025();
}

function actualizarSlide2025() {
  const nombreImg = imagenes2025[indice2025];
  document.getElementById("carousel2025").src = nombreImg;

  const texto = textos2025[nombreImg] || {
    titulo: "Sin título",
    descripcion: "No se ha asignado una descripción para esta imagen."
  };

  document.getElementById("titulo2025").textContent = texto.titulo;
  document.getElementById("descripcion2025").textContent = texto.descripcion;
}
