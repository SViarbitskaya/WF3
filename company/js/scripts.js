//Global variables
var images = ["images/slider-image-1.jpg", "images/slider-image-2.jpg", "images/slider-image-3.jpg"];
var imageIndex = 0;

//Window.onload:
$(function(){

/*HEADER*/

/*Background image changes every 5 seconds:*/
var myVar = setInterval(setImageWithFade, 5000);

/*Backgound image is changes by clicking on arrows:*/
$("#left").on("click",changeImage);
$("#right").on("click",changeImage);

});

function setImage() {
  imageIndex = (imageIndex + 1) % 3;
 $("#header").css("background-image","url(" + images[imageIndex] + ")");
}

function setImageWithFade(){
  imageIndex = (imageIndex + 1) % 3;
  $("#header").fadeOut("fast", function(){
  $("#header").css("background-image","url(" + images[imageIndex] + ")").fadeIn("fast");
  });
/*  return false;*/
}

function changeImage(){
  if ($(this).attr("id")=="right") {
  imageIndex = (imageIndex + 1) % 3;
  $("#header").fadeOut("fast", function(){
  $("#header").css("background-image","url(" + images[imageIndex] + ")").fadeIn("fast");
  });
  return false;
  }
  else{
  imageIndex = Math.abs(((-1)*imageIndex - 2) % 3);
  $("#header").fadeOut("fast", function(){
  $("#header").css("background-image","url(" + images[imageIndex] + ")").fadeIn("fast");
  });
  return false;
  }
}
