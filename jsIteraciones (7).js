function Mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';
	var numero;

	while(respuesta == "si")
	{
		numero = prompt("Ingrese un numero");

		numero = parseInt(numero);

		while(isNaN(numero))
		{
			numero = prompt("Error, ingrese un numero");

			numero = parseInt(numero);
		}

		contador = contador + 1;

		acumulador = acumulador + numero;

		respuesta = prompt("Si desea continuar escriba la palabra SI");
	}


document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN