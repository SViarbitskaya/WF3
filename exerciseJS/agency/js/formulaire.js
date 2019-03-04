window.onload = function(){
	//validating name
	document.getElementById("fname").addEventListener("blur", validateName);
	document.getElementById("femail").addEventListener("blur", validateOtherFields);
	document.getElementById("fsubject").addEventListener("blur", validateOtherFields);
	document.getElementById("fmessage").addEventListener("blur", validateOtherFields);
	document.getElementById("fbutton").addEventListener("click", validateForm);
}

var validNameValue;
var validEmailValue, validSubjectValue, validMessageValue;

function validateName() {
  	if (this.value.length > 3 && this.value.length < 50 ) {
 	this.style.border = "1px solid green";
 	validNameValue = true;
  	}
  	else{
	this.style.border = "1px solid red";
	validNameValue = false;
  	}
  	console.log(this.id + validNameValue);
} 

function validateOtherFields() {
  	if (this.value == "" ) {
 		this.style.border = "1px solid red";
 		var Value = false;
  	}
  	else{
		this.style.border = "1px solid green";
		var Value = true;
  	}
/*  	if (this.id == "femail"){ validEmailValue = Value}
  	if (this.id == "fsubject"){ validSubjectValue = Value}
  	if (this.id == "fmessage"){ validMessageValue = Value}*/
  	switch(this.id){
  		case "femail":
  			validEmailValue = Value;
  			break ;
  		case "fsubject":
  			validSubjectValue = Value;
  			break;
  	  	case "fmessage":
  			validMessageValue = Value;
  			break;
  		default:
  			break;
  	}

  	console.log(this.id + Value);
  	}

function validateForm(event){
	event.preventDefault();
	if (validNameValue && validEmailValue && validSubjectValue && validMessageValue){
		console.log("OK");
		alert("Form is sent")
	}
	else{
		console.log("Not OK");
	}
}
