//Global variables
var myVar;

// On s'assure que le DOM est chargé
window.onload = function(){
	//Ce qui est ici ne sera exécuté qu'une fois le DOM chargé

	//Ajouter l'évenement clic sur l'élement
	var element = document.getElementById("pendule");
	element.addEventListener("click", changePendule);

	//ou : 
	document.getElementById("work2").addEventListener("click", changePendule);

	// border around all the images : 
    var allImages = document.getElementsByTagName("img");
    for (var i = 0 ; i < allImages.length; i++){
	allImages[i].addEventListener("mouseover", addBorder);
	allImages[i].addEventListener("mouseleave", removeBorder);
/*	console.log(allImages[i]);*/
	}

	//changing images unless the mouse is over them:
	restartChange();
	document.getElementById("imageToChange").addEventListener("mouseover", stopChange);
	document.getElementById("imageToChange").addEventListener("mouseleave", restartChange);
}

//FUNCTIONS

function changePendule(){
	if (this.attributes.src.nodeValue == "images/work1.jpg"){
	this.src = "images/work2.jpg";
	}
	else{
	this.src = "images/work1.jpg";
	}
}
function addBorder(){
	this.style.border = "thick solid red";
}
function removeBorder(){
	this.style.border = "none";
}
function setChange() {
	var pic = document.getElementById("imageToChange");
	if (pic.attributes.src.nodeValue == "images/about1.jpg"){
		pic.src = "images/about2.jpg";
		}
		else{
		pic.src = "images/about1.jpg";
	}
}
function restartChange(){
 myVar = setInterval(setChange, 500);
}
function stopChange() {
  	clearInterval(myVar);
}

