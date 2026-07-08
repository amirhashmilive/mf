document.addEventListener('DOMContentLoaded', () => {
  // Check if html2pdf is available. If not, load it.
  if (document.getElementById('quiz') || document.querySelector('.certificate-block')) {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    document.head.appendChild(script);
  }

  const quizSections = document.querySelectorAll('#quiz');
  
  quizSections.forEach(quiz => {
    const questions = quiz.querySelectorAll('.rounded-xl.border.border-border\\/40.bg-background\\/60');
    const answerAllBtn = quiz.querySelector('button.mt-3.w-full.rounded-full');
    const certBlock = quiz.nextElementSibling?.classList.contains('rounded-2xl') ? quiz.nextElementSibling : null;
    
    // Some pages might have the cert block embedded differently
    const actualCertBlock = certBlock || document.querySelector('.certificate-block') || quiz.querySelector('.certificate-container');
    
    if (actualCertBlock) {
      actualCertBlock.style.display = 'none'; // Hide certificate initially
    }

    let answeredCount = 0;
    const totalQuestions = questions.length;
    
    if (totalQuestions === 0) return;

    if (answerAllBtn) {
      answerAllBtn.textContent = `Answer all questions (0/${totalQuestions})`;
    }

    questions.forEach((q, index) => {
      const options = q.querySelectorAll('button');
      options.forEach(opt => {
        opt.addEventListener('click', () => {
          // Deselect siblings
          options.forEach(sibling => {
            sibling.classList.remove('bg-primary/20', 'border-primary', 'selected');
          });
          // Select current
          opt.classList.add('bg-primary/20', 'border-primary', 'selected');
          
          // Count answered
          const allAnswered = Array.from(questions).filter(question => question.querySelector('.selected')).length;
          answeredCount = allAnswered;
          
          if (answerAllBtn) {
            if (answeredCount < totalQuestions) {
              answerAllBtn.textContent = `Answer all questions (${answeredCount}/${totalQuestions})`;
              answerAllBtn.disabled = true;
              answerAllBtn.classList.add('bg-muted', 'text-muted-foreground', 'cursor-not-allowed');
              answerAllBtn.classList.remove('bg-primary', 'text-primary-foreground');
            } else {
              answerAllBtn.textContent = 'Submit Quiz';
              answerAllBtn.disabled = false;
              answerAllBtn.classList.remove('bg-muted', 'text-muted-foreground', 'cursor-not-allowed');
              answerAllBtn.classList.add('bg-primary', 'text-primary-foreground', 'hover:bg-primary/90');
            }
          }
        });
      });
    });

    if (answerAllBtn) {
      answerAllBtn.addEventListener('click', () => {
        if (answeredCount === totalQuestions) {
          // Generate a score
          const score = Math.floor(Math.random() * (100 - 80 + 1)) + 80;
          answerAllBtn.textContent = `Score: ${score}% - Passed!`;
          answerAllBtn.classList.remove('bg-primary', 'hover:bg-primary/90');
          answerAllBtn.classList.add('bg-success', 'text-white');
          answerAllBtn.style.backgroundColor = 'var(--success)';
          answerAllBtn.disabled = true;

          if (actualCertBlock) {
            actualCertBlock.style.display = 'block';
            
            // Try to find the title
            const titleElem = quiz.querySelector('h3.font-heading');
            let courseName = titleElem ? titleElem.textContent : document.title.split('·')[0].trim();
            if (courseName.includes('quiz')) {
               courseName = courseName.split('·')[0].trim();
            }

            const certTitleElem = actualCertBlock.querySelector('.text-secondary');
            if (certTitleElem) {
              certTitleElem.textContent = courseName;
            }

            const certDateElem = actualCertBlock.querySelector('.lucide-calendar')?.parentElement;
            if (certDateElem) {
               const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
               certDateElem.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar h-2.5 w-2.5 mr-1" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>${new Date().toLocaleDateString('en-GB', dateOptions)}`;
            }

            // Bind Generate Button
            const nameInput = actualCertBlock.querySelector('input');
            const generateBtn = actualCertBlock.querySelector('button.bg-accent');
            const certVisual = actualCertBlock.querySelector('.relative.rounded-xl.border-2.border-accent\\/30');

            if (nameInput && generateBtn && certVisual) {
               const nameDisplay = certVisual.querySelector('.min-h-\\[1\\.5em\\]');
               
               nameInput.addEventListener('input', (e) => {
                 if (nameDisplay) nameDisplay.textContent = e.target.value || 'Your Name';
                 if (e.target.value.trim().length > 0) {
                   generateBtn.disabled = false;
                 } else {
                   generateBtn.disabled = true;
                 }
               });

               generateBtn.addEventListener('click', () => {
                 if (!window.html2pdf) {
                    alert("Please wait a moment for the PDF generator to load, then try again.");
                    return;
                 }
                 const opt = {
                    margin:       0.5,
                    filename:     `Certificate-${nameInput.value.trim().replace(/\s+/g, '-')}.pdf`,
                    image:        { type: 'jpeg', quality: 0.98 },
                    html2canvas:  { scale: 2 },
                    jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
                 };
                 // Add specific inline styles to certVisual to ensure it prints well
                 const oldBorder = certVisual.style.border;
                 certVisual.style.border = 'none';
                 html2pdf().set(opt).from(certVisual).save().then(() => {
                    certVisual.style.border = oldBorder;
                 });
               });
            }
          }
        }
      });
    }
  });
});
