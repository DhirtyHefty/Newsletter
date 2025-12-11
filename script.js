document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('newsletterForm');
    const submitButton = document.querySelector('.submit-btn');
    const emailInputField = document.getElementById('email');
    const successMessage = document.getElementById('successMessage');
    const userEmailSpan = document.getElementById('userEmail');
    const signupContainer = document.getElementById('mainContainer');

    // Check if elements are found
    console.log('Success message found:', successMessage);
    console.log('User email span found:', userEmailSpan);
    console.log('Signup container found:', signupContainer);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInputField.value;
        console.log('Email entered:', email);
        
        if (emailInputField.validity.valid) {
            console.log('Email is valid!');
            
            // Show the user's email in the success message
            userEmailSpan.textContent = email;
            console.log('Email set in success message');
            
            // Hide the form/signup container
            if (signupContainer) {
                signupContainer.classList.add('hide');
                console.log('Signup container hidden');
            } else {
                form.classList.add('hide');
                console.log('Form hidden');
            }
            
            // Show the success message
            successMessage.classList.add('show');
            console.log('Success message shown');
            
        } else {
            console.log('Email is invalid!');
            alert('Please enter a valid email address');
        }
    });
});