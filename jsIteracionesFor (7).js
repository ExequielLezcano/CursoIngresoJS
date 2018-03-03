function Mostrar()
{
   var numero;
   var cantidadDivisores = 0;

   numero = prompt("Ingrese un numero");

   numero = parseInt(numero);

   for(var contador = 1; contador <= numero; contador = contador + 1)
	   {
	   		if(numero % contador == 0)
	   		{
	   			alert(contador);
	   			cantidadDivisores = cantidadDivisores + 1;
	   		}
	   }

   alert("Hay " + cantidadDivisores + " numeros divisores");



}//FIN DE LA FUNCIÓN