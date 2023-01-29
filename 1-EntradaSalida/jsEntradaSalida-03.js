/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;
	
	//tomo el valor(.value) "id"(txtIdNombre) del archivo .html 
	nombre = document.getElementById("txtIdNombre").value;
	alert(nombre);
}


