function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	  /* Math.random(); genera numeros aleatorios del 0,0000
	     hasta el 0,999999 sin llegar al 1

	     Math.floor((Math.random() * 10) + 1); genera numeros aleatorios
	     del 1 al 10

	  */ 
var numerorandom;

numerorandom = Math.floor((Math.random() * 10) + 1);

alert(numerorandom);

}//FIN DE LA FUNCIÓN