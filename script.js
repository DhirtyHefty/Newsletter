document.addEventListener('DOMContentLoaded', function() {

    //get elements
    const form = document.getElementById('newsletterForm');
    const submitButton = document.querySelector('.submit-btn');
    const emailInputField = document.getElementById('email');

    //add event listener to form
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        //get email value
        const email = emailInputField.value

        //validate email
        if(emailInputField.validity.valid){
            console.log('Email entered:', email)
            //show the users email in the success section
            userEmail.textContent = email

            //hide the container
            main-container.classlist.add('hide')

            //show success message
            successMessage.classlist.add('show');
        } else {
            console.log('Email is invalid')
            alert('Enter a valid email')
        }
    });

    
});