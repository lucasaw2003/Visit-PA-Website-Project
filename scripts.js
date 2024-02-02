const email = document.getElementById("email");
const form = document.getElementById("myForm");
const emailError = document.getElementById("emailError");

form.addEventListener("submit", (e)=>
{
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})/

    if (!email.value.match(emailRegex)) {
        e.preventDefault();
        emailError.innerHTML = "*Need a correct email";
    }
})
