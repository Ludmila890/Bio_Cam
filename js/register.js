document.addEventListener("DOMContentLoaded", function() {
    // Obtener el contenedor del formulario de registro
    var registerContainer = document.getElementById("registerContainer");

    // Crear el formulario de registro y agregarlo al contenedor
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

    // Agregar el evento de envío al formulario de registro
    registerForm.addEventListener("submit", function(event){
        event.preventDefault(); // Evitar el envío por defecto del formulario
        
        // Aquí puedes agregar la lógica para el registro de usuario
        var username = document.getElementById("usernameRegister").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("passwordRegister").value;
        
        // Por ahora, solo imprimirá los valores en la consola
        console.log("Registrando Usuario: " + username);
        console.log("Email: " + email);
        console.log("Contraseña: " + password);

        // Limpia los campos del formulario después del envío
        registerForm.reset();
    });
});
