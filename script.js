const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const password = document.getElementById("pwd");
const regenerated_password = document.getElementById("reg-pwd");

const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const mobileRegEx = /^([+]\d{2}[ ])?\d{10}$/;
const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;

email.addEventListener("input", () => {
    const isValid = email.value.length === 0 || emailRegEx.test(email.value);
    if (isValid) {
        email.className = "valid";
    }
    else {
        email.className = "invalid";
    }
});

mobile.addEventListener("input", () => {
    const isValid = mobile.value.length === 0 || mobileRegEx.test(mobile.value);
    if (isValid) {
        mobile.className = "valid";
    }
    else {
        mobile.className = "invalid";
    }
});

password.addEventListener("input", () => {
    const isValid = password.value.length === 0 || passwordRegEx.test(password.value);
    if (isValid) {
        password.className = "valid";
    }
    else {
        password.className = "invalid";
    }
});

regenerated_password.addEventListener("input", () => {
    const isValid = regenerated_password.value === password.value;
    if (isValid) {
        regenerated_password.className = "valid";
    }
    else {
        regenerated_password.className = "invalid";
    }
});