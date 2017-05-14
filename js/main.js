function mostrarData(){
	function validar (){
		function nombre(){
			// llamar y tomar el dato del campo "nombre"
			var txtNombre = document.getElementById("nombre").value;
			// validar que el nombre no este vacio
			if(txtNombre==""){
				alert("Error: debe ingresar el campo solicitado");
			} 
			// validar que no sean numeros
			if (/[0-9]/.test(nombre)) {
				alert("Error: deben ser solo letras");
			}
		}
		nombre();

		function apellido(){
			//llamar y tomar el dato del campo "apellido" 
			var txtApellido = document.getElementById("apellido").value;
			//validar que el nombre no este vacio
			if(txtApellido==""){
				alert("Error: debe ingresar el campo solicitado");
			} 
			// validar que no sean numeros
			if (/[0-9]/.test(nombre)) {
				alert("Error: deben ser solo letras");
			}
		}
		apellido();

		function direccion(){
			//llamar y tomar el dato del campo "apellido" 
			var txtDireccion = document.getElementById("direccion").value;
			//validar que el nombre no este vacio
			if(txtDireccion==""){
				alert("Error: debe ingresar el campo solicitado");
			} 
		}
		direccion();

		function correo(){
			var txtCorreo = document.getElementById("correo").value;
			// no vacio
			if(txtCorreo=="" || txtCorreo==undefined || txtCorreo.length==0){
				alert("Error: debe ingresar el campo solicitado");
			// que corresponga al esquema de correo
			} if (txtCorreo!=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/) {
				alert("Error: debe ingresar un correo valido");
			}
		}
		correo();

		function listaOpciones(){
			// tag name llama etiqueta de html ej: h1
			var seleccion = document.getElementsByTagName("select"); //opcion 1
			// for recorrer las opciones para comprobar que si value es 0 tirar error
			for (var i = 0; i < seleccion.length; i++) {
			 	if (seleccion[i].value=="0") {
			 		alert("Debe elegir opcion");
			 	}
			} 
		}
		listaOpciones();
	}
	// PARALEX
	$(document).ready(function(){
	      $('.parallax').parallax();
	    });

	// OPCIONES
	$(document).ready(function() {
	    $('select').material_select();
	});

}

