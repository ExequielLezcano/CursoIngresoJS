function Mostrar()
{
   var numero;
   var contador = 0;

   numero = prompt("Ingrese un numero");

   for(var i = 2; i <= numero; i++)
   {
   	  if(numero % i == 0)
   	  {
   	  	 if(numero / i == 1)
   	  	 {
   	  	 	 alert(numero + " Es primo");
   	  	 }
   	  	  else
   	  	  {
   	  	  	 alert("No es primo");
   	  	  	 break;
   	  	  }
   	  }
   }



}//FIN DE LA FUNCIÓN