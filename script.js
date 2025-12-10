document.addEventListener('DOMContentLoaded', function() {

    //get elements
    const form = document.getElementById('newsletterForm');
    const submitButton = document.querySelector('.submit-btn');
    const emailInputField = document.getElementById('email');

    //add event listener to form
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');

        //get email value
        const email = emailInputField.value
        console.log('email entered:', email)

        //validate email
        if(emailInputField.validity.valid){
            console.log('Email is valid');
        }else{
            console.log('Email is invalid')
            alert('Please enter a valid email')
        }
    });

    
});