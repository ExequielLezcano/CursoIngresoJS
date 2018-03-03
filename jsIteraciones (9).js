function Mostrar()
{

	var contador = 0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta = 'si';

	while(respuesta != 'no')
		{
			numero = prompt("Ingrese un numero");

			numero = parseInt(numero);

			while(isNaN(numero))
			{
				numero = prompt("Error, ingrese un numero");

				numero = parseInt(numero);
			}

			if(contador == 0)
			{
				contador = contador + 1;

				maximo = numero;

				minimo = numero;
			}
			else
			{
				if(numero > maximo)
				{
					maximo = numero;
				}

				if(numero < minimo)
				{
					minimo = numero;
				}
			}
		    respuesta = prompt("Si desea continuar ingrese la palabra Si");
		}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;




}//FIN DE LA FUNCIÓN