function Mostrar()
{
//tomo la edad  
   var edad;
   var estadocivil;

   edad = document.getElementById('edad').value;
   estadocivil = document.getElementById('estadoCivil').value;

if(edad >= 18 && estadocivil == "Soltero")
{
	 alert("Eres mayor y eres soltero");
}



}//FIN DE LA FUNCIÓN