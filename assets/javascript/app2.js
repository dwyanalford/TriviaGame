// global variables
var correctAnswers = 0;
var incorrect = 0;
var unanswered = 0;
var radioButtons = document.getElementsByTagName('input');
var radioButtons1 = document.getElementsByClassName('radio1');

$(document).ready(function(){

	// creating the start button to begin the trivia
	var startButton = $("#timeDiv").html("<button type='button' class='btn btn-primary space'>START</button>");

	// hide the form when page refreshed, must see start button only 
	$("#inputDiv").hide();
	$("#bottomDiv").hide();
	$(startButton).click(function(){	
	var count=10;
	var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
	function timer(){
		count = count-1;
		if (count <= 0)
		{
		
		// stops the countdown at 0, otherwise continue with minus numbers
		clearInterval(counter);
		}
		$("#timeDiv").html("Time Remaining: " + count + " seconds"); 
		$("#inputDiv").show();
		$("#bottomDiv").show();
		$("#question1").html("<h3>Which African country is the largest by area?</h3>");
		$("#question2").html("<h3>Which African country has the highest population?</h3>");
		$("#question3").html("<h3>Which African country mines the most amount of Gold?</h3>");
		}


	});	

	function correctAnswer() {
	for (var i = 0; i < radioButtons1.length; i++){

}
	if (radioButtons1.value === 'Algeria' && radioButtons[i].checked){
		correctAnswers++;
	}
	else {
		incorrect++;
	}
	}
	correctAnswer();
	
});


	function done (){
	$("#inputDiv").html("<h1>ALL DONE!!</h1><br><p>Correct Answers: " + correctAnswers + "</p>");
	$("#bottomDiv").html("");
	$("#timeDiv").hide();
	}
