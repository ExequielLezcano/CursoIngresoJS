function Mostrar()
{
  var numero;
  var contador = 0;

  numero = prompt("Ingrese un numero");

  numero = parseInt(numero);

  for(var i = 1; i <= numero; i = i + 1)
	  {
	  	 if(numero % i == 0)
	  	 {
	  	 	 contador = contador + 1;
	  	 }
	  }

  if(contador == 2)
  {
  	alert("El numero es primo");
  }
  else
  {
  	alert("El numero NO es primo");
  }



}//FIN DE LA FUNCIÓN