$(document).ready(function() {


	// set variables
	var gemOneValue, gemTwoValue, gemThreeValue, gemFourValue;
	var wins = 0;
	var losses = 0;
	var randomScore;
	var userRunningScore;

	// generate random crystal values for each game
	function initializeVariables() {
		randomScore = 19 + Math.floor(Math.random() * 102);
		gemOneValue = 1 + Math.floor(Math.random() * 12);
		gemTwoValue = 1 + Math.floor(Math.random() * 12);
		gemThreeValue = 1 + Math.floor(Math.random() * 12);
		gemFourValue = 1 + Math.floor(Math.random() * 12);
		userRoundScore = 0;
		
	// update the html for the game board
		$("#winsTotal").html("Wins: " + wins);
		$("#lossesTotal").html("Losses: " + losses);
		$("#randomNumber").html(randomScore);
		$("#userTotal").html(userRoundScore);
	}

	// Function to check for a Win or Loss and to start new game
	function startNewGame() {
		if (userRoundScore > randomScore) {
			losses++;
			alert("Math is hard... You Lost. Try again!");
			initializeVariables();
		}

		if (userRoundScore == randomScore) {
			wins++;
			initializeVariables();
			alert("Szechuan Sauce For All! You Win!");
		}
	}

	initializeVariables();

	// On Click Function for Gems
	$(".gem").on("click", function() {
		var pressed = $(this).attr("value");
        if (pressed == "gem1") {
        	userRoundScore += gemOneValue;
        } else if (pressed == "gem2") {
        	userRoundScore += gemTwoValue;
        } else if (pressed == "gem3") {
        	userRoundScore += gemThreeValue;
        } else if (pressed == "gem4") {
        	userRoundScore += gemFourValue;
        } 
        $("#userTotal").html(userRoundScore);
        
    // call the function to see if user has won or lost
        startNewGame();
	});

});