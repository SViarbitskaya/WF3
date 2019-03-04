//=================Global variables:======================
var images = ["images/bf2-restaurant-02.jpg",
 "images/bf2-restaurant-02.jpg",
  "images/bf2-souvenirs-01-4283742597.jpg",
  "images/bf2-yoga-01-68946335.jpg",
  "images/bigstock-Sailing-Yacht-in-sailing-rega-86220863-398205795.jpg"];
var imageIndex = 0;

//==================Window.onload:===========================
$(function(){
/*==================manual=================================*/

var myVar = setInterval(setImage, 15000);





/*=================carousel================================*/
/*$('.carousel').carousel({
  interval: 2000
})*/

});

/*=============functions:===============================*/
function setImage(){
  //Vérifier si on est a la dernére image
  if (imageIndex == images.length - 1) {
    imageIndex = 0;
  }
  else{
    imageIndex++;
  }
  $("#image").css("background-image", "url("+images[imageIndex]+")");
}