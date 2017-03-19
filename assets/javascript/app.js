// global variables
var correctAnswers = 0;
var incorrect = 0;
var unanswered = 0;

var count = 0;

// function to evaluate which button the user checked and compare it to answer
function checkAnswer(){
	if ($("#1c").is(":checked")){
		correctAnswers++;
	}
	else if($("#1a").is(":checked")) {
		incorrect++;
	}
	else if($("#1b").is(":checked")) {
		incorrect++;
	}
	else {
		unanswered++;
		console.log(unanswered);
	}
	if ($("#2b").is(":checked")){
		correctAnswers++;
	}
	else if($("#2c").is(":checked")) {
		incorrect++;
	}
	else if($("#2a").is(":checked")) {
		incorrect++;
	}
	else {
		unanswered++;
		console.log(unanswered);
	}
	if ($("#3b").is(":checked")){
		correctAnswers++;
	}
	else if($("#3a").is(":checked")) {
		incorrect++;
	}
	else if($("#3c").is(":checked")) {
		incorrect++;
	}
	else {
		unanswered++;
		console.log(unanswered);
	}
	// what will happen on the web page once the check is completed above
	$("#timeDiv").hide();
	$("#inputDiv").html("<h1>ALL DONE..</h1><h3>Final Score</h3><br/><p>Correct Answers: " + correctAnswers + "</p><br><p>Wrong Answers: " + incorrect + "</p><br><p>Unanswered: " + unanswered + "</p>");

}

$(document).ready(function(){

	// creating the start button to begin the trivia game
	var startButton = $("#timeDiv").html("<button type='button' class='btn btn-primary space'>START</button>");

	// hide the form when page refreshed, must see start button only 
	$("#inputDiv").hide();

	$(startButton).click(function(){	
	var count = 25;
	var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

		// this event fires when the #donebutton is clicked
		$("#doneButton").on('click', function(){
			console.log("doneButton executed");
			clearInterval(counter); 
			checkAnswer();
		})

		function timer(){
			count--;
			console.log(count);
			console.log("inside the timer function");
		
			if (count === 0){
				console.log("This the count " + count);
				clearInterval(counter); // stops the countdown at 0, otherwise continue with minus number
				checkAnswer();
			}	
			else {
				$("#inputDiv").show();
			}
			$("#timeDiv").html("Time Remaining: " + count + " seconds"); 
		}

	});	

});	


	

