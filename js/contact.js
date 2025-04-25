// Configuración para la página de contacto
document.addEventListener('DOMContentLoaded', function() {
    // Configurar el formulario de contacto
    setupContactForm();
});

// Función para configurar el formulario de contacto
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los valores del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // En un entorno real, aquí enviaríamos los datos a un servidor
            // Para este ejemplo, mostraremos un mensaje de éxito
            
            // Validar el formulario
            if (validateForm(name, email, subject, message)) {
                // Simular envío exitoso
                showSuccessMessage();
                
                // Limpiar el formulario
                contactForm.reset();
            }
        });
    }
}

// Función para validar el formulario
function validateForm(name, email, subject, message) {
    let isValid = true;
    
    // Validar nombre
    if (name.trim() === '') {
        showError('name', 'Por favor, ingresa tu nombre');
        isValid = false;
    } else {
        removeError('name');
    }
    
    // Validar email
    if (email.trim() === '') {
        showError('email', 'Por favor, ingresa tu email');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('email', 'Por favor, ingresa un email válido');
        isValid = false;
    } else {
        removeError('email');
    }
    
    // Validar asunto
    if (subject.trim() === '') {
        showError('subject', 'Por favor, ingresa un asunto');
        isValid = false;
    } else {
        removeError('subject');
    }
    
    // Validar mensaje
    if (message.trim() === '') {
        showError('message', 'Por favor, ingresa un mensaje');
        isValid = false;
    } else {
        removeError('message');
    }
    
    return isValid;
}

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para mostrar error
function showError(inputId, errorMessage) {
    const input = document.getElementById(inputId);
    const errorElement = document.createElement('div');
    
    // Eliminar error existente si hay
    removeError(inputId);
    
    errorElement.className = 'error-message';
    errorElement.textContent = errorMessage;
    
    input.classList.add('error');
    input.parentNode.appendChild(errorElement);
}

// Función para eliminar error
function removeError(inputId) {
    const input = document.getElementById(inputId);
    const parent = input.parentNode;
    const errorElement = parent.querySelector('.error-message');
    
    if (errorElement) {
        parent.removeChild(errorElement);
    }
    
    input.classList.remove('error');
}

// Función para mostrar mensaje de éxito
function showSuccessMessage() {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.createElement('div');
    
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <p>¡Gracias por tu mensaje! Te responderé lo antes posible.</p>
    `;
    
    // Eliminar mensaje de éxito existente si hay
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Insertar mensaje después del formulario
    contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
    
    // Eliminar el mensaje después de 5 segundos
    setTimeout(function() {
        successMessage.remove();
    }, 5000);
}
