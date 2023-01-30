function mostrar()
{
	let edad;
	edad= document.getElementById("txtIdEdad").value;
	if (edad>=18) {
		alert("Eres mayor de edad");
	}
	else if (edad>=13 && edad<=17) {
		alert("Eres adolescente");
	}
	else {
		alert("eres un niño");
	}
}