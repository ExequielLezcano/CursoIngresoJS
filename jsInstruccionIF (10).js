function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota = Math.floor(Math.random() *10) + 1;

	if(nota >= 9)
		{
			alert("Excelente " + nota);
		}
		else
		{
			if(nota > 4)
			{
				alert("Aprobó " + nota);
			}
			else
			{
				alert("Vamos, la proximo se puede " + nota);
			}
		}

}//FIN DE LA FUNCIÓN