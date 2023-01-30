function mostrar()
{
	let edad, EstadoCivil;
	edad= document.getElementById("txtIdEdad").value;
	EstadoCivil= document.getElementById("estadoCivil").value;

	/* dice que si la edad es menor(<) a 18 y el estado civil es distinto de(!==) "Soltero",
	se muestra en la ventana de alert "Es muy pequeño para NO ser soltero"*/
	if (edad<18 && EstadoCivil!=="Soltero") {
		alert("Es muy pequeño para NO ser soltero");
	}
}