let form = document.querySelector("form");
let userNameError = "";
let userName = "";
let UserEmailError ="";
let PasswordIsError ="";
let PhoneNumberError = "";

function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    let usernameElm =form.elements.username;
    console.log(usernameElm.value);
    if(usernameElm.value.length < 5){
        userNameError =`username can't be less than 5 characters`
    }
    let username =form.elements.name;
    if(username.value.split('').some(e => Number(e))){
        userName =`You can't use number in the name field`
    }
    let PhoneNumber =form.elements.number;
    if(PhoneNumber.value === String){
        PhoneNumberError =`You can't use number in the name field`
    }
    
    let userEmail =form.elements.email;
    if(userEmail.value.includes("@")){
        UserEmailError =`Email must contain the symbol @`
    }

    let userPassword =form.elements.Password;

    
    let passwordConform =form.elements.Conform;
    if(userPassword.value !== passwordConform.value){
        PasswordIsError =`Password and confirm password is not be same.`

    }
    
    usernameElm.nextElementSibling.innerText = userNameError
    username.nextElementSibling.innerHTML = userName;
    userEmail.nextElementSibling.innerHTML = UserEmailError;
    passwordConform.nextElementSibling.innerHTML = PasswordIsError;
    PhoneNumber.nextElementSibling.innerText = PhoneNumberError;
}

form.addEventListener("submit" ,handleSubmit)