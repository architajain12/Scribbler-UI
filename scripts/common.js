const signUpModal = document.querySelector('#signUpModal');
const signUpBtn = document.querySelector('#signupBtn');
const closeSignUpBtn = document.querySelector('#closeSignup');
const signInModal = document.querySelector('#signInModal');
const signInBtn = document.querySelector('#signinBtn');
const closeSignInBtn = document.querySelector('#closeSignin');
const redirectToSignUp = document.querySelector('#redirectSignUp');

signUpBtn.addEventListener('click', openSignUp);
closeSignUpBtn.addEventListener('click', closeSignUp);
signInBtn.addEventListener('click', openSignIn);
closeSignInBtn.addEventListener('click', closeSignIn);
redirectToSignUp.addEventListener('click', redirectToSignup)

function openSignUp() {
    signUpModal.style.display = 'block';
}

function closeSignUp() {
    signUpModal.style.display = 'none';
}

function openSignIn() {
    signInModal.style.display = 'block';
}

function closeSignIn() {
    signInModal.style.display = 'none';
}

function redirectToSignup() {
    closeSignIn();
    openSignUp();
}

