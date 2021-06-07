function login() {
    let form = document.getElementById("loginForm")
    let email = form.email.value;
    let password = form.password.value;
    if (email != "" && password != "") {
        
        let userarr = JSON.parse(localStorage.getItem("userlist"));
        for (let i = 0; i < userarr.length; i++){
            if (userarr[i].email === email && userarr[i].password === password) {
                alert("Successfully logged in");
                window.location.href = "menu.html"
                return;
            }
        }
        alert("Invalid Credentials")
    }
}

