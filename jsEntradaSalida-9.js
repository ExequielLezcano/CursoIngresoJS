/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var elsueldo;
	var aumento;
	var elresultado;

	elsueldo = document.getElementById('sueldo').value;

	elsueldo = parseInt(elsueldo);

	aumento = 110 / 100;

	elresultado = elsueldo * aumento;

	document.getElementById('resultado').value = elresultado;

	/*Pequeño truco: si pide aumento/descuento de tanto% suma ese
	  mismo a 100% y luego dividilo por 100% para obtener el 
	  aumento/descuento
	*/

	
}
