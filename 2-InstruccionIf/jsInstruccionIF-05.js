function mostrar()
{
	let edad;
	edad= document.getElementById("txtIdEdad").value;
	if (edad<13 || edad>17) {
		alert("NO eres adolescente");
	}
}