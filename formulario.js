const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('correo');
const send = document.getElementById('send');
const form = document.getElementById('contacto');
const parrrafo = document.getElementById('warnings');

// FUNCION BOTON ENVIAR
form.addEventListener('submit', e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrrafo.innerHTML = ""
    // NOMBRE
    if(nombre.value.length < 2){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    
    // APELLIDO
    if(apellido.value.length < 2){
        warnings += `El Apellido no es valido <br>`
        entrar = true
    }
    // EMAIL
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += `El Email no es valido <br>`
        entrar = true
    }
    // CONDICION: si es correcto, envia, sino INVALIDACION
    parrrafo.innerHTML = ""

    if(entrar){
        parrrafo.innerHTML = warnings
    }else{
        parrrafo.style.color = 'green'
        parrrafo.style.fontSize = '0.9rem'
        parrrafo.innerHTML = "MENSAJE ENVIADO!"
        
    }


})

