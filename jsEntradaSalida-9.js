/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var Importe;
    var Aumento;
    var Resultado;

    Importe = document.getElementById('sueldo').value;

    Importe = parseInt(Importe);

    Aumento = 110 / 100;

    Resultado = Importe * Aumento;

    document.getElementById('resultado').value = Resultado;
	
}
