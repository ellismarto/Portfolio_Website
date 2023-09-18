// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict';
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
  
    // Loop over the forms and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
        }
      }, false);
    });
  
    // Fetch all the buttons
    const buttons = document.querySelectorAll('.custom-button');
  
    // Loop over the buttons and add event listeners
    Array.from(buttons).forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault();
        const form = button.closest('form');
        if (form.checkValidity()) {
          const link = button.getAttribute('data-link');
          window.location.href = link;
        } else {
          form.classList.add('was-validated');
        }
      });
    });
  })();