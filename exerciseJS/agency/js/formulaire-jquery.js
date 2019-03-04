var validNameValue, validEmailValue, validSubjectValue, validMessageValue;
var swal;

// Equivalent de window.onload en jquery
$(function(){
	//validating name
	$("#fname").on("blur", validateName);
	$("#femail").on("blur", validateOtherFields);
	$("#fsubject").on("blur", validateOtherFields);
	$("#fmessage").on("blur", validateOtherFields);
	$("#fbutton").on("click", validateForm);
});

function validateName() {
	var value = $(this).val();
  	if (value.length > 3 && value.length < 50 ) {
 	$(this).css("border","1px solid green");
 	validNameValue = true;
  	}
  	else{
	$(this).css("border","1px solid red");
	validNameValue = false;
  	}
  	console.log($(this).attr('id') + validNameValue);
} 

function validateOtherFields() {
  	if ($(this).val() == "" ) {
 		$(this).css("border","1px solid red");
 		var Value = false;
  	}
  	else{
		$(this).css("border","1px solid green");
		var Value = true;
  	}
/*  	if ($(this).id == "femail"){ validEmailValue = Value}
  	if ($(this).id == "fsubject"){ validSubjectValue = Value}
  	if ($(this).id == "fmessage"){ validMessageValue = Value}*/
  	switch($(this).attr('id')){
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
  	console.log($(this).attr('id') + Value);
}

function validateForm(event){
	event.preventDefault();
	if (validNameValue && validEmailValue && validSubjectValue && validMessageValue){
/*		$("#confirm").css("display","block");
		$("#myForm").css("display","none");*/
		$("#myForm").hide();
		$("#confirm").show();
	}
	else{
		swal("Formulaire invalide", {icon: "warning"});
	}
}
