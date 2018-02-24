function Mostrar()
{
//tomo la edad  
  var Edad;
  var EstadoCivil;

  Edad = document.getElementById('edad').value;
  EstadoCivil = document.getElementById('estadoCivil').value;

  if(Edad >= 18 && EstadoCivil == "Soltero")
	  {
	  	alert("No es menor y es soltero");
	  }



}//FIN DE LA FUNCIÓN