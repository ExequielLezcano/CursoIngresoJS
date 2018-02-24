/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
   var Sueldo;
   var Aumento;
   var Resultado;

   Sueldo = document.getElementById('sueldo').value;

   Sueldo = parseInt(Sueldo);

   Aumento = 110 / 100;

   Resultado = Sueldo * Aumento;

   document.getElementById('resultado').value = Resultado;
	
}
