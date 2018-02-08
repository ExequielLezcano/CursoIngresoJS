/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	//Defino una variable
	var nombre;

	//alert(nombre); Sale Indefinido, se debe cargar las variables primero

	nombre = prompt("Ingrese su nombre","Pepe Grillo");

	alert(nombre);
	/*

	nombre = "Exequiel";

	alert(nombre);
	alert("nombre");
    */
	//var person = prompt("Ingrese su nombre","Ana Cleta");  alert solo muestra un mensaje o variable
	//El Prompt devuelve la variable, primero se escribe la Variable y se pone el signo = luego va el prompt("Lo que sea","Esto aparece escrito en la caja de texto");

}

