// Sample certification data - Replace with your actual certifications
const certifications = [
    {
        id: 1,
        title: "EXAM P",
        organization: "SOA",
        date: "2022-03-21",
        description: "Probability exam covering fundamental probability tools for quantitatively assessing risk.",
        category: "actuarial",
        tags: ["Probability", "Actuarial"],
        verificationUrl: "#"
    },
    {
        id: 2,
        title: "EXAM FM",
        organization: "SOA",
        date: "2022-06-14",
        description: "Financial Mathematics exam covering interest theory and financial instruments.",
        category: "actuarial",
        tags: ["Financial Mathematics", "Actuarial"],
        verificationUrl: "#"
    },
    {
        id: 3,
        title: "MAS-1",
        organization: "CAS",
        date: "2022-11-02",
        description: "Modern Actuarial Statistics I exam covering probability and statistics.",
        category: "actuarial",
        tags: ["Statistics", "Actuarial"],
        verificationUrl: "#"
    },
    {
        id: 4,
        title: "MAS-2",
        organization: "CAS",
        date: "2023-05-10",
        description: "Modern Actuarial Statistics II exam covering advanced statistics and modeling.",
        category: "actuarial",
        tags: ["Advanced Statistics", "Actuarial"],
        verificationUrl: "#"
    },
    {
        id: 5,
        title: "Exam 5",
        organization: "CAS",
        date: "2025-04-21",
        description: "Exam 5 covering advanced actuarial topics.",
        category: "actuarial",
        tags: ["Advanced Actuarial"],
        verificationUrl: "#"
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const certificationsGrid = document.getElementById('certificationsGrid');
const timelineContainer = document.getElementById('timelineContainer');
const filterBtns = document.querySelectorAll('.filter-btn');
const totalCertsElement = document.getElementById('totalCerts');
const totalYearsElement = document.getElementById('totalYears');
const activeCertsElement = document.getElementById('activeCerts');
const contactForm = document.getElementById('contactForm');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const offsetTop = targetSection.offsetTop - 80;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

// Initialize stats
function initializeStats() {
    const totalCerts = certifications.length;
    // Calculate years of learning (from earliest to latest certification)
    const dates = certifications.map(cert => new Date(cert.date));
    const earliestDate = new Date(Math.min(...dates));
    const latestDate = new Date(Math.max(...dates));
    const yearsOfLearning = Math.ceil((latestDate - earliestDate) / (1000 * 60 * 60 * 24 * 365));
    animateCounter(totalCertsElement, totalCerts);
    animateCounter(totalYearsElement, yearsOfLearning);
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 30);
}

// Render certifications
function renderCertifications(filter = 'all') {
    const filteredCerts = filter === 'all' 
        ? certifications 
        : certifications.filter(cert => cert.category === filter);
    
    certificationsGrid.innerHTML = '';
    
    filteredCerts.forEach(cert => {
        const certCard = createCertificationCard(cert);
        certificationsGrid.appendChild(certCard);
    });
}

function createCertificationCard(cert) {
    const card = document.createElement('div');
    card.className = 'cert-card fade-in-up';
    card.innerHTML = `
        <div class="cert-header">
            <div>
                <h3 class="cert-title">${cert.title}</h3>
                <p class="cert-organization">${cert.organization}</p>
            </div>
            <span class="cert-date">${formatDate(cert.date)}</span>
        </div>
        <p class="cert-description">${cert.description}</p>
        <div class="cert-tags">
            ${cert.tags.map(tag => `<span class="cert-tag">${tag}</span>`).join('')}
        </div>
    `;
    card.addEventListener('click', () => {
        if (cert.verificationUrl) {
            window.open(cert.verificationUrl, '_blank');
        }
    });
    return card;
}

// Render timeline
function renderTimeline() {
    const sortedCerts = [...certifications].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    timelineContainer.innerHTML = '';
    
    sortedCerts.forEach(cert => {
        const timelineItem = createTimelineItem(cert);
        timelineContainer.appendChild(timelineItem);
    });
}

function createTimelineItem(cert) {
    const item = document.createElement('div');
    item.className = 'timeline-item fade-in-up';
    
    item.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
            <div class="timeline-date">${formatDate(cert.date)}</div>
            <h3 class="timeline-title">${cert.title}</h3>
            <p class="timeline-org">${cert.organization}</p>
            <p>${cert.description}</p>
        </div>
    `;
    
    return item;
}

// Filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        renderCertifications(filter);
    });
});

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Contact form handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    alert(`Thank you for your message, ${name}! I'll get back to you at ${email} soon.`);
    
    // Reset form
    contactForm.reset();
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.cert-card, .timeline-item, .feature');
    animateElements.forEach(el => observer.observe(el));
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Ripple effect for timeline-content
function addRippleEffectToTimeline() {
    const timelineContents = document.querySelectorAll('.timeline-content');
    timelineContents.forEach(content => {
        content.addEventListener('pointerdown', function(e) {
            createRipple(e, content);
        });
        content.addEventListener('mouseenter', function(e) {
            // Optional: Uncomment to trigger on hover
            // createRipple(e, content);
        });
    });
}

function createRipple(e, element) {
    const rect = element.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
    element.appendChild(ripple);
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeStats();
    renderCertifications();
    renderTimeline();
    addRippleEffectToTimeline();
    
    // Add loading animation to stats
    setTimeout(() => {
        totalCertsElement.classList.remove('loading');
        totalYearsElement.classList.remove('loading');
        activeCertsElement.classList.remove('loading');
    }, 1000);
});

// Export data for easy customization
window.certificationData = certifications; 
