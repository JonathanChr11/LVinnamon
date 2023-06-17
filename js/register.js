function registerValidation() {
    var registerName = document.getElementById("register-name").value;
    var registerGenderMale = document.getElementById(
        "register-gender-male"
    ).checked;
    var registerGenderFemale = document.getElementById(
        "register-gender-female"
    ).checked;
    var registerRegion = document.getElementById("register-region").value;
    var registerPassword = document.getElementById("register-password").value;
    var registerTerms = document.getElementById("register-terms").checked;

    var registerNameValidation = document.getElementById(
        "register-name-validation"
    );
    var registerGenderValidation = document.getElementById(
        "register-gender-validation"
    );
    var registerRegionValidation = document.getElementById(
        "register-region-validation"
    );
    var registerPasswordValidation = document.getElementById(
        "register-password-validation"
    );
    var registerTermsValidation = document.getElementById(
        "register-terms-validation"
    );

    if (registerName == "") {
        registerNameValidation.classList.remove("hidden");
    } else {
        registerNameValidation.classList.add("hidden");
    }
    if (registerGenderMale == false && registerGenderFemale == false) {
        registerGenderValidation.classList.remove("hidden");
    } else {
        registerGenderValidation.classList.add("hidden");
    }
    if (registerRegion === "choose") {
        registerRegionValidation.classList.remove("hidden");
    } else {
        registerRegionValidation.classList.add("hidden");
    }
    if (registerPassword == "") {
        registerPasswordValidation.classList.remove("hidden");
    } else {
        registerPasswordValidation.classList.add("hidden");
    }
    if (registerTerms == false) {
        registerTermsValidation.classList.remove("hidden");
    } else {
        registerTermsValidation.classList.add("hidden");
    }
    if (
        registerName &&
        (registerGenderMale || registerGenderFemale) &&
        registerRegion &&
        registerPassword &&
        registerTerms
    ) {
        alert("Register Success!");
        window.location.href = "register.html";
    }
}

function loginValidation() {
    var loginName = document.getElementById("login-name").value;
    var loginPassword = document.getElementById("login-password").value;

    var loginNameValidation = document.getElementById("login-name-validation");
    var loginPasswordValidation = document.getElementById(
        "login-password-validation"
    );

    if (loginName == "") {
        loginNameValidation.classList.remove("hidden");
    } else {
        loginNameValidation.classList.add("hidden");
    }
    if (loginPassword == "") {
        loginPasswordValidation.classList.remove("hidden");
    } else {
        loginPasswordValidation.classList.add("hidden");
    }
    if (loginName && loginPassword) {
        alert("Login Success!");
        window.location.href = "index.html";
    }
}
