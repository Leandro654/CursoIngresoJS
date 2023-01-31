/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let importe, aumento;
	importe= parseInt(document.getElementById("txtIdSueldo").value);
	
	//consigo el 10% del importe ingresado por el usuario y lo guardo en la variable aumento
	aumento= importe * 0.1;

	//sumo el importe con el aumento y guardo la suma en aumento
	aumento+= importe;

	//muestro el importe con un aumento del 10% en el cuadro de texto
	document.getElementById("txtIdResultado").value= aumento;
}
