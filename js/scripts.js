const projects = {
    project1: {
        title: "IT Academy webpage",
        images: [
            'img/it.png',
            'img/it2.png'
        ],
        description: "Recently we had given a project to make a IT Academy prototype website for our own school. I did this with 1 other person. Due to rules, I cannot give away more previews of it due to it being work in progress. No link to the repo yet as well, so have a melon dog.",
        tools: "HTML, CSS, JavaScript",
        repoLink: "https://i.imgur.com/1Rzqi6G.jpeg"
    },
    project2: {
        title: "Recipe browsing webpage 'Maitsed laual'",
        images: [
            'img/recipe.png',
            'img/recipe1.png',
            'img/recipe2.png',
            'img/recipe3.png',
            'img/recipe4.png'
        ],
        description: "Me and one of my classmates were tasked to create a project that would use relational databases to sae users info and bring content from the database onto the page. Basically, the user is able to create and log into his own account on our webpage. From there, they can see a random selection of recipes on the homepage or go to the recipes page to filter out and search for some. Clicking on recipes, there is a detailed description for them on how to cook said recipe, what ingrediants are needed and also a nice picture to go along with it. Depending on if the user made a account or not, they can mark the recipe as one of their favorites and also leave comments on various different recipes. All of it being saved into our database.",
        tools: "HTML, CSS, JavaScript, MySQL",
        repoLink: "https://github.com/StenKuusk/recipe-repo"
    },
    project3: {
        title: "Food storage app",
        images: [
            'img/toidukapp.png',
            'img/toidukapp1.png',
            'img/toidukapp2.png',
            'img/toidukapp3.png'
        ],
        description: "This project was made by me and 1 other person. The whole idea we got from UI/UX designers who made a prototype and we had a challenge to try to bring their prototype to life in 2 days. I was sick at the time so I couldn't do much. This is a app, that is supposed to be able to be used by everyone in VOCO. We have our local shared fridge where we put food that is about to expire for others to eat for free. This app is supposed to help us keep track of what is in the fridge, what is about to expire and what is already expired. It also has a feature to add your own food to the fridge and also take food from the fridge.",
        tools: "HTML, CSS, JavaScript, MySQL, React",
        repoLink: "https://github.com/StenKuusk/voco-toidukapp-app"
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
    document.getElementById('project-tools').innerText = `Tools: ${project.tools}`;
    document.getElementById('project-repo-link').href = project.repoLink;
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