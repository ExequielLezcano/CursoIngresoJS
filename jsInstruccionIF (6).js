function Mostrar()
{
//tomo la edad  
   var edad;

   edad = document.getElementById('edad').value;

   if(edad < 13)
   {
   	alert("Usted es un niño");
   }

   if(edad > 12 && edad < 18)
   {
   	alert("Usted es adolescente");
   }

   if(edad > 17)
   {
   	alert("Usted es mayor de edad");
   }

   /* if(edad < 13)
   {
   	alert("Usted es un niño");

   }else
   {
	if(edad > 17)
	{
	  alert("Usted es mayor");

	}else
	{
	  alert("Usted es adolescente");
	}
   }
         La segunda forma de realizar el ejercicio y
         la mas conveniente
   */


  



}//FIN DE LA FUNCIÓN