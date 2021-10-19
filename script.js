// let username = document.getElementById ("username");
// let email = document.getElementById ("email")
// let password = document.getElementById("password")

let id = (id) => document.getElementById(id)
let classes = (classes) => document.getElementsByClassName(classes)

let username = id("username"),
    email = id ("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    engine(username, 0, "Username is empty");
    engine(email, 1, "Email is empty");
    engine(password, 2, "Password is empty");
})

let engine = (id, serial, message) => {
     if(id.value.trim() === ''){
        errorMsg[serial].innerHTML= message;
        failureIcon[serial].style.opacity = '1';
        successIcon[serial].style.opacity = '0';
    }else {
        errorMsg[serial].innerHTML="";
        failureIcon[serial].style.opacity = '0';
        successIcon[serial].style.opacity = '1';
    }
}
