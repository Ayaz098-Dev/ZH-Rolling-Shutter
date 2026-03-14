// --- Mobile Hamburger Menu Logic ---
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    // Toggle the menu visibility
    navMenu.classList.toggle('active');
    
    // Toggle between Bars and Xmark Font Awesome icons
    const icon = hamburger.querySelector('i');
    if(navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// --- Quick Enquiry Form Simulation ---
document.getElementById('enquiryForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the page from reloading
    
    const btn = this.querySelector('.btn-submit');
    btn.innerHTML = 'Sending...';
    btn.style.opacity = '0.7';

    // Simulates sending data (1.5 seconds delay)
    setTimeout(() => {
        alert('Thank you! Your enquiry has been sent successfully. The ZH Rolling Shutter team will contact you shortly.');
        btn.innerHTML = 'Send Enquiry Now';
        btn.style.opacity = '1';
        this.reset(); // Clears the form fields
    }, 1500);
});