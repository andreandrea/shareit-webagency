// GESTIONE MENU
const logoTrigger = document.getElementById('logoTrigger');
const menuContainer = document.getElementById('menuContainer');
const menuOverlay = document.getElementById('menuOverlay');
let isMenuOpen = false;

function toggleMenu(show) {
    isMenuOpen = show;
    menuContainer.classList.toggle('active', show);
    menuOverlay.classList.toggle('active', show);
    document.body.style.overflow = show ? 'hidden' : '';
}

logoTrigger.addEventListener('click', () => toggleMenu(!isMenuOpen));
menuOverlay.addEventListener('click', () => toggleMenu(false));

// GESTIONE CAROUSEL
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const carousel = document.querySelector('.carousel');

// Creazione dinamica dei pallini (dots)
const dotsContainer = document.querySelector('.dots');
slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        currentSlide = i;
        updateCarousel();
    });
    dotsContainer.appendChild(dot);
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
}

function moveSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    updateCarousel();
}

// Supporto tastiera
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') moveSlide(-1);
    if (e.key === 'ArrowRight') moveSlide(1);
    if (e.key === 'Escape' && isMenuOpen) toggleMenu(false);
});