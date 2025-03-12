const projects = {
    project1: {
        title: "IT Academy webpage",
        images: [
            'img/it.png',
            'img/it1.png',
            'img/it2.png',
            'img/it3.png',
            'img/it4.png'
        ],
        description: "Recently we had given a project to make a IT Academy prototype website for our own school. I did this with 1 other person. This project is a webpage for IT Academy, featuring a homepage, specialties, how to apply as an intern, contact info and more to be implemented.",
        tools: "HTML, CSS, JavaScript",
        repoLink: "https://github.com/StenKuusk/IT-akadeemia-leht",
        siteLink: "https://itleht.vercel.app"
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
        description: "Me and one of my classmates were tasked to create a project that would use relational databases to save users info and bring content from the database onto the page. Basically, the user is able to create and log into his own account on our webpage. From there, they can see a random selection of recipes on the homepage or go to the recipes page to filter out and search for some. Clicking on recipes, there is a detailed description for them on how to cook said recipe, what ingrediants are needed and also a nice picture to go along with it. Depending on if the user made a account or not, they can mark the recipe as one of their favorites and also leave comments on various different recipes. All of it being saved into our database.",
        tools: "HTML, CSS, JavaScript, MySQL",
        repoLink: "https://github.com/StenKuusk/recipe-repo"
    },
    project3: {
        title: "Solitaire game",
        images: [
            'img/solitaire.png',
            'img/solitaire1.png',
            'img/solitaire2.png',
            'img/solitaire3.png',
            'img/solitaire4.png'
        ],
        description: "This project was made solely by me. I was tasked to make something with a authentication system and I was interested in finally making my own game so I thought about a card game. Can't go wrong right? Wrong, it took me a while to get back to work on it cause I was stuck. Once I did, I finally fixed the issue with card functionalities, win conditions (sort of) and style. You can log in or register a account and it will bring you to the homepage. From there, you can press a button to play solitaire, taking you to a seperate page. Solitaire is solitaire, it's self-explanatory. You can move cards around, stack them on top of each other and try to win the game. If you win, it will show a win screen and if you get stuck, well uhh... you can refresh the page to be given a new card set to work with.",
        tools: "HTML, CSS, JavaScript, MySQL, React",
        repoLink: "https://github.com/StenKuusk/hajus_sisselogimise_leht"
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
    
    if (project.siteLink) {
        const siteLinkElement = document.createElement('a');
        siteLinkElement.href = project.siteLink;
        siteLinkElement.target = "_blank";
        siteLinkElement.classList.add('hover-text');
        siteLinkElement.innerText = "View Project Site";
        document.getElementById('project-description').appendChild(document.createElement('br'));
        document.getElementById('project-description').appendChild(siteLinkElement);
    }

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