function enviar(){

    document.getElementById("nombreID").style.borderColor = `Black`;
    document.getElementById("apellidoID").style.borderColor = 'Black';
    document.getElementById("emailID").style.borderColor = 'Black';
    document.getElementById("mensajeID").style.borderColor = 'Black';

    let nombre = document.getElementById("nombreID").value;
    let apellido = document.getElementById("apellidoID").value;
    let email = document.getElementById("emailID").value;
    let mensaje = document.getElementById("mensajeID").value;

    
    if(nombre == ""){
        console.log("nombre vacío")
        document.getElementById("nombreID").innerHTML = `Campo Nombre Vacío`;
        document.getElementById("nombreID").style.borderColor = "red";
    }else if(apellido == ""){
        console.log("apellido vacío")
        document.getElementById("apellidoID").innerHTML = `Campo Apellido Vacío`;
        document.getElementById("apellidoID").style.borderColor = "red";
    }else if(email == ""){
        console.log("email vacío")
        document.getElementById("emailID").innerHTML = `Campo Email Vacío`;
        document.getElementById("emailID").style.borderColor = "red";
    }else if (!validarEmail(email)){
        console.log("email invalido")
        document.getElementById("emailID").innerHTML = `Formato de Email Inválido`;
        document.getElementById("emailID").style.borderColor = "red";
    }else if (mensaje == ""){
        console.log("mensaje vacío")
        document.getElementById("mensajeID").innerHTML = `Campo Mensaje Vacío`;
        document.getElementById("mensajeID").style.borderColor = "red";
    }else{
        document.getElementById("nombreID").style.borderColor = `Blue`;
        document.getElementById("apellidoID").style.borderColor = 'Blue';
        document.getElementById("emailID").style.borderColor = 'Blue';
        document.getElementById("mensajeID").style.borderColor = 'Blue';
    }

}

function validarEmail(email){

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email)

}