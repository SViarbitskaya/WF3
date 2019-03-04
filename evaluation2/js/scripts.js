//=================Global variables:======================
var images = ["images/background.jpg",
 "images/background2.jpg",
  "images/background3.jpg"];
var imageIndex = 0;
//==================Window.onload:===========================
$(function(){
var myVar = setInterval(setImageWithFade, 15000);
});


/*=============functions:===============================*/
function setImageWithFade(){
  //Vérifier si on est a la dernére image
  if (imageIndex == images.length - 1) {
    imageIndex = 0;
  }
  else{
    imageIndex++;
  }
  $("header").css("background-image", "url("+images[imageIndex]+")");
}