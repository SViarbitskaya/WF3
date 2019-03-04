window.onload = function(){
	//validating name
	var x = document.getElementById("fname");
	console.log(x)
	var y = document.forms["myForm"]["fname"].value;
	y.addEventListener("onblur", validateForm);
}

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    /*return false;*/
  }
} 