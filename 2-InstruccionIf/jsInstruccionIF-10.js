function mostrar()
{
	let notaRandom;
	notaRandom= Math.floor(Math.random()*11);
	if (notaRandom==9 || notaRandom==10) {
		alert("EXCELENTE");
	}
	else if (notaRandom>=4 && notaRandom<=8) {
		alert("APROBÓ");
	}
	else{
		alert("Vamos, la proxima se puede");
	}
}
