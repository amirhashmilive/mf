/* ============================================================================
   MEER FOUNDATION — FORM VALIDATION & HANDLING
   Client-Side Input Sanitization & Accessible Feedback
   ============================================================================ */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    const statusBox = document.getElementById('form-status');

    // Reset error states
    document.querySelectorAll('.form-group').forEach(group => group.classList.remove('error'));

    // Validate Name
    if (!nameInput || nameInput.value.trim() === '') {
      setError(nameInput, 'Please enter your full name');
      isValid = false;
    }

    // Validate Email
    if (!emailInput || !validateEmail(emailInput.value.trim())) {
      setError(emailInput, 'Please enter a valid email address');
      isValid = false;
    }

    // Validate Subject
    if (!subjectInput || subjectInput.value === '') {
      setError(subjectInput, 'Please select a subject');
      isValid = false;
    }

    // Validate Message
    if (!messageInput || messageInput.value.trim().length < 10) {
      setError(messageInput, 'Message must be at least 10 characters long');
      isValid = false;
    }

    if (!isValid) {
      if (statusBox) {
        statusBox.style.display = 'block';
        statusBox.className = 'form-status error';
        statusBox.innerText = 'Please correct the errors highlighted above.';
      }
      return;
    }

    // Success Simulation
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    }

    setTimeout(() => {
      contactForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message';
      }
      if (statusBox) {
        statusBox.style.display = 'block';
        statusBox.className = 'form-status success';
        statusBox.style.color = 'var(--success, #2E7D32)';
        statusBox.style.padding = '14px 20px';
        statusBox.style.background = 'rgba(46, 125, 50, 0.1)';
        statusBox.style.borderRadius = 'var(--radius-md)';
        statusBox.style.marginTop = '16px';
        statusBox.innerText = 'Thank you! Your message has been sent successfully. We will get back to you shortly.';
      }
    }, 1200);
  });

  function setError(input, message) {
    if (!input) return;
    const parent = input.closest('.form-group');
    if (parent) {
      parent.classList.add('error');
      const errSpan = parent.querySelector('.form-error-msg');
      if (errSpan) errSpan.innerText = message;
    }
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

});
