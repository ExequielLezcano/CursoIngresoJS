function Mostrar()
{
   var numerouno;
   var numerodos;
   


   numerouno = prompt("Ingrese un número","0");
   numerodos = prompt("Ingrese un número","0");

   numerouno = parseInt(numerouno);
   numerodos = parseInt(numerodos);



if(numerouno == numerodos)
{
	document.write(numerouno * numerodos);
}
else
{
	if(numerouno > numerodos)
	{
		document.write(numerouno - numerodos);
	}
    else
    {
	document.write(numerouno + numerodos);
    }
}
 /*
    var numerouno;
    var numerodos;
    var resultado;

    numerouno = prompt("Ingrese un número","0");
    numerodos = prompt("Ingrese un número","0");

    numerouno = parseInt(numerouno);
    numerodos = parseInt(numerodos);

if(numerouno == numerodos)
{
  resultado = numerouno * numerodos;
}
else
{
  if(numerouno > numerodos)
  {
	resultado = numerouno - numerodos;
  }
  else
  {
	resultado = numerouno + numerodos;
  }

  document.write(resultado);
}
*/
 }
