//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 2-EntradaSalida");
	var Importe;
	var Iva;
	var ImporteFinal;

	Importe = prompt("Ingrese un importe");

	Importe = parseInt(Importe);

	Iva = 121 / 100;

	ImporteFinal = Importe * Iva;

	document.getElementById('importe').value = ImporteFinal;
	
}

