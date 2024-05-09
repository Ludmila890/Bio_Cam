function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var motivo = document.getElementById('motivo').value;
    var mensaje = document.getElementById('mensaje').value;
    
    if (nombre.trim() === '' || email.trim() === '' || motivo === '' || mensaje.trim() === '') {
        alert('Todos los campos son obligatorios');
        return false;
    }
    
    return true;
}
