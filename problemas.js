function limpiarfo(){
	document.getElementById("miForm").reset();
}
var velocidad = function(){
	var m = parseFloat(document.getElementById("m").value);
	var s = parseFloat(document.getElementById("s").value);
	var resultado = m/s;
	return resultado;
}
function limpiarfor(){
	document.getElementById("miFor").reset();
}
var derivar = function(){
	var de= parseInt(document.getElementById("de").value);
	var ex= parseInt(document.getElementById("ex").value);
	derivada= ex*de;
	exponente= ex-1;
	return "La f(x) de " +de+ "x^"+ex+ " igua a: " +derivada+ "x^" +exponente;
}