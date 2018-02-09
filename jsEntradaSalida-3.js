/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	/* Por cada JS hay un HTML que contiene los ID para usarlos en document.getelementbyid
       Hay 2 formas de tomar datos, prompt y document.getelementbyid
       prompt = ventana emergente
       document.getElementById = guarda el dato en la variable
	*/

	var nombre;

	nombre = document.getElementById('elNombre').value;

	alert(nombre);


}


