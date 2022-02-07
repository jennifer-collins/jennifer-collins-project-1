// when user 'clicks' button:
    // animate the button to change color


// const buttonAnimation = document.querySelectorAll('button');
// console.log(buttonAnimation);

// buttonAnimation.forEach();

// buttonAnimation.addEventListener('click', function(event) {
//     //what code will run when the event happens
//     event.preventDefault();
    
//     this.style.backgroundColor = "lightblue";
//     console.log(event);
// });

// for (let i = 0; i < buttonAnimation.length; i++) {
//     buttonAnimation[i].addEventListener('click', function (event) {
//         // event.preventDefault();
//         event.target.style.backgroundColor = "lightblue";
//         console.log(event);
//     });
// }



// Contact Form
    // remove default form submit that causes the page to refresh
    // if user presses submit and the name or email input values are empty, alert the user to enter a name or email
    // if email input is missing a @ or ., alert to enter a valid email address
    // when user submits the form, display message on screen thanking them for their feedback

const contactFormElement = document.querySelector('form');

contactFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event);
    // remove this which will refresh the page, and inside the event listener - submit form set to hidden and append a div/heading that says your message has been received

    // const nameInput = document.querySelector('input[type=text]');
    const nameInput = document.getElementById('name');
    const name = nameInput.value;
    
    console.log(name);

    // const emailInput = document.querySelector('input[type=email]');
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    console.log(email);

    const messageInput = document.getElementById('message');
    const message = messageInput.value;
    console.log(message);
    
    if (nameInput.value == '' && emailInput.value == '') {
        alert('Please enter your name and email.');

    // } else {
    //     console.log(nameInput);
    // }
    } else if (nameInput.value == '') {
        alert('Please enter your name.');
        console.log('This is the name conditional')
    } else if (emailInput.value == '') {
        alert('Please enter your email.');
    } else if (messageInput.value == '') {
        alert('Please enter a message');
    } else {
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
        // return `Thank you for leaving a message ${name}`;
        const contactForm = document.querySelector('.contactForm');
        const submitMessage = document.createElement('h4');
        
        contactForm.prepend(submitMessage); // adds to the start of the element
        submitMessage.textContent = (`Thank you for submitting your feedback ${name}`);

        submitMessage.style.textAlign = 'center';
    }
    // if (task) {
        //     contactInputs.value = '';
        // }
        
});

// const submitMessage = document.
    
    // const formInputs = document.querySelectorAll('input');
    // const formValues = formInputs.values;
    // console.log(formValues);
    
    // Comment Form
    // remove default form submit that causes the page to refresh
    // when user submits form with comment, append the comment to the comment
    // Comments have time and date stamp - how to put this information on the page?
    
    //if input == '' (empty string), alert('Please enter your name)