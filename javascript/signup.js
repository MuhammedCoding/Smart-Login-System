var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var btnSignup = document.getElementById("signup-btn");
var wrongInput = document.getElementById("wrong-input");

var usersArray = [];

function validateSignup(){
    
    if(username.value == "" || email.value =="" || password.value ==""){
        wrongInput.classList.replace("d-none","d-block");
        return false;
    }

    for (var i=0;i<usersArray.length;i++){
        if(email.value == usersArray[i].email){
            wrongInput.classList.replace("d-none","d-block");
            wrongInput.innerHTML = "Email already Exists"
            return false;
        }
    }
    wrongInput.classList.replace("d-none","d-block");
    wrongInput.innerHTML = "Success";
    wrongInput.classList.replace ("text-danger","text-success");
    return true;

}

function signup(){
    
    if(validateSignup()){
        var user = {
            username: username.value,
            email: email.value,
            password: password.value
        }
        console.log(user.username);
        console.log(user.email);
        console.log(user.password);
        if(validateSignup){
            usersArray.push(user);
        }
        localStorage.setItem("users",JSON.stringify(usersArray));
    }
    
}

btnSignup.addEventListener("click",signup);
