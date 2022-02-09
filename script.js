//BUTTON JS
    // when user 'clicks' button:
        // change color of button


const buttonAnimation = document.querySelectorAll('button');
// console.log(buttonAnimation);

// buttonAnimation.addEventListener('click', function(event) {
//     //what code will run when the event happens
//     event.preventDefault();
    
//     this.style.backgroundColor = "lightblue";
//     console.log(event);
// });

for (let i = 0; i < buttonAnimation.length; i++) {
    buttonAnimation[i].addEventListener('click', function (event) {
        // event.preventDefault();
        event.target.style.backgroundColor = "lightblue";
        // console.log(event);
    });
}



// Contact Form
    // remove default form submit that causes the page to refresh
    // if user presses submit and the name or email input values are empty, alert the user to enter a name or email
    // if message area is empty alert user to enter a message
    // when user submits the form, display message on screen thanking them for their feedback

// Blog Comment Form
    // remove default form submit that causes the page to refresh
    // if user presses submit and the name or email input values are empty, alert the user to enter a name or email
    // if message area is empty alert user to enter a message
    // when user submits the form, display message on screen thanking them for their feedback
    // append comment from user to the page underneath previous comments

// Thing to note:
    // My comment form comment containers were mislabelled and I should have labelled them with one class instead of daisyComment and maggieComment (separately). Next time I will be more generic about this.

// --------------- contact form begins    

const contactFormElement = document.querySelector('form');
// const contactForm = document.querySelector('.contactForm');


contactFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    // console.log(event);
    // remove this which will refresh the page, and inside the event listener - submit form set to hidden and append a div/heading that says your message has been received

    // a different way to do it that uses querySelector instead of Id
        // const nameInput = document.querySelector('input[type=text]');
    const nameInput = document.getElementById('name');
    const name = nameInput.value;
    // console.log(name);

    // const emailInput = document.querySelector('input[type=email]');
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    // console.log(email);

    const messageInput = document.getElementById('message');
    const message = messageInput.value;
    // console.log(message);
    
    if (nameInput.value == '' && emailInput.value == '') {
        alert('Please enter your name and email.');
    } else if (nameInput.value == '') {
        alert('Please enter your name.');
    } else if (emailInput.value == '') {
        alert('Please enter your email.');
    } else if (messageInput.value == '') {
        alert('Please enter a message');
    } else {
        // Alvin and Kevin helped with my nested if statement so I didn't have to have the comment form code below on a separate JavaScript file !!!
        if (document.querySelector('.contactForm')) {
            // nameInput.value = '';
            // emailInput.value = '';
            // messageInput.value = '';

            // return `Thank you for leaving a message ${name}`;
            const contactForm = document.querySelector('.contactForm');
            const submitMessage = document.createElement('h4');
            // Kevin told me about using prepend 
            contactForm.prepend(submitMessage); // adds to the start of the element
            submitMessage.textContent = (`Thank you for submitting your feedback ${name}`);
    
            submitMessage.style.textAlign = 'center';
            setTimeout(() => { submitMessage.style.display = 'none'}, 5000);
        } else {
            const commentForm = document.querySelector('.commentsForm');
            const submitMessage = document.createElement('h4');

            commentForm.prepend(submitMessage); // adds to the start of the element
            submitMessage.textContent = (`Thank you for submitting your feedback ${name}`);

            submitMessage.style.textAlign = 'center';
            setTimeout(() => { submitMessage.style.display = 'none' }, 5000);
            addComment(name, message);
        }
    }
    // This clears both of the forms
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});

// --------------------------------- end of contact form code

// ORIGINAL COMMENT FORM CODE THAT WAS SLIGHTLY REPEATED

    // const commentFormElement = document.querySelector('form');

    // commentFormElement.addEventListener('submit', function (event) {
    //     event.preventDefault();
    //     console.log(event);
    //     // const nameInput = document.querySelector('input[type=text]');
    //     const nameInput = document.getElementById('name');
    //     const name = nameInput.value;

    //     console.log(name);

    //     // const emailInput = document.querySelector('input[type=email]');
    //     const emailInput = document.getElementById('email');
    //     const email = emailInput.value;
    //     console.log(email);

    //     const messageInput = document.getElementById('message');
    //     const message = messageInput.value;
    //     console.log(message);

    //     if (nameInput.value == '' && emailInput.value == '') {
    //         alert('Please enter your name and email.');
    //     } else if (nameInput.value == '') {
    //         alert('Please enter your name.');
    //     } else if (emailInput.value == '') {
    //         alert('Please enter your email.');
    //     } else if (messageInput.value == '') {
    //         alert('Please enter a message');
    //     } else {
    //         // return `Thank you for leaving a message ${name}`;
    //         const commentForm = document.querySelector('.commentsForm');
    //         const submitMessage = document.createElement('h4');
            
    //         commentForm.prepend(submitMessage); // adds to the start of the element
    //         submitMessage.textContent = (`Thank you for submitting your feedback ${name}`);
            
    //         submitMessage.style.textAlign = 'center';
    //         setTimeout(() => { submitMessage.style.display = 'none' }, 5000);
    //         addComment(name, message);
    //     }
    //     nameInput.value = '';
    //     emailInput.value = '';
    //     messageInput.value = '';
    // });

function addComment(name, message) {
    const blogComments = document.querySelector('.blogComments');

    const newCommentContainer = document.createElement('div');
    newCommentContainer.classList.add('daisyComment');
    newCommentContainer.innerHTML = `
        <div class="imgContainer">
            <img src="https://picsum.photos/89" alt="">
        </div>
        <div class="textContainer">
            <p>Wednesday October 10th, 2018 by ${name}</p>
            <p>${message}</p>
        </div>`;
    blogComments.appendChild(newCommentContainer);
};


//Test codes/COMMENT FORM CODE ?
// const commentFormElement = document.querySelector('form');

// contactFormElement.addEventListener('submit', function(event) {
//     event.preventDefault();
// });


// const submitMessage = document.

    // const formInputs = document.querySelectorAll('input');
    // const formValues = formInputs.values;
    // console.log(formValues);

    // Comment Form
    // remove default form submit that causes the page to refresh
    // when user submits form with comment, append the comment to the comment
    // Comments have time and date stamp - how to put this information on the page?

    //if input == '' (empty string), alert('Please enter your name)