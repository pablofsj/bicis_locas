function validateForm(){
	/* Escribe tú código aquí */
	
	var nombre=document.getElementById("name");
	var apellido=document.getElementById("lastname");
	var correo=document.getElementById("input-email");
	var clave=document.getElementById("input-password");


	// Validar que campos no estén vacíos

	if(nombre.value== "" || apellido.value== "" || correo.value== "" || clave.value== ""){
		alert("Debes rellenar los campos");
		return;
	}

	//Validar letras A-Z en nombre

	if(nombre.value != nombre.value.match(/^[a-zA-Z]+$/)){
		alert('Ingrese solo letras en el campo nombre');
		return;
	}

	//Validar letras A-Z en apellido

	if(apellido.value != apellido.value.match(/^[a-zA-Z]+$/)){
		alert('Ingrese solo letras en el campo apellido');
		return;
	}


	//Validar mayúscula en nombre

	if(nombre.value[0] != nombre.value[0].toUpperCase()){
		alert('Su nombre debe comenzar con mayúscula');
		return;
	}

	//Validar mayúscula en apellido

	if(apellido.value[0] != apellido.value[0].toUpperCase()){
		alert('Su apellido debe comenzar con mayúscula');
		return;
	}


	//Validar correo bien escrito

	if(correo.value != correo.value.match(/^\w+@\w+\.\w+$/)){
		alert('Ingrese su correo de forma correcta');
		return;
	}



	//Clave debe tener al menos 6 caracteres

	if(clave.value.length < 6){
		alert('Su clave debe tener al menos 6 caracteres');
		return;
	}

	//El campo password no puede ser igual a "password" ó "123456" ó "098754"

	if(clave.value == 'password' || clave.value == '123456' || clave.value == '098754'){
		alert('Su clave no puede ser igual a "password" ó "123456" ó "098754"');
		return;
	}













	
	


	



	

}