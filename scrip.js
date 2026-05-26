// Sticky Navigation
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const plan = formData.get('plan');
    
    // Create WhatsApp message
    const message = `Hello Pro Life Fitness Gym,\n\nI am interested in joining!\n\nName: ${name}\nPhone: ${phone}\nPlan: ${plan}\n\nPlease contact me for more details.`;
    
    // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/9101XXXXXXX?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    alert('Thank you for your interest! You will be redirected to WhatsApp to complete your inquiry.');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .pricing-card, .gallery-item').forEach(el => {
    observer.observe(el);
});

// Pricing card click handler
document.querySelectorAll('.btn-plan').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.pricing-card');
        const plan = card.querySelector('.pricing-header h3').textContent;
        const price = card.querySelector('.price .amount').textContent;
        
        const message = `Hello Pro Life Fitness Gym,\n\nI want to join the ${plan} plan (₹${price}).\n\nPlease contact me for registration.`;
        const whatsappUrl = `https://wa.me/9101XXXXXXX?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
    });
});

// Free trial button handler
function openModal() {
    const message = `Hello Pro Life Fitness Gym,\n\nI would like to avail the 1 Day Free Trial.\n\nPlease contact me to schedule my visit.`;
    const whatsappUrl = `https://wa.me/9101XXXXXXX?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}

console.log('Pro Life Fitness Gym Website Loaded Successfully!');
