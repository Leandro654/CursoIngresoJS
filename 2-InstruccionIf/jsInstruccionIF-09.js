function mostrar()
{
	let numRandom;

	/*con la funcion Math.floor convierto los numeros randoms que crea Math.random 
	en enteros*/  
	numRandom= Math.floor(Math.random() * 11);
	if (numRandom>=1 && numRandom<=10) {
		alert(numRandom);
	}
}
