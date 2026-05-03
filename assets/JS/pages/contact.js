document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic data collection
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        description: document.getElementById('description').value
    };

    console.log('Form Submitted:', formData);
    
    // Simple success feedback
    alert('Thanks for reaching out! We will get back to you soon.');
    this.reset();
});