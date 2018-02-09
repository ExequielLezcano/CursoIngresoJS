/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;

	nombre = prompt("ingrese su nombre","Chaja");

	document.getElementById('elNombre').value = nombre;

	/* Aca tomo el dato con prompt y luego escribo el document con la variable a la derecha
       Al final de cada Document.getelementbyid lleva .value	

	*/
}

