document.addEventListener("DOMContentLoaded", function() {
    // Obtener el contenedor del formulario de inicio de sesión
    var loginContainer = document.getElementById("loginContainer");

    // Crear el formulario de inicio de sesión y agregarlo al contenedor
    var loginForm = document.createElement("form");
    loginForm.id = "login";
    loginForm.innerHTML = `
        <label for="usernameLogin">Usuario:</label>
        <input type="text" id="usernameLogin" name="usernameLogin" required><br><br>
        <label for="passwordLogin">Contraseña:</label>
        <input type="password" id="passwordLogin" name="passwordLogin" required><br><br>
        <button type="submit">Iniciar Sesión</button>
    `;
    loginContainer.appendChild(loginForm);

    // Agregar el evento de envío al formulario de inicio de sesión
    loginForm.addEventListener("submit", function(event){
        event.preventDefault(); // Evitar el envío por defecto del formulario
        
        // Aquí puedes agregar la lógica para el inicio de sesión
        var username = document.getElementById("usernameLogin").value;
        var password = document.getElementById("passwordLogin").value;
        
        // Por ahora, solo imprimirá los valores en la consola
        console.log("Iniciando sesión con Usuario: " + username);
        console.log("Contraseña: " + password);

        // Limpia los campos del formulario después del envío
        loginForm.reset();
    });
});
