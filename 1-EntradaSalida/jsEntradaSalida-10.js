/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe, descuento;
	importe= document.getElementById("txtIdImporte").value;
	importe= parseInt(importe);

	//consigo el 25% del importe ingresado por el usuario y lo guardo en la variable descuento
	descuento= importe * 0.25;

	//resto el importe con el descuento y guardo la resta en descuento
	descuento= importe - descuento;

	//muestro el importe con un descuento del 25% en el cuadro de texto
	document.getElementById("txtIdResultado").value= descuento
}
