function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var positivo = 0;
	var negativo = 0;
	var cantidadpositivo;
	var cantidadnegativo;
	var cantidadceros;
	var cantidadpar;
	var numero;
	var respuesta = "si";

	while(respuesta != "no")
	{
		contador = contador + 1;

		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero))
		{
			numero = prompt("Error, ingrese un numero");
			numero = parseInt(numero);
		}
		 if(numero > 0)
		 {
		 	cantidadpositivo = cantidadpositivo + 1;
		 	positivo = positivo + numero;
		 }
		  else if (numero < 0)
		  {
            cantidadnegativo = cantidadnegativo + 1;
            negativo = negativo + numero;
		  }
		   else
		   {
		   	  cantidadceros = cantidadceros + 1;
		   }

		    if(numero % 2 == 0 && numero != 0)
		    {
               cantidadpar = cantidadpar + 1;
		    }

		respuesta = prompt("Si desea continuar escriba la palabra, si");
	
	}




}//FIN DE LA FUNCIÓN