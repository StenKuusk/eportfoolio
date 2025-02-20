const projects = {
    project1: {
        title: "IT Academy webpage",
        images: [
            'img/it.png',
            'img/it2.png'
        ],
        description: "Recently we had given a project to make a IT Academy prototype website for our own school. I did this with 1 other person. Due to rules, I cannot give away more previews of it due to it being work in progress."
    },
    project2: {
        title: "Another Project",
        images: [
            'img/it.png',
            'img/it2.png'
        ],
        description: "This is another project description. It provides an overview of what the project is about and its key features."
    }
    // Lisa rohkem projekte siia
};

let currentImageIndex = 0;

function openProject(projectId) {
    const project = projects[projectId];
    document.getElementById('project-title').innerText = project.title;
    const projectImages = document.getElementById('project-images');
    projectImages.innerHTML = '';
    project.images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.classList.add('gallery-image');
        if (index === 0) {
            img.classList.add('active'); // Kuvame esimese pildi
        }
        projectImages.appendChild(img);
    });
    currentImageIndex = 0;
    document.getElementById('project-description').innerText = project.description;
    document.getElementById('project-modal').style.display = 'block';
}

function closeProject() {
    document.getElementById('project-modal').style.display = 'none';
}

function changeModalImage(direction) {
    const projectImages = document.querySelectorAll('#project-images .gallery-image');
    projectImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + direction + projectImages.length) % projectImages.length;
    projectImages[currentImageIndex].classList.add('active');
}

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

document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('.image-container');

    imageContainer.addEventListener('mouseover', () => {
        imageContainer.style.animation = 'bounce 2s infinite';
    });

    imageContainer.addEventListener('mouseout', () => {
        imageContainer.style.animation = 'bounce-out 1s';
        setTimeout(() => {
            imageContainer.style.animation = '';
        }, 1000);
    });
});