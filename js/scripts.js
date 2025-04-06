document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada');
});


function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show"); // Agrega o quita la clase 'show'
}