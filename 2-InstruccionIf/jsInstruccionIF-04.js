function mostrar()
{
	let edad;
	edad= document.getElementById("txtIdEdad").value;

	/*si edad es mayor igual a 13 "Y"(&&) menor igual a 17, se ejecuta el 
	codigo de lineas que està en if*/
	if (edad>=13 && edad<=17) {
		alert("Eres adolescente");
	}
}