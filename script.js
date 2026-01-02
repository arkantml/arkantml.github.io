
const textElement = document.getElementById('typing-text');
const words = ["Canva Designer", "Frontend Developer", "Visual Creator"];
let wordIndex = 0; let charIndex = 0; let isDeleting = false; let typeSpeed = 100;
const scriptURL = 'https://script.google.com/macros/s/AKfycbyVwFB2IUdjOqZ8iOcX11ctOzJMuTMiX0TX45MkvQKe8NvGPJrz9HW1GvH9OhmsvuE/exec'
const form = document.forms['submit-to-google-sheet']



function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--; typeSpeed = 50;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++; typeSpeed = 100;
    }
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true; typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false; wordIndex = (wordIndex + 1) % words.length; typeSpeed = 500;
    }
    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    type();
    document.getElementById('year').textContent = new Date().getFullYear();
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('active'); }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const mobileMenu = document.getElementById('mobile-menu');
const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden'); mobileMenu.classList.toggle('flex'); document.body.classList.toggle('overflow-hidden');
}
document.getElementById('mobile-menu-btn').addEventListener('click', toggleMenu);
document.getElementById('close-menu-btn').addEventListener('click', toggleMenu);
mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', toggleMenu));
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})