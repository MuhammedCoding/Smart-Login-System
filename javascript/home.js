var welcomeMsg= document.querySelector("h1");
var user = JSON.parse(localStorage.getItem("user"));
welcomeMsg.innerHTML = `welcome ${user.username}`;