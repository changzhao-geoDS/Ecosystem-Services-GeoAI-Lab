// ============================================
// Mobile Navigation Toggle
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

// Create overlay element
let navOverlay = null;
if (window.innerWidth <= 768) {
    navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);
}

if (hamburger && navMenu) {
    const toggleMenu = (isOpen) => {
        if (isOpen) {
            navMenu.classList.add('active');
            hamburger.classList.add('active');
            body.style.overflow = 'hidden';
            if (navOverlay) navOverlay.classList.add('active');
        } else {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = '';
            if (navOverlay) navOverlay.classList.remove('active');
        }
    };

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = !navMenu.classList.contains('active');
        toggleMenu(isOpen);
    });

    // Close menu when clicking on overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', () => {
            toggleMenu(false);
        });
    }

    // Close menu when clicking on a link (but don't prevent tab switching)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMenu(false);
            }
        });
    });

    // Close menu on window resize if it becomes desktop size
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            toggleMenu(false);
            if (navOverlay && navOverlay.parentNode) {
                navOverlay.parentNode.removeChild(navOverlay);
            }
        } else if (window.innerWidth <= 768 && !navOverlay) {
            navOverlay = document.createElement('div');
            navOverlay.className = 'nav-overlay';
            document.body.appendChild(navOverlay);
            navOverlay.addEventListener('click', () => {
                toggleMenu(false);
            });
        }
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
// Tab Switching Functionality
// ============================================
const initTabs = () => {
    const tabLinks = document.querySelectorAll('.nav-link[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetTab = link.getAttribute('data-tab');
            
            // Remove active class from all links and contents
            tabLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked link and corresponding content
            link.classList.add('active');
            const targetContent = document.getElementById(`tab-${targetTab}`);
            if (targetContent) {
                targetContent.classList.add('active');
                // Scroll to top of page
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // Handle buttons with data-tab attribute
    document.querySelectorAll('[data-tab]').forEach(button => {
        if (button.tagName === 'A' || button.tagName === 'BUTTON') {
            button.addEventListener('click', (e) => {
                const targetTab = button.getAttribute('data-tab');
                const targetLink = document.querySelector(`.nav-link[data-tab="${targetTab}"]`);
                if (targetLink) {
                    e.preventDefault();
                    targetLink.click();
                }
            });
        }
    });
};

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

// Preserve native image dimensions for sharper downscaling from full-resolution files
function setTeamImageIntrinsicSize(img) {
    if (img.naturalWidth > 0) {
        img.setAttribute('width', img.naturalWidth);
        img.setAttribute('height', img.naturalHeight);
    }
}

document.querySelectorAll('.team-card .team-image img').forEach(img => {
    setTeamImageIntrinsicSize(img);
    if (!img.complete) {
        img.addEventListener('load', () => setTeamImageIntrinsicSize(img), { once: true });
    }
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
        // New images
        'GroupPictures/20251103_122339.jpg',
        'GroupPictures/Photo Dec 16 2025, 12 55 25 PM.jpg',
        'GroupPictures/Photo Dec 16 2025, 8 52 00 AM.jpg',
        'GroupPictures/Photo Dec 17 2025, 8 21 08 AM.jpg',
        'GroupPictures/Photo Dec 17 2025, 8 22 37 AM.jpg',
        'GroupPictures/Photo Dec 17 2025, 8 24 44 AM.jpg',
        'GroupPictures/Photo Dec 18 2025, 12 36 07 PM.jpg',
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
    // Initialize tabs
    initTabs();
    
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

