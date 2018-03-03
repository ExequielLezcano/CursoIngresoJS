//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 4-if");
	var numerouno;
	var numerodos;
	var respuesta;

	numerouno = prompt("Ingrese un numero");
	numerodos = prompt("Ingrese un numero");

	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);

	if(numerouno == numerodos)
	{
       respuesta = numerouno * numerodos;
	}
	else
	{
		if(numerouno > numerodos)
		{
			respuesta = numerouno - numerodos;
		}
		else
		{
			respuesta = numerouno + numerodos;
		}
	}

	document.write(respuesta);


	
}

