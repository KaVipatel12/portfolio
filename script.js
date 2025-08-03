// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Make contact links clickable
    document.querySelectorAll('.contact-list p').forEach(item => {
        if(item.textContent.includes('@') || item.textContent.includes('http')) {
            const text = item.textContent;
            item.innerHTML = '';
            
            const link = document.createElement('a');
            if(text.includes('@')) {
                link.href = `mailto:${text}`;
            } else {
                link.href = text.startsWith('http') ? text : `https://${text}`;
            }
            link.textContent = text;
            link.target = '_blank';
            item.appendChild(link);
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});