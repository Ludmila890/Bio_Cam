document.getElementById("login").addEventListener("submit", function(event){
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    // Obtener los valores del formulario de inicio de sesión
    var username = document.getElementById("usernameLogin").value;
    var password = document.getElementById("passwordLogin").value;

    // Aquí puedes agregar la lógica para verificar el nombre de usuario y la contraseña
    // Por ahora, solo imprimirá los valores en la consola
    console.log("Iniciando sesión con Usuario: " + username);
    console.log("Contraseña: " + password);

    // Limpia los campos del formulario después del envío
    document.getElementById("login").reset();
});

document.getElementById("register").addEventListener("submit", function(event){
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    // Obtener los valores del formulario de registro
    var username = document.getElementById("usernameRegister").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("passwordRegister").value;

    // Aquí puedes agregar la lógica para registrar al usuario
    // Por ahora, solo imprimirá los valores en la consola
    console.log("Registrando Usuario: " + username);
    console.log("Email: " + email);
    console.log("Contraseña: " + password);

    // Limpia los campos del formulario después del envío
    document.getElementById("register").reset();
});
