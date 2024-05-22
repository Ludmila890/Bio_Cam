document.addEventListener("DOMContentLoaded", function() {
    var loginContainer = document.getElementById("loginContainer");

    var loginForm = document.createElement("form");
    loginForm.id = "login";
    loginForm.innerHTML = `
        <label for="usernameLogin">Usuario:</label>
        <input type="text" id="usernameLogin" name="usernameLogin" required><br><br>
        <label for="passwordLogin">Contraseña:</label>
        <input type="password" id="passwordLogin" name="passwordLogin" required><br><br>
        <button type="submit">Iniciar Sesión</button>
    `;
    
    // Verificar si se encontró el contenedor antes de agregar el formulario
    if (loginContainer) {
        loginContainer.appendChild(loginForm);
    } else {
        console.error("No se encontró el contenedor 'loginContainer'.");
    }

    loginForm.addEventListener("submit", function(event){
        event.preventDefault();

        var username = document.getElementById("usernameLogin").value;
        var password = document.getElementById("passwordLogin").value;

        console.log("Iniciando sesión con Usuario: " + username);
        console.log("Contraseña: " + password);

        loginForm.reset();
    });
});
