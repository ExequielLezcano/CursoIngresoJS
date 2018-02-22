/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var Importe;
	var Descuento;
	var Resultado;

	Importe = document.getElementById('importe').value;

	Importe = parseInt(Importe);

	Descuento = 125 / 100;

	Resultado = Importe / Descuento;

	document.getElementById('resultado').value = Resultado;
}
