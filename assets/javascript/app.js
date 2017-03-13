var correctAnswers = 0;
var incorrect = 0;
var unanswered = 0;


$(document).ready(function(){

	// creating the start button to begin the trivia
	var startButton = $("#timeDiv").html("<button type='button' class='btn btn-primary space'>START</button>");
	// hide the form when page refreshed, must see start button only 
	$("#inputDiv").hide();
	$("#bottomDiv").hide();
	$(startButton).click(function(){	
	var count=10;
	var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
	function timer()
		{
		  count=count-1;
		  if (count <= 0)
		  {
		  	// stops the countdown at 0, otherwise continue with minus numbers
		     clearInterval(counter);
		  }
		  $("#timeDiv").html("Time Remaining: " + count + " seconds"); 
		  $("#inputDiv").show();
		  $("#bottomDiv").show();
		  }
		  
	});	

	
});

// // function correctAnswers(){
// 	var x = $(".largest").checked;
// 	if(x = false){
// 		alert("True dat");
// 	}
// // }

function done (){
	$("#inputDiv").html("<h1>ALL DONE!!</h1><br><p>Correct Answers: " + correctAnswers + "</p>");
	$("#bottomDiv").html("");
	$("#timeDiv").hide();
	}
