function Mostrar()
{

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var numero;
	var respuesta = 'si';

	while(respuesta == "si")
	{
       numero = prompt("Ingrese un numero");

       numero = parseInt(numero);

       while(isNaN(numero))
       {
       	 numero = prompt("Error, ingrese un numero");

       	 numero = parseInt(numero);
       }

       if(numero > 0)
       {
       	 positivo = positivo + numero;
       }
       else
       {
       	 negativo = negativo * numero;
       }

       respuesta = prompt("Si desea continuar escriba SI");
	}


document.getElementById('suma').value = positivo;
document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN