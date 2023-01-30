function mostrar()
{
let edad, EstadoCivil;
edad= document.getElementById("txtIdEdad").value;
EstadoCivil= document.getElementById("estadoCivil").value;
if (edad>=18 && EstadoCivil=="Soltero") {
    alert("Es soltero y no es menor");
}
}