document.addEventListener("DOMContentLoaded", function() {
    var registerContainer = document.getElementById("registerContainer");

    var registerForm = document.createElement("form");
    registerForm.id = "register";
    registerForm.innerHTML = `
        <label for="usernameRegister">Usuario:</label>
        <input type="text" id="usernameRegister" name="usernameRegister" required><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
        <label for="passwordRegister">Contraseña:</label>
        <input type="password" id="passwordRegister" name="passwordRegister" required><br><br>
        <button type="submit">Registrarse</button>
    `;
    registerContainer.appendChild(registerForm);

    registerForm.addEventListener("submit", function(event){
        event.preventDefault();

        var username = document.getElementById("usernameRegister").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("passwordRegister").value;

        console.log("Registrando Usuario: " + username);
        console.log("Email: " + email);
        console.log("Contraseña: " + password);

        registerForm.reset();
    });
});
