/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1, num2, suma;

	num1= document.getElementById("txtIdNumeroUno").value;
	num1=parseInt(num1);
	num2= document.getElementById("txtIdNumeroDos").value;
	num2= parseInt(num2);
	suma= num1 + num2;
	alert("la suma es: "+suma);
}

function restar()
{
	let num1, num2, resta;

	num1= document.getElementById("txtIdNumeroUno").value;
	num1=parseInt(num1);
	num2= document.getElementById("txtIdNumeroDos").value;
	num2= parseInt(num2);
	resta= num1 - num2;
	alert("la resta es: "+resta);
}

function multiplicar()
{ 
	let num1, num2, mult;

	num1= document.getElementById("txtIdNumeroUno").value;
	num1=parseInt(num1);
	num2= document.getElementById("txtIdNumeroDos").value;
	num2= parseInt(num2);
	mult= num1 * num2;
	alert("la multiplicaciòn es: "+mult);
}

function dividir()
{
	let num1, num2, div;

	num1= document.getElementById("txtIdNumeroUno").value;
	num1=parseInt(num1);
	num2= document.getElementById("txtIdNumeroDos").value;
	num2= parseInt(num2);
	div= num1 / num2;
	alert("la divisiòn es: "+div);
}

