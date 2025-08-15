// ----- MENÚ MÓVIL -----
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ----- CONTADOR -----
function animateCounter(id, target) {
    const counter = document.getElementById(id);
    let count = 0;
    const speed = Math.ceil(target / 100); // velocidad de incremento
    const updateCounter = setInterval(() => {
        count += speed;
        if (count >= target) {
            count = target;
            clearInterval(updateCounter);
        }
        counter.textContent = count;
    }, 20);
}

// Activar contador cuando aparezca en pantalla
const counterSection = document.querySelector('.counter-section');
const counters = document.querySelectorAll('.counter');

let counterStarted = false;
window.addEventListener('scroll', () => {
    const sectionTop = counterSection.offsetTop - window.innerHeight + 100;
    if (window.scrollY > sectionTop && !counterStarted) {
        animateCounter('counter1', 250);
        animateCounter('counter2', 120);
        animateCounter('counter3', 75);
        counterStarted = true;
    }
});

// ----- SLIDER DE TESTIMONIOS -----
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach(t => t.classList.remove('active'));
    testimonials[index].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentTestimonial);
});

document.querySelector('.next').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
});

// Mostrar primero
showTestimonial(currentTestimonial);

// ----- VALIDACIÓN DE FORMULARIO -----
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');

    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert('Por favor, ingresa un email válido.');
        return;
    }

    alert('Formulario enviado correctamente.');
    form.reset();
});
