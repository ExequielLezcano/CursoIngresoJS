function Mostrar()
{
//tomo la edad  
var Mesdelaño;

Mesdelaño = document.getElementById('mes').value;

switch(Mesdelaño)
{
	case "Febrero":
		alert("Este mes no tiene más de 29 días.");
		break;

	default:
		alert("Este mes tiene 30 días o más.");
		break;
}

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN