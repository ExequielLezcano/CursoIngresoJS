function Mostrar()
{
//tomo la edad  
var Mesdelaño;

Mesdelaño = document.getElementById('mes').value;

switch(Mesdelaño)
{
	case "Julio":
	case "Agosto":
		alert("Abrigate que hace frio");
		break;

	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
		alert("Ya pasamos el frio, ahora calor");
		break;

	default:
		alert("Falta para el Invierno");
		break;
}






}//FIN DE LA FUNCIÓN