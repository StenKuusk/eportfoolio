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
        description: "We were given a project to create an IT Academy prototype website for our own school. I worked on this with one other person. This project is a webpage for IT Academy, featuring a homepage, specialties, how to apply as an intern, contact info and more to be implemented.",
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
        description: "My classmate and I were tasked to create a project that would use relational databases to save user information and display content from the database on the page. Users can create and log into their own accounts on our webpage. From there, they can see a random selection of recipes on the homepage or go to the recipes page to filter and search for specific ones. Clicking on recipes shows a detailed description of how to cook the recipe, what ingredients are needed, and includes a nice picture. Depending on whether the user has an account or not, they can mark recipes as favorites and leave comments on various recipes. All of this is saved in our database.",
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
        description: "This project was made solely by me. I was tasked to create something with an authentication system and I was interested in finally making my own game, so I thought about a card game. Can't go wrong, right? Wrong! It took me a while to get back to work on it because I was stuck. Once I did, I finally fixed the issues with card functionalities, win conditions (sort of), and styling. You can log in or register an account and it will take you to the homepage. From there, you can press a button to play solitaire, taking you to a separate page. Solitaire is solitaire - it's self-explanatory. You can move cards around, stack them on top of each other, and try to win the game. If you win, it will show a win screen, and if you get stuck, well... you can refresh the page to get a new card set to work with.",
        tools: "HTML, CSS, JavaScript, MySQL, React",
        repoLink: "https://github.com/StenKuusk/hajus_sisselogimise_leht"
    },
    project4: {
        title: "Internship platform for students",
        images: [
            'img/praktikaplatvorm.png',
            'img/praktikaplatvorm1.png',
            'img/praktikaplatvorm2.png',
            'img/praktikaplatvorm3.png',
            'img/praktikaplatvorm4.png'
        ],
        description: "This project was created solely by me and is heavily work-in-progress right now. It's my upcoming final project to help finish off my studies. My idea for this started with my first search for an internship position in order to pass and get allowed passage to the next year of studies for my career. Searching for an internship position was tough and tedious - many people are actively searching for positions, and even those with less than 2 months left before passing don't get their first pick at a company. Since that was the case, I thought about creating a platform that would allow students to search for internship positions and apply to them, which is exclusive to students and companies who want to hire them. From there, the company can view the applications and choose the best candidate for the position. There is also a profile page for students where they can view their applications and their progress. I am planning more changes soon, more functions, and more pages to make the platform more user-friendly and efficient.",
        tools: "HTML, CSS, JavaScript, MySQL, React",
        privateLink: "No peeking!"
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
    
    if (project.privateLink) {
        document.getElementById('project-repo-link').innerText = project.privateLink;
        document.getElementById('project-repo-link').href = "#";
        document.getElementById('project-repo-link').style.pointerEvents = "none";
    } else {
        document.getElementById('project-repo-link').href = project.repoLink;
        document.getElementById('project-repo-link').innerText = "View Project on GitHub";
        document.getElementById('project-repo-link').style.pointerEvents = "auto";
    }
    
    // Eemaldame vanad lingid, kui neid on
    const existingSiteLink = document.getElementById('project-site-link');
    if (existingSiteLink) {
        existingSiteLink.remove();
    }
    
    if (project.siteLink) {
        const siteLinkElement = document.createElement('a');
        siteLinkElement.id = 'project-site-link';
        siteLinkElement.href = project.siteLink;
        siteLinkElement.target = "_blank";
        siteLinkElement.innerText = "View Project Site";
        
        // Lisame lingi modal'i lõppu
        const modalContent = document.querySelector('.modal-content');
        modalContent.appendChild(siteLinkElement);
    }

    document.getElementById('project-modal').style.display = 'block';
}

function closeProject() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.style.display = 'none';
    }
    
    // Eemaldame ka site linki, kui see eksisteerib
    const existingSiteLink = document.getElementById('project-site-link');
    if (existingSiteLink) {
        existingSiteLink.remove();
    }
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
                charSpan.style.transition = 'transform 0.3s ease, color 0.3s ease';
                wordSpan.appendChild(charSpan);
            });
            element.appendChild(wordSpan);
            element.innerHTML += ' '; // Lisame tühiku sõnade vahele
        });
    });

    // Lisame scroll animatsioonid
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate sections on scroll
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
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
        // Lisame suvalise emoji
        const emojis = ['👋', '🎉', '🚀', '💻', '🔥', '⭐', '🎯', '💪'];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        imageContainer.setAttribute('data-emoji', randomEmoji);
    });

    imageContainer.addEventListener('mouseout', () => {
        imageContainer.style.animation = 'bounce-out 1s';
        setTimeout(() => {
            imageContainer.style.animation = '';
        }, 1000);
    });

    // Lisame konfetti efekti projekte kaartidele
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            createConfetti(item);
        });
    });

    // Lisame suvalise tausta efekti sektsioonidele
    document.querySelectorAll('section').forEach(section => {
        section.addEventListener('mouseenter', () => {
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            section.style.background = `linear-gradient(135deg, ${randomColor}20, transparent)`;
        });

        section.addEventListener('mouseleave', () => {
            setTimeout(() => {
                section.style.background = '';
            }, 1000);
        });
    });
    
    // Lisame ESC klahvi funktsionaalsuse modal'i sulgemiseks
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const modal = document.getElementById('project-modal');
            if (modal && modal.style.display === 'block') {
                closeProject();
            }
        }
    });
    
    // Lisame klikk modal'i taustal sulgemiseks
    document.getElementById('project-modal').addEventListener('click', (event) => {
        if (event.target.id === 'project-modal') {
            closeProject();
        }
    });
});

// Konfetti funktsioon
function createConfetti(element) {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = rect.left + Math.random() * rect.width + 'px';
        confetti.style.top = rect.top + 'px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Lisame CSS animatsiooni konfetti jaoks
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);