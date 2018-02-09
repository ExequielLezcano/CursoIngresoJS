/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;

	nombre = prompt("Ingrese su nombre","Arokh");

	document.getElementById('elNombre').value = nombre;
	/* Luego de tomar el dato por prompt uso el document.getElementById().value 
	   y coloco la variable en el lado derecho para que esta aparezca en la
	   caja de texto luego de ingresar el nombre con el cuadro de dialogo de prompt

	*/
}

