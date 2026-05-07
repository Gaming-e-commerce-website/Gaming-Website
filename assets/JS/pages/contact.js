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
  
   
    this.reset();
});


 