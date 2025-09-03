// Interactive star ratings for reviews
document.querySelectorAll('.review-card').forEach(function(card) {
    const stars = card.querySelectorAll('i.fa-star, i.fa-star-half-alt');
    let currentRating = stars.length;
    stars.forEach((star, idx) => {
        star.style.cursor = 'pointer';
        star.addEventListener('mouseenter', function() {
            stars.forEach((s, i) => {
                s.classList.toggle('fas', i <= idx);
                s.classList.toggle('far', i > idx);
            });
        });
        star.addEventListener('mouseleave', function() {
            stars.forEach((s, i) => {
                s.classList.toggle('fas', i < currentRating);
                s.classList.toggle('far', i >= currentRating);
            });
        });
        star.addEventListener('click', function() {
            currentRating = idx + 1;
            stars.forEach((s, i) => {
                s.classList.toggle('fas', i < currentRating);
                s.classList.toggle('far', i >= currentRating);
            });
        });
    });
    card.addEventListener('mouseleave', function() {
        stars.forEach((s, i) => {
            s.classList.toggle('fas', i < currentRating);
            s.classList.toggle('far', i >= currentRating);
        });
    });
});
 // Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close mobile nav when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thanks for your message! I\'ll get back to you soon.');
            this.reset();
        });
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });