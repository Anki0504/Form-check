newFunction();
function newFunction() {
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("registrationForm");

        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission


            // Get values from input fields
            let fullName = document.getElementById("fullName").value.trim();
            let email = document.getElementById("email").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let password = document.getElementById("password").value.trim();
            let confirmPassword = document.getElementById("confirmPassword").value.trim();

            let isValid = true;

            // Clear previous error messages
            document.getElementById("nameError").innerText = "";
            document.getElementById("emailError").innerText = "";
            document.getElementById("phoneError").innerText = "";
            document.getElementById("passwordError").innerText = "";
            document.getElementById("confirmPasswordError").innerText = "";

            // Validate Full Name
            if (fullName.length < 5) {
                document.getElementById("nameError").innerText = "Name must be at least 5 characters long.";
                isValid = false;
            }

            // Validate Email
            if (!email.includes("@")) {
                document.getElementById("emailError").innerText = "Enter a valid email.";
                isValid = false;
            }

            // Validate Phone Number
            if (phone.length !== 10 || phone === "123456789") {
                document.getElementById("phoneError").innerText = "Enter a valid 10-digit phone number.";
                isValid = false;
            }

            // Validate Password
            if (password.length < 8 || password.toLowerCase() === "password" || password === fullName) {
                document.getElementById("passwordError").innerText = "Password must be at least 8 characters and not common words.";
                isValid = false;
            }

            // Validate Confirm Password
            if (confirmPassword !== password) {
                document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
                isValid = false;
            }

            // If all fields are valid, show success alert
            if (isValid) {
                alert("Form submitted successfully!");
                form.reset();
            }
        });
    });
}

