function Mostrar()
{
//tomo la edad  
  var Edad;

  Edad = document.getElementById('edad').value;

  if(Edad >= 18)
	  {
	  	alert("Usted es mayor de edad");
	  }
	  else
	  {
	  	 if(Edad >= 13)
	  	 {
	  	 	 alert("Eres adolescente");
	  	 }
	  	  else
	  	  {
	  	  	 alert("Eres un niño");
	  	  }
	  }



}//FIN DE LA FUNCIÓN