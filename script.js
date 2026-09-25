// 1. Desplazamiento suave para los enlaces del menú
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste modificado para la barra superior
                behavior: 'smooth'
            });
        }
    });
});

// 2. Animación de aparición al hacer Scroll (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('seccion-visible');
        }
    });
}, {
    threshold: 0.15 // Se activa cuando el 15% del elemento es visible en pantalla
});

// Seleccionamos todo lo que queremos animar
const elementosAAnimar = document.querySelectorAll('section, .tarjeta-metodologia, .proyecto, .skill-card');

// A todos los elementos seleccionados les agregamos la clase oculta y los observamos
elementosAAnimar.forEach((el) => {
    el.classList.add('seccion-oculta');
    observer.observe(el);
});