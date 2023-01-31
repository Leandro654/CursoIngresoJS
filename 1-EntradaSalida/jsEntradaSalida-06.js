/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1, num2, suma;

	num1= document.getElementById("txtIdNumeroUno").value;
	//transformo el valor de num1 a numero entero
	num1=parseInt(num1);

	num2= document.getElementById("txtIdNumeroDos").value;
	//transformo el valor de num2 a numero entero 
	num2= parseInt(num2);

	//sumo num1 + num2
	suma= num1 + num2;
	alert("la suma es: "+suma);
}

