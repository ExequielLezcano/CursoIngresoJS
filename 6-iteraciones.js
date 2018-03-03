//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 6-iteraciones");
	var ImporteVentas;
	var contador = 0;
	var mayorimporte;
	var menorimporte;

	while(contador < 7)
	{
		contador++;

		ImporteVentas = prompt("Ingrese el importe");

		ImporteVentas = parseInt(ImporteVentas);

		while(isNaN(ImporteVentas) || ImporteVentas <= 0)
		{
			ImporteVentas = prompt("Ingrese un importe valido");

			ImporteVentas = parseInt(ImporteVentas);
		}

		if(contador == 1)
		{
	       mayorimporte = ImporteVentas;
	       menorimporte = ImporteVentas;
		}
		else
		{
			if(ImporteVentas > mayorimporte)
			{
	           mayorimporte = ImporteVentas;
			}

			if(ImporteVentas < menorimporte)
			{
               menorimporte = ImporteVentas;		
			}
		}

	}

	document.write("Mayor importe " + mayorimporte + " Menor importe " + menorimporte);




	
}

