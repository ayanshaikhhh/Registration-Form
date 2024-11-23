// let form = alert("Welcome To The Registration Form");
// console.log(form);

let fname = document.getElementById("fname");
let userName = document.getElementById("username");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phone-number");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let submitBtn = document.getElementById("btn");
// let submitForm = document.getElementById("registration-form");

let error = document.getElementById("error");
submitBtn.addEventListener("click", () => {
    if(fname.value=="") {
        console.log("blank")
        error.style.opacity="1";
    } else {
        console.log("fill");
        error.style.opacity="0";
    }
});


let error2 = document.getElementById("error2");
submitBtn.addEventListener("click", () => {
    if(userName.value=="") {
        console.log("blank")
        error2.style.opacity="1"
    } else {
        console.log("fill")
        error2.style.opacity="0"
    }
})

let error3 = document.getElementById("error3");
submitBtn.addEventListener("click", () => {
    if(email.value=="") {
        console.log("blank");
        error3.style.opacity="1";      
    } else {
        console.log("fill");
        error3.style.opacity="0";
    }
})

let error4 = document.getElementById("error4");
submitBtn.addEventListener("click", () => {
    if(phoneNumber.value==""){
        console.log("blank");
        error4.style.opacity="1"

    } else {
        console.log("fill");
        error4.style.opacity="0";
    }
})

let error5 = document.getElementById("error5");
submitBtn.addEventListener("click",() => {
    if(password.value=="") {
        console.log("blank");
        error5.style.opacity="1"
    } else {
        console.log("fill");
        error5.style.opacity="0";
    }
})

let error6 = document.getElementById("error6");
submitBtn.addEventListener("click", () => {
    if(confirmPassword.value=="") {
        console.log("blank");
        error6.style.opacity="1";
    } else {
        console.log("fill");
        error6.style.opacity="0";
    }
})



