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

    // Lisame veeefekti navbari jaoks
    const navbar = document.querySelector('nav');
    navbar.addEventListener('mousemove', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${e.clientX - navbar.offsetLeft}px`;
        ripple.style.top = `${e.clientY - navbar.offsetTop}px`;
        navbar.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});