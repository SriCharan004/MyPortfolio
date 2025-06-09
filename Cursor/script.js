// Sample certification data - Replace with your actual certifications
const certifications = [
    {
        id: 1,
        title: "AWS Certified Solutions Architect",
        organization: "Amazon Web Services",
        date: "2024-01-15",
        description: "Demonstrated expertise in designing distributed systems on AWS platform, including compute, storage, networking, and security services.",
        category: "technical",
        status: "active",
        tags: ["Cloud Computing", "AWS", "Architecture"],
        verificationUrl: "https://aws.amazon.com/verification"
    },
    {
        id: 2,
        title: "Certified Scrum Master (CSM)",
        organization: "Scrum Alliance",
        date: "2023-11-20",
        description: "Certified in Scrum methodology, enabling effective team collaboration and agile project management practices.",
        category: "professional",
        status: "active",
        tags: ["Agile", "Scrum", "Project Management"],
        verificationUrl: "https://www.scrumalliance.org/verify"
    },
    {
        id: 3,
        title: "Master of Science in Computer Science",
        organization: "Stanford University",
        date: "2022-06-15",
        description: "Graduate degree with focus on artificial intelligence and machine learning algorithms.",
        category: "academic",
        status: "active",
        tags: ["Computer Science", "AI/ML", "Graduate Degree"],
        verificationUrl: "https://registrar.stanford.edu/verify"
    },
    {
        id: 4,
        title: "Google Cloud Professional Data Engineer",
        organization: "Google Cloud",
        date: "2023-08-10",
        description: "Expertise in building and maintaining data processing systems on Google Cloud Platform.",
        category: "technical",
        status: "active",
        tags: ["Data Engineering", "GCP", "Big Data"],
        verificationUrl: "https://cloud.google.com/certification/verify"
    },
    {
        id: 5,
        title: "Certified Information Systems Security Professional (CISSP)",
        organization: "ISC²",
        date: "2023-03-25",
        description: "Advanced security certification covering eight domains of information security.",
        category: "professional",
        status: "active",
        tags: ["Cybersecurity", "Information Security", "CISSP"],
        verificationUrl: "https://www.isc2.org/verify"
    },
    {
        id: 6,
        title: "Bachelor of Engineering in Software Engineering",
        organization: "MIT",
        date: "2020-05-20",
        description: "Undergraduate degree with comprehensive software development and engineering principles.",
        category: "academic",
        status: "active",
        tags: ["Software Engineering", "Computer Science", "Bachelor's"],
        verificationUrl: "https://registrar.mit.edu/verify"
    },
    {
        id: 7,
        title: "Leadership and Communication Skills",
        organization: "Dale Carnegie Training",
        date: "2023-09-15",
        description: "Advanced training in leadership, public speaking, and interpersonal communication skills.",
        category: "soft-skills",
        status: "active",
        tags: ["Leadership", "Communication", "Public Speaking"],
        verificationUrl: "https://www.dalecarnegie.com/verify"
    },
    {
        id: 8,
        title: "Microsoft Azure Developer Associate",
        organization: "Microsoft",
        date: "2023-12-05",
        description: "Certification for developing cloud applications using Microsoft Azure services.",
        category: "technical",
        status: "active",
        tags: ["Azure", "Cloud Development", "Microsoft"],
        verificationUrl: "https://www.microsoft.com/en-us/learning/verify"
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
    const activeCerts = certifications.filter(cert => cert.status === 'active').length;
    
    // Calculate years of learning (from earliest to latest certification)
    const dates = certifications.map(cert => new Date(cert.date));
    const earliestDate = new Date(Math.min(...dates));
    const latestDate = new Date(Math.max(...dates));
    const yearsOfLearning = Math.ceil((latestDate - earliestDate) / (1000 * 60 * 60 * 24 * 365));
    
    // Animate stats counting up
    animateCounter(totalCertsElement, totalCerts);
    animateCounter(activeCertsElement, activeCerts);
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
    
    const statusClass = cert.status === 'active' ? 'status-active' : 'status-expired';
    const statusText = cert.status === 'active' ? 'Active' : 'Expired';
    
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
        <div class="cert-status ${statusClass}">${statusText}</div>
    `;
    
    // Add click event for verification
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