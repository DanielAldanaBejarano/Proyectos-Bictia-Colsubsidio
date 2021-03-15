function reservePlace(){
    let id = document.getElementById('id').value
    let nombres = document.getElementById('nombres').value
    let apellidos = document.getElementById('apellidos').value
    let edad = document.getElementById('edad').value
    let sexo = document.getElementById('sexo').value
    let email = document.getElementById('e-mail').value
    let telefono = document.getElementById('telefono').value
    let acompañantes = document.getElementById('acompañantes').value
    let ladysNight = document.getElementById('ladysNight').checked;

    if ((id == "") || (nombres == "") || (apellidos == "") || (edad == "") || (sexo == "Seleccione uno por favor...") || (email == "") || (telefono == "") || (acompañantes == "")){ 
        swal ("Por favor diligencia todos los campos e inténtalo nuevamente")
    } else if (edad <= 17 || edad >= 80){
        swal ("Prohibimos el ingreso a menores de edad y adultos mayores a 80 años")
    } else if (sexo == "1"){
        swal ("Acceso garantizado. Por favor cancela $30.000 COP")        
    } else if (sexo == "2" && !ladysNight){        
        swal ("Acceso garantizado. Por favor cancela $25.000 COP")               
    } else if ((sexo == "2") && ladysNight){        
        swal ("Acceso garantizado. Es Ladys Night: ¡Diviértete, entras gratis!")     
}

clear()

function clear(){
    document.getElementById('id').value = ""
    document.getElementById('nombres').value = ""
    document.getElementById('apellidos').value = ""
    document.getElementById('edad').value = ""
    document.getElementById('sexo').value = ""
    document.getElementById('e-mail').value = ""
    document.getElementById('telefono').value = ""
    document.getElementById('acompañantes').value = ""
}

}