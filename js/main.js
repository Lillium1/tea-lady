function Usuario(nombre, apellido, correo, direccion, telefono, opcion, test5) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.correo = correo;
	this.direccion = direccion;
	this.telefono = telefono;
	this.opcion = opcion;
	this.test5 = test5;
}

function mostrarData() {
	function validar (){
		var nombre = document.getElementById("nombre").value;
		var apellido = document.getElementById("apellido").value;
		var correo = document.getElementById("correo").value;
		var direccion = document.getElementById("direccion").value;
		var telefono = document.getElementById("telefono").value;
		var opcion = document.getElementById("select").value;

		if (nombre==="" || apellido==="" || correo==="" || direccion==="" || telefono==="") {
			alert("Debe responder todos los campos")
		} 
		for (var i = 0; i < opcion.length; i++) {
			if (opcion[i].value=="") {
		 		alert("Debe elegir opcion");
		 	}	
		}
		if (test5.checked==true) {
			var arr = []
			var datos = new Usuario(nombre, apellido, correo, direccion, telefono, opcion, test5);
			arr.push(datos)

			var imprimir = document.getElementById("clientes");

			arr.forEach(function(el) {
				imprimir.innerHTML= "<div><h2>" + "Datos Usuario" + "</h2></div>" +
				"Nombre: " + el.nombre + "<br>" +
				"Apellido: " + el.apellido + "<br>" +
				"Correo: " + el.correo + "<br>" +
				"Dirección: " + el.direccion + "<br>" +
				"Teléfono: " + el.telefono + "<br>" +
				"Pack de Té: " + el.opcion + "<br>" +
				"Newletter Mensual: " + "Activado"
			});
		}
	}
	validar();
}

	// PARALEX
	$(document).ready(function(){
	      $('.parallax').parallax();
	    });

	// OPCIONES
	$(document).ready(function() {
	    $('select').material_select();
	}); 








