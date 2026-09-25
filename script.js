// 1. Desplazamiento suave para los enlaces del menú
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 2. Animación de aparición al hacer Scroll (Intersection Observer optimizado)
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('seccion-visible');
            // Esto le dice al celular que deje de vigilar el elemento una vez que ya apareció
            observer.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.02, // Reacciona rapidísimo en celular
    rootMargin: "0px 0px -30px 0px"
});

// Seleccionamos todo lo que queremos animar
const elementosAAnimar = document.querySelectorAll('section, .tarjeta-metodologia, .proyecto, .skill-card');

// A todos les agregamos la clase oculta inicialmente y los observamos
elementosAAnimar.forEach((el) => {
    el.classList.add('seccion-oculta');
    observer.observe(el);
});