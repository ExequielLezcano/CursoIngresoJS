//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 3-EntradaSalida");
	var Largo;
	var Ancho;
	var Perimetro;

	Largo = document.getElementById('largo').value;
	Ancho = document.getElementById('ancho').value;

	Largo = parseInt(Largo);
	Ancho = parseInt(Ancho);

	Perimetro = (Largo * 2 + Ancho * 2) * 6;

	alert("El perimetro es " + Perimetro);
	
}

