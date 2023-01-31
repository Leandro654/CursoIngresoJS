function mostrar()
{
	let mes;
	mes= document.getElementById("txtIdMes").value;
	switch (mes) {

		//si el mes que eligió el usuario es alguno de estos, se ejecuta alert("tiene 30 días")
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("tiene 30 días");

		//con break dejo de ejecutar las siguientes lineas de códigos
			break;

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("tiene 31 días");
			break;

		/*en caso de que el valor de la variable "mes" no coincida con ninguna de las 
		cajas anteriores, se ejecuta lo que está dentro de default*/
		default:
			alert("tiene 28 días");	
	}
}