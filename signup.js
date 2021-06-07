let form = document.getElementById("signupForm");

function signup() {
    let name = form.name.value;
    let email = form.email.value;
    let password = form.password.value;
    if (name != "" && email != "" && password != "") {
        let user = {
        name,
        email,
        password
    };

    let userarr = localStorage.getItem("userlist");
    if (userarr === null) {
        userarr = [];
    } else {
        userarr = JSON.parse(userarr);
    };
    userarr.push(user);
        localStorage.setItem("userlist", JSON.stringify(userarr));
        alert("Successfully signed up")
    window.location.href = "login.html";
    }
    
}