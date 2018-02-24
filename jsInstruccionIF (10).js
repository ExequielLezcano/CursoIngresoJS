function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
  var Nota;

  Nota = Math.floor(Math.random() * 10) + 1;

  if(Nota >= 9)
	  {
	  	alert("Excelente " + Nota);
	  }
	  else
	  {
	  	if(Nota > 4 )
	  	{
	  		alert("Aprobó " + Nota);
	  	}
	  	 else
	  	 {
	  	 	alert("Vamos, la proxima se puede " + Nota);
	  	 }
	  }



}//FIN DE LA FUNCIÓN