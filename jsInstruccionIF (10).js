function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numerorandom;

	numerorandom = Math.floor((Math.random() * 10) + 1);

if(numerorandom >= 9)
{
	alert("Excelente " + numerorandom);
}
else
{
	if(numerorandom > 3)
	{
		alert("Aprobó " + numerorandom);
	} 
 	else
   	{
   	  alert("Vamos, la proxima se puede ");
   	}
}
	



}//FIN DE LA FUNCIÓN