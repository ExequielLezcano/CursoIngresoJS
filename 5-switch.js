//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 5-Switch");
	var Mesdelaño;

	Mesdelaño = prompt("Ingrese un mes");

	Mesdelaño = Mesdelaño.toLowerCase();

	switch(Mesdelaño)
	{
		case "enero":
		case "febrero":
			alert("Veranito");
			break;

		default:
			alert("Extraño Enero y Febrero");
			break;
	}
	
}

