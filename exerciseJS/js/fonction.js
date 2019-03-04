/*function calculate(n1,n2,operation){
	if (operation == "+"){
		return n1+n2
	}
	else{
		if (operation == "-"){
		return n1-n2
	}
	else{
		if (operation == "*"){
		return n1*n2
	}
	else{
		if (operation == "/"){
		return n1/n2
	}
	}
	}
	}
}

var nombre1 = Number(window.prompt("Entrez le 1er nombre"))
var nombre2 = Number(window.prompt("Entrez le 2em nombre"))
var operation = window.prompt("Entrez l'operation")

var result = calculate(nombre1,nombre2,operation)
console.log(nombre1+operation+nombre2+"="+result)
document.write("<h1>"+nombre1+operation+nombre2+"="+result+"</h1>")
*/
///////////////////////////////

var phrase = window.prompt("Entrez un phrase")
var nombre = Number(window.prompt("Entrez le nombre"))

function longueurMax(string, number)
{
	var length = string.length
/*	if (length <= number){
		return true
	}
	else{
		return false
	}*/
	return string.length <= number
}

document.write("<h1>"+longueurMax(phrase, nombre)+"</h1>")



function validateForm(){
	if (validateName() && validateOtherFields()){
		console.log("Form is good")
	}
	else{
		console.log("Error in the form")
	}
}
