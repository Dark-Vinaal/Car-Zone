const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
let current = 0;
let loopInterval;

function showSlide(idx) {
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
}

function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
    resetLoop();
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
    resetLoop();
}

leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

function resetLoop() {
    clearInterval(loopInterval);
    loopInterval = setInterval(nextSlide, 3500); // change every 3.5s
}
resetLoop();
