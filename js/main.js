// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle Navigation
    navLinks.classList.toggle('nav-active');
    navLinks.style.display = navLinks.classList.contains('nav-active') ? 'flex' : '';

    // Animate Links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Hamburger Animation
    hamburger.classList.toggle('toggle');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (navLinks.classList.contains('nav-active')) {
                hamburger.click();
            }
        }
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Here you would typically send the data to a server
        console.log('Form submitted:', data);

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');

        // Clear form
        this.reset();
    });
}

// Initialize sections and elements
document.addEventListener('DOMContentLoaded', () => {
    // Make all sections visible by default
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'none';
    });

    // Make all skill items visible
    document.querySelectorAll('.skill-item').forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'none';
    });

    // Make all project cards visible
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'none';
    });
});

// Update active navigation link based on scroll position
window.addEventListener('scroll', () => {
    let current = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
    });

    // Add slide-up animation to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('slide-up');
    });

    // Add fade-in animation to skill items
    document.querySelectorAll('.skill-item').forEach(skill => {
        skill.classList.add('fade-in');
    });
});

// Add some CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .nav-active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        right: 0;
        top: 100%;
        background: var(--background);
        width: 100%;
        padding: 2rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .toggle span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .toggle span:nth-child(2) {
        opacity: 0;
    }

    .toggle span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .fade-in.animate {
        opacity: 1;
        transform: translateY(0);
    }

    .slide-up {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .slide-up.animate {
        opacity: 1;
        transform: translateY(0);
    }

    .nav-links a.active {
        color: var(--primary-color);
    }
`;
document.head.appendChild(style); 

// Send Email
function sendEmail(name, message) {
    let mailto = "mailto:vivekyadav138001@gmail.com?subject=New Message from " + name + "&body=" + message;
    window.location.href = mailto;
}