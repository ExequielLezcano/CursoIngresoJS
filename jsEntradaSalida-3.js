/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var nombre;

	nombre = document.getElementById('elNombre').value;
    /* document.getElementById devuelve el elemento que tiene el atributo
     ID con el valor especificado. sin el .value esta funcion no sirve
	*/
	alert(nombre);
}


