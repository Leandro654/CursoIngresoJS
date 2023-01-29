/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	
	let nombre;

	////guardo en la variable nombre, el texto que escribio el usuario mediante la ventana prompt
 	nombre=prompt("ingrese su nombre:");			

	//copio el nombre que guardò la variable "nombre" dentro de la caja de texto embebida en la pàgina
	document.getElementById("txtIdNombre").value = nombre;
}

