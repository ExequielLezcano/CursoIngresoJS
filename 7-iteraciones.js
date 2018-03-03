//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 7-iteraciones");
	var nota;
	var sexo;
	var acumulador = 0;
	var contador = 0;

	nota = prompt("Ingrese una nota");
	sexo = prompt("Ingrese f o m");

	for(var i = 0; i < 6; i++)
	{
			while(sexo != "f" && sexo != "m")
			{
				sexo = prompt("Ingrese f o m");
			}

			while(nota < 0 || nota > 10)
			{
				nota = prompt("Ingrese una nota");

				nota = parseInt(nota);
			}

			acumulador += nota;

			if(i == 0)
			{
				minimo = nota;
			}
			else
			{
				if(nota < minimo)
				{
					minimo = nota;
				}
			}

			if(nota > 5 && sexo == "m")
			{
				contador++;
			}
	}

	document.write("Promedio nota " + (acumulador / nota) + " Nota mas baja " + "Varones con nota mayor a 6 " + contador);
	
}

