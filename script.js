const  form = document.getElementById('newsletterForm');
const submitButton = document.querySelector('submit-btn') ;
const emailInputField = document.getElementById('email');

form.addEventListener('submit-btn', function(e) {
    e.preventDefault();
    console.log('you clicked me')
})