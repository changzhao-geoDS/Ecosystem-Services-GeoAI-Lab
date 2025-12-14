// ============================================
// Mobile Navigation Toggle
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ============================================
// Navbar Scroll Effect
// ============================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ============================================
// Smooth Scrolling for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Animated Counter for Stats
// ============================================
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Intersection Observer for Stats Animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const target = parseInt(statNumber.getAttribute('data-target'));
            
            if (!statNumber.classList.contains('animated')) {
                statNumber.classList.add('animated');
                animateCounter(statNumber, target);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statsObserver.observe(card);
});

// ============================================
// Scroll Animations
// ============================================
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Animate research cards
document.querySelectorAll('.research-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    scrollObserver.observe(card);
});

// Animate team cards
document.querySelectorAll('.team-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    scrollObserver.observe(card);
});

// Animate publication items
document.querySelectorAll('.publication-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    scrollObserver.observe(item);
});

// Animate project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    scrollObserver.observe(card);
});

// Animate course cards
document.querySelectorAll('.course-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    scrollObserver.observe(card);
});


// ============================================
// Parallax Effect for Hero Section
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const particles = document.querySelector('.particles');
    
    if (hero && particles) {
        const rate = scrolled * 0.5;
        particles.style.transform = `translateY(${rate}px)`;
    }
});

// ============================================
// Active Navigation Link Highlighting
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const highlightNav = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNav);

// ============================================
// Add active state styling via CSS class
// ============================================
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-green);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ============================================
// Mosaic Background
// ============================================
const initMosaicBackground = () => {
    const mosaicContainer = document.getElementById('mosaicBackground');
    if (!mosaicContainer) return;

    // List of group picture images
    const images = [
        // Root level images
        'GroupPictures/20241017_091501.jpg',
        'GroupPictures/20241017_092226.jpg',
        'GroupPictures/20241017_092245.jpg',
        'GroupPictures/20241017_095331.jpg',
        'GroupPictures/20241017_095346(0).jpg',
        'GroupPictures/20241017_095353.jpg',
        'GroupPictures/IMG_0979.JPEG',
        'GroupPictures/IMG_0992.JPEG',
        'GroupPictures/IMG_0999.JPEG',
        'GroupPictures/IMG_1005.JPEG',
        'GroupPictures/IMG_1006.JPEG',
        'GroupPictures/IMG_1016.JPG',
        'GroupPictures/IMG_1026.JPG',
        'GroupPictures/IMG_1062.JPEG',
        'GroupPictures/IMG_5565.JPG',
        'GroupPictures/IMG_5596.JPG',
        'GroupPictures/IMG_5598.JPG',
        'GroupPictures/IMG_5606.JPG',

    ];

    // Shuffle array for randomness
    const shuffledImages = images.sort(() => Math.random() - 0.5);

    // Create mosaic items
    shuffledImages.forEach((imageSrc, index) => {
        const mosaicItem = document.createElement('div');
        mosaicItem.className = 'mosaic-item';
        
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = 'Lab Group Photo';
        img.loading = 'lazy';
        
        mosaicItem.appendChild(img);
        mosaicContainer.appendChild(mosaicItem);
    });
};

// ============================================
// Show More News
// ============================================
const initShowMoreNews = () => {
    const showMoreNewsBtn = document.getElementById('showMoreNews');
    if (showMoreNewsBtn) {
        showMoreNewsBtn.addEventListener('click', () => {
            const hiddenNews = document.querySelectorAll('.news-item-hidden');
            hiddenNews.forEach(item => {
                item.style.display = 'block';
                item.classList.remove('news-item-hidden');
            });
            showMoreNewsBtn.style.display = 'none';
        });
    }
};

// ============================================
// Show More Publications
// ============================================
const initShowMorePublications = () => {
    const showMorePublicationsBtn = document.getElementById('showMorePublications');
    if (showMorePublicationsBtn) {
        showMorePublicationsBtn.addEventListener('click', () => {
            const hiddenPubs = document.querySelectorAll('.publication-item-hidden');
            hiddenPubs.forEach(item => {
                item.style.display = 'grid';
                item.classList.remove('publication-item-hidden');
            });
            showMorePublicationsBtn.style.display = 'none';
        });
    }
};

// ============================================
// Initialize on page load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mosaic background
    initMosaicBackground();
    
    // Initialize show more buttons
    initShowMoreNews();
    initShowMorePublications();
    
    // Add fade-in animation to page
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

