// Equivalent de window.onload en jquery
$(function(){
	//Ex1:
	//changing the size of the text onclick
	$("#text").on("click",changeTextSize);

	//Ex2:
	//Modifying div
	$("#ex2").hover(function(){
		$(this).css({
			"background-color": "grey",
			"color": "red"});
		$("h1", this).hide();
		$("p", this).show();
		}, function(){
			$(this).css({
				"background-color": "red",
				"color": "black"});
		$("h1", this).show();
		$("p", this).hide();
	  });

	//Ex3
	//Displaying as typing
	//get the value of the span text:
	// let mon_text = $("#target").text();
	// Get the value of the input field:
	//let mon_text = $("input").val();
	//console.log(mon_text);
	$("#input").keyup(function() {
		$("#target").html($(this).val());
	});

	//Ex4
	//Displaying Bonsoir or Bonjour depending on the time of the day
	var time = new Date();
	//console.log(time.getHours());
	if (time.getHours() < 18){
		$("#time").html("Bonjour!");
	}else{
		$("#time").html("Bonsoir!");
	}

	//Ex5 
	//Toggling the content of two textareas 
	$("#swap").click(function(){
		var comment1 = $("#area1").val();
		var comment2 = $("#area2").val();
		$("#area1").val(comment2);
		$("#area2").val(comment1);
	});

	//ExFinal
	//Crossing the checked item (this method does not attach EVENT to the newly added LI items)
	/*$("input:checkbox").click(function () {
		if (this.checked) {
			$(this).parent().addClass('completed');
		}else{
			$(this).parent().removeClass('completed');
		}
	});*/
	//Crossing the checked item by DEGELATING HANDLE to the UL element
	$("#todo_list").delegate("input:checkbox", "click", function() {
		if (this.checked) {
			$(this).parent().addClass('completed');
		}else{
			$(this).parent().removeClass('completed');
		}
	});

	//Removing the checked
	$("#delete").click(function(){
		$(".completed").remove();
	});
	//Adding new task to the list
	$("#add").click(function(){
		let task = $("#new_task").val();
		if (task !== ""){
			$('#todo_list').append('<li><input type="checkbox" autocomplete="off"><span>'
			+ task +'</span></li>');
		}else{
			console.log("nothing was entered");
		}
	});

});//end of document.read

function changeTextSize(){
	let size = $(this).css("font-size");
	//console.log(size);
		if (size == "40px"){
		$(this).css("font-size", "16px");
	}else{
		$(this).css("font-size", "40px");
	} 
}
