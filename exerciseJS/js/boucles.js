for (var essay = 1; essay <= 3 ; essay++) {
	var mdp1 = window.prompt("Entrez le 1er mot de passe")
	var mdp2 = window.prompt("Re-entrez le mot de passe")
	if (mdp2 == mdp1)
	{
	alert("Vous etes connecté(e)")
	break
	}	
	if (essay == 3)
	{alert("bloque")}
}

//another version (plus long)
/*var essay = 1

do{
var mdp1 = window.prompt("Entrez le 1er mot de passe")
var mdp2 = window.prompt("Re-entrez le mot de passe")
	if (mdp1 == mdp2) {
	console.log("bien!")
	break;
	}
	else{
		essay = essay + 1
	}
}
while(essay <=3)
if (essay == 4)
{alert("bloque")}*/

//afficher dans la console les nombres de 10 a 150
/*var depart = Number(window.prompt("Entrer le nombre de départ"))
var arriver = Number(window.prompt("Entrer le nombre d'arriver"))
var increment = Number(window.prompt("Entrer un increment"))

if (depart <=arriver && increment > 0){
	for (var i = depart; i <= arriver ; i+=increment) {
	console.log(i)
}	
}
else {
	console.log("try again")
}	
*/


