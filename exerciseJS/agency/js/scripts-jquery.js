// Equivalent de window.onload en jquery
$(function(){
	//Ajouter l'évenement clic sur l'élement
	$("#pendule").on("click",changePendule);
	//ou : 
	//$("#pendule).("click",changePendule);

	// border around all the images : 
	$("img").on("mouseover", addBorder);
	$("img").on("mouseleave", removeBorder);

	//changing images unless the mouse is over them:
	restartChange();
	$("#imageToChange").on("mouseover", stopChange);
	$("#imageToChange").on("mouseleave", restartChange);
});


function changeImage(){
	//aller chercher l'élément qui a l'ID image
	var element = $("#imageToChange");
	if (element.attr("src") == "images/about1.jpg"){
		element.attr("src","images/about2.jpg");
		}
		else{
		element.attr("src","images/about1.jpg");;
	}
}
function changePendule(){
	if ($(this).attr("src") == "images/work1.jpg"){
	$(this).attr("src","images/work2.jpg");
	}
	else{
	$(this).attr("src","images/work1.jpg");
	}
}
function addBorder(){
	$(this).css("border","thick solid red");
}
function removeBorder(){
	$(this).css("border", "none"); 
}
function setChange() {
	var pic = $("#imageToChange");
	if (pic.attr("src") == "images/about1.jpg"){
		pic.attr("src","images/about2.jpg");
		}
		else{
		pic.attr("src","images/about1.jpg");
	}
}
function restartChange(){
 myVar = setInterval(setChange, 500);
}
function stopChange() {
  	clearInterval(myVar);
}
