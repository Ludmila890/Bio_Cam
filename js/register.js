document.addEventListener("DOMContentLoaded", function() {
    var registerLink = document.getElementById("registerLink");
    var registerContainer = document.getElementById("registerContainer");

    registerLink.addEventListener("click", function(event) {
        event.preventDefault();
        registerContainer.style.display = "block";
    });

    var registerForm = document.createElement("form");
    registerForm.id = "registerForm";
    registerForm.innerHTML = `
        <p>
            <label for="usernameRegister">Usuario:</label>
            <input type="text" id="usernameRegister" name="usernameRegister" required>
        </p>
        <p>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </p>
        <p>
            <label for="passwordRegister">Contraseña:</label>
            <input type="password" id="passwordRegister" name="passwordRegister" required>
        </p>
        <p class="sign-in-btn">
            <button type="submit" class="button-primary">Registrarse</button>
        </p>
    `;
    registerContainer.appendChild(registerForm);

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var username = document.getElementById("usernameRegister").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("passwordRegister").value;

        var formData = {
            username: username,
            email: email,
            password: password
        };

        // Simulando una respuesta de API
        setTimeout(() => {
            console.log("Usuario registrado correctamente:", formData);
            alert("Usuario registrado correctamente");
            registerForm.reset();
            registerContainer.style.display = "none"; // Ocultar el formulario de registro después del registro
        }, 1000);

        /*
        // Código para enviar datos a una API real
        fetch("URL_DEL_API", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Ocurrió un error al registrar el usuario");
            }
            return response.json();
        })
        .then(data => {
            console.log("Usuario registrado correctamente:", data);
            registerForm.reset();
            registerContainer.style.display = "none"; // Ocultar el formulario de registro después del registro
        })
        .catch(error => {
            console.error("Error:", error);
        });
        */
    });
});
