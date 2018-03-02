function Mostrar()
{

	var contador = 0;
	//declarar contadores y variables 
	var numero;
	var acumuladorN = 0;
	var acumuladorP = 0;
	var contadorP = 0;
	var contadorN = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	
	var respuesta = "si";

	while(respuesta != "no")
		{
		    numero = prompt("Ingrese un numero");
			
			numero = parseInt(numero);

				if(numero > 0 )
				{
					contadorP++;
					acumuladorP += numero;
				}
				else
				{
					if(numero < 0 )
					{
						contadorN++;
						acumuladorN += numero;
					}
					else
					{
						contadorCeros++;
					}
				}
				if(numero % 2 == 0 && numero != 0)
				{
					contadorPares ++;
				}

		    respuesta = prompt("Ingrese si, si desea continuar");
		}

	document.write("Negativos " + acumuladorN + " Positivos " + acumuladorP + " Cant de positivos " + contadorP + " Cant de Negativos " + contadorN + " cantidad de ceros  " + contadorCeros + " cantidad de pares " + contadorPares + " promedio de positivos " + (acumuladorP / contadorP) + " promedio de negativos " + (acumuladorN / contadorN) + " diferencia de positivos y negativos " + (acumuladorP - acumuladorN));	

	/* alert(acumuladorP / contadorP);
	alert(acumuladorN / contadorN);
	alert(acumuladorP - acumuladorN); */




}//FIN DE LA FUNCIÓN