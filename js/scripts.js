let slideIndex = 0;
const slides = [
    'img/it.png',
    'img/it2.png'
];

function showSlide(index) {
    const galleryImage = document.querySelector('.gallery-image');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    galleryImage.src = slides[slideIndex];
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});

document.addEventListener('DOMContentLoaded', () => {
    const hoverTextElements = document.querySelectorAll('.hover-text');

    hoverTextElements.forEach(element => {
        const text = element.innerText;
        element.innerHTML = '';

        text.split(' ').forEach(word => {
            const wordSpan = document.createElement('span');
            wordSpan.style.display = 'inline-block';
            word.split('').forEach(char => {
                const charSpan = document.createElement('span');
                charSpan.innerText = char;
                wordSpan.appendChild(charSpan);
            });
            element.appendChild(wordSpan);
            element.innerHTML += ' '; // Lisame tühiku sõnade vahele
        });
    });

    if (window.innerWidth > 768) { // Ripple efekt ainult suurematel ekraanidel
        document.querySelector("nav").addEventListener("click", function (e) {
            const ripple = document.createElement("span");
            ripple.classList.add("ripple");
        
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
        
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
        
            this.appendChild(ripple);
        
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
    
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function openLightbox(src) {
    document.getElementById('lightbox').style.display = 'block';
    document.getElementById('lightbox-img').src = src;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}