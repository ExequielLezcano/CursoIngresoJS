function Mostrar()
{
   var numero;
   var cantidadPares = 0;

   numero = prompt("Ingrese un numero");

   numero = parseInt(numero);

   for(var contador = 1; contador < numero; contador = contador + 1)
	   {
	   		if(contador % 2 == 0)
	   		{
	   			alert(contador);
	   			cantidadPares = cantidadPares + 1;
	   		}
	   }

   	alert("Hay " + cantidadPares + " números pares");



}//FIN DE LA FUNCIÓN