// Email Signup Form Handler
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('emailSignupForm');
  const messageDiv = document.getElementById('formMessage');
  
  if (!form) return;
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = form.querySelector('input[name="email"]').value;
    const submitBtn = form.querySelector('.signup-btn');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = 'Subscribing...';
    submitBtn.disabled = true;
    messageDiv.className = '';
    messageDiv.textContent = '';
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        // Success
        messageDiv.className = 'form-message success';
        messageDiv.textContent = '✓ Thank you for subscribing! Check your email for confirmation.';
        form.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 3000);
      } else {
        // Error
        messageDiv.className = 'form-message error';
        messageDiv.textContent = '✗ Something went wrong. Please try again.';
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    } catch (error) {
      messageDiv.className = 'form-message error';
      messageDiv.textContent = '✗ Network error. Please check your connection and try again.';
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
});
