const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const validate = document.querySelector('.valid');
const validateE = document.querySelector('.validE');
const password = document.querySelector('.password1');
const emial = document.querySelector('.email');
const singinBtn = document.querySelector('.snb');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
   
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
   
});


let regExpWeak = /.[!,@,#,$,*]/;

singinBtn.addEventListener('click', () =>{
   
    if(password.value === ''){
        validate.innerText = "please enter a password";
        password.classList.add('error1')
        validate.classList.add('error');
    }
     else {
        validate.innerText ="success!";
       
        validate.classList.add('success');
    }
    if(emial.value === ''){
        validateE.innerText = "please enter your Email";
        emial.classList.add('error1')
        validateE.classList.add('error');
    }
     else {
        validateE.innerText ="success!";
       
        validateE.classList.add('success');
    }
})