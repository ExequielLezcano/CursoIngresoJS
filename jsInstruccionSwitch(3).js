function Mostrar()
{
//tomo la edad  
var Mesdelaño;

Mesdelaño = document.getElementById('mes').value;

switch(Mesdelaño)
{
	case "Febrero":
		alert("Este mes no tiene mas de 29 días.");
		break;

	default:
		alert("Este mes tiene 30 días o mas.");
		break;
}

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN