var email = document.getElementById("email");
var password = document.getElementById("password");
var btnLogin = document.getElementById("login-btn");
var wrongInput = document.getElementById("wrong-input");

var usersArray = JSON.parse(localStorage.getItem("users"));

function validateLogin(){
    
    if(email.value =="" || password.value ==""){
        wrongInput.classList.replace("d-none","d-block");
        return false;
    }

    for (var i=0;i<usersArray.length;i++){
        if(email.value == usersArray[i].email ){
            if(password.value == usersArray[i].password){
                localStorage.setItem("user",JSON.stringify(usersArray[i]));
                return true;
            }
            else {
                wrongInput.classList.replace("d-none","d-block");
                wrongInput.innerHTML = "Password is incorrect , please try again"
            }
        }
    }

    wrongInput.classList.replace("d-none","d-block");
    wrongInput.innerHTML = "Email not found please sign up";
    return false;

}

function getUser(user){
    return user;
}
function login(){
    if(validateLogin()) {
        window.open("home.html");
    }
}

btnLogin.addEventListener("click",login);