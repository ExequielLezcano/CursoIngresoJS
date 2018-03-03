//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 1-EntradaSalida");
	var base;
	var lado;
	var perimetro;

	base = document.getElementById('lado').value;

	base = parseInt(base);

	lado = 3;

	perimetro = base * 3;

	alert("El perimetro es " + perimetro);
	
}

