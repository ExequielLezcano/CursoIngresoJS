function Mostrar()
{

	var contador = 0;
	//declarar contadores y variables 
	var numero;
	var acumuladorN = 0;
	var acumuladorP = 0;
	var cantidadP = 0;
	var cantidadN = 0;
	var cantidadCeros = 0;
	var cantidadPares = 0;
	var respuesta = "si";

	while(respuesta != "no")
	{
		numero = prompt("Ingrese un numero");

		numero = parseInt(numero);

		while(isNaN(numero))
		{
			numero = prompt("Error, ingrese un numero");

			numero = parseInt(numero);
		}

		contador = contador + 1;

		if(numero < 0)
		{
			cantidadN = cantidadN + 1;
			acumuladorN = acumuladorN + numero;
		}
		else
		{
			if(numero > 0)
			{
				cantidadP = cantidadP + 1;
				acumuladorP = acumuladorP + numero;
			}
			else
			{
				cantidadCeros = cantidadCeros + 1;
			}
		}

		if(numero % 2 == 0 && numero != 0)
		{
			cantidadPares = cantidadPares + 1;
		}

		respuesta = prompt("Si desea continuar, escriba SI");
	}

	document.write("Suma de negativos " + acumuladorN + " Suma de positivos " + acumuladorP + " Cantidad de positivos " + cantidadP + " Cantidad de Negativos " + cantidadN + " Cantidad de Ceros " + cantidadCeros + " Cantidad de numero Par " + cantidadPares + " Promedio positivo " + (acumuladorP / cantidadP) + " Promedio negativo " + (acumuladorN / cantidadN) + " Diferencia positivo/negativo " + (acumuladorP / acumuladorN));




}//FIN DE LA FUNCIÓN