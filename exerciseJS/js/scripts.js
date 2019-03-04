/*var nombre1 = window.prompt("Entrez un nombre") // affichage d'une zone dans la quelle un nombre peut etre ecris
nombre1 = Number(nombre1)
console.log(nombre1)
var nombre2 = window.prompt("Entrez un autre nombre")
nombre2 = Number(nombre2)
var somme = nombre1 + nombre2
console.log(somme)

if (somme > 200) { console.log("La somme est superieure a 200")}
else { console.log("La somme est inferieur ou égale a 200")}*/

var mdp1 = window.prompt("Entrez un mot de passe") // affichage d'une zone dans la quelle un nombre peut etre ecris

	if (mdp1.length <= 15) 
	{var mdp2 = window.prompt("Entrez un mot de passe encore une fois")
		if (mdp1 !== mdp2) 
		{console.log("Error: Les mots de passe ne correspondent pas")}
		}
		if (mdp1 === mdp2) {document.write("<h1>Vous etes connecté(s)</h1>")}
	else (console.log("Error: Les mots de passe est trop long" ))