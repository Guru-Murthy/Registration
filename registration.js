const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    if(!validatorInputs()){
        e.preventDefault();
    };
})

function validatorInputs(){
    const usernameVal=username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true

    if(usernameVal===''){
        success = false;
        setError(username,'username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        success = false;
        setError(email,'Email is required')

    }
    else if(!validEmail(emailVal)){
        success = false;
        setError(email,'Please enter a valid email')
        }
    else{
        setSuccess(email)
    }
    

    if (passwordVal===''){
        success = false;
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(password,'Password must be atleast 8 character')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal===''){
        success = false;
        setError(cpassword,'Confirm password is rquired')
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        setError(cpassword,'Password does not match')
    }

    return success;

}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText= message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText= '';
    inputGroup.classList.add('Success')
    inputGroup.classList.remove('error')
}

const validEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );
};