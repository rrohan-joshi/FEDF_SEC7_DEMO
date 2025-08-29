    const form=document.getElementById("myform");
    const fullname=document.getElementById("fullname");
    const email=document.getElementById("email");
    const password=document.getElementById("password");
    const phone=document.getElementById("phone");

    const fullnameError=document.getElementById("fullnameError");
    const emailError=document.getElementById("emailError");
    const passwordError=document.getElementById("passwordError");
    const phoneError=document.getElementById("phoneError");
    const successMessage=document.getElementById("successMessage");
    function validateForm() {
    let isValid = true;
    if (fullname.value.trim() === "") {
        fullnameError.textContent = "Full Name is required";
        isValid = false;
    } else {
        fullnameError.textContent = "";
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else {
        emailError.textContent = "";
    }
    if (password.value.trim() === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }
    if (phone.value.trim() === "") {
        phoneError.textContent = "Phone No. is required";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }
    return isValid;
}
form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    let formIsValid = validateForm();
    if (formIsValid) {
        successMessage.textContent = "Form submitted successfully!";
        form.reset();
    } else {
        successMessage.textContent = "";
    }
});