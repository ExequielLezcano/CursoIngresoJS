function Mostrar()
{
//tomo la edad  
  var edad;
  var EstadoCivil;

  edad = document.getElementById('edad').value;
  EstadoCivil = document.getElementById('estadoCivil').value;

  if(edad < 18 && EstadoCivil != "Soltero")
  {
  	 alert("Es demaciado pequeño para no ser soltero");
  }	
	


}//FIN DE LA FUNCIÓN