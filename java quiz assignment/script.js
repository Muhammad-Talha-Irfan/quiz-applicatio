function submitAnswers(){
	var totalQuestionCount = 5;
	var playerScore = 0;
	

	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;
	

	for(var i = 1; i <= totalQuestionCount; i++){
		if(eval('q' + i) === null || eval('q' + i) === ''){
			alert('You missed question number ' + i);
			return false;
		}
	}
	

	var answerKey = ["b", "a", "d", "b", "d"];
	

	for (var j = 0; j < totalQuestionCount; j++){
		if(eval('q' + (j + 1)) === answerKey[j]){
			playerScore++;
		}
	}
	
	
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>' + playerScore + '<span> out of <span>' + totalQuestionCount + '</span></h3>';
	

	return false;

}