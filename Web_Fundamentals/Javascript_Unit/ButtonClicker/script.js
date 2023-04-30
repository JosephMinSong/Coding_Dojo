function login(login_btn){
    if (login_btn.innerText == "Login"){
        login_btn.innerText = "Log Out";
    } else {
        login_btn.innerText = "Login"
    }
}

function remove(element){
    element.remove();
}

