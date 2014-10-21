var quizApp = quizApp || {};

quizApp.questions = [];


quizApp.setupQuestion = function(num) {
	quizApp.q = quizApp.questions[num];
	$(".question-title").text("Question " + quizApp.q.qNum + " of " + quizApp.questions.length);
	$(".question-text").text(quizApp.q.questionText);
	$("label[for='0']").text(quizApp.q.answers[0].answerText);
	$("label[for='1']").text(quizApp.q.answers[1].answerText);
	$("label[for='2']").text(quizApp.q.answers[2].answerText);
	if (quizApp.q.answers.length < 4) {
		$("label[for='3'], #3").hide();
	}	else {
		$("label[for='3'], #3").show();
		$("label[for='3']").text(quizApp.q.answers[3].answerText);
	}
	$('input[type=radio]').prop("disabled", false);
	$('.next-button').removeClass("right wrong");
	$('.explain').addClass('hide');
	$('.next-button').text("Choose an Answer");
};

quizApp.totalScore = function() {
	var score = 0;
	for (var i = 0; i < quizApp.questions.length; i++) {
		if (quizApp.questions[i].userCorrect) {
			score++;
		}
	}
	return score;
};

quizApp.updateScore = function() {
	var score = quizApp.totalScore();
	var max = quizApp.questions.length;
	$('.score').html("Your current score is <b>" + score + "</b> out of <b>" + max + "</b>");
};

quizApp.nextQuestion = function() {
	if (quizApp.q.qNum == quizApp.questions.length) {
		var score = quizApp.totalScore();
		var max = quizApp.questions.length;
		var percent = (score / max).toFixed(2) * 100;
		$('.next-button').text("Congratulations, You're Done!").css("bottom", "1em");
		$('.explain').addClass('grow').html("<p>You got " + score + " questions correct out of a total of " + max + " for a final score of <b>" + percent + "%</b>.");

		$('.answers').empty();
	}	else {
		$('input[type=radio]').each(function() {
		  $(this).prop('checked', false);
	  });
	  quizApp.setupQuestion(quizApp.q.qNum);
	};
};

quizApp.checkAnswer = function() {
	var answernum = $('input[name=answer]:checked').attr('id');
	var answer = quizApp.q.answers[answernum];

	var explainText;
	if (answer.isCorrect) {
		quizApp.q.userCorrect = true;
		explainText = "Correct! ";
	} else {
		quizApp.q.userCorrect = false;
		explainText = "Incorrect. ";
	}

	quizApp.updateScore();
	$('input[type=radio]').prop("disabled", true);
	$('.explain').removeClass('hide').html("<b>" + explainText + "</b>" + quizApp.q.explanation);
	$('.next-button').text("Continue");
};

$(document).ready(function()	{

	quizApp.setupQuestion(0);
	quizApp.updateScore();

	$('form').submit(function(e) {
		e.preventDefault();
		if ($('input[type=radio]:checked').length > 0) {
			quizApp.nextQuestion();
		}
	});

	$('input').change(quizApp.checkAnswer);
});

// All the question and answer data.

quizApp.questions = [
	{
		"qNum": 1,
		"questionText": "What is the most craved food by pregnant women?",
		"answers": [{
			"answerText": "Pickles",
			"isCorrect": false
		},
		{
			"answerText": "Potato Chips",
			"isCorrect": false
		},
		{
			"answerText": "Nachoes",
			"isCorrect": true
		},
		{
			"answerText": "Bacon",
			"isCorrect": false
		}],
		"userCorrect": false,
		"explanation": "The most craved food by pregnant women are nachoes!"
		},
		{
		"qNum": 2,
		"questionText": "The IRS processes more that ____  pieces of paper per year.",
		"answers": [{
			"answerText": "45 Million",
			"isCorrect": false
		},
		{
			"answerText": "2 Billion",
			"isCorrect": true
		},
		{
			"answerText": "15 Million",
			"isCorrect": false
		},
		{
			"answerText": "78 Million",
			"isCorrect": false
		}],
			"userCorrect": false,
			"explanation": "The IRS processes more than 2 Billion pieces of paper per year. #Insane"
		},
		{
		"qNum": 3,
		"questionText": "How many gallon of jet fuel does a jumbo jets use to take off?",
		"answers": [{
			"answerText": "20 gallons",
			"isCorrect": false
		},
		{
			"answerText": "1,000 gallons",
			"isCorrect": false
		},
		{
			"answerText": "800 gallons",
			"isCorrect": false
		},
		{
			"answerText": "4,000 gallons",
			"isCorrect": true
		}],
			"userCorrect": false,
			"explanation": "A jumbo jet uses 4,000 gallons of fuel in order to take off."
		},
		{
		"qNum": 4,
		"questionText": "Each day, there are over _____  sexual intercourse taking place all over the world.",
		"answers": [{
			"answerText": "12 Million",
			"isCorrect": false
		},
		{
			"answerText": "120 Million",
			"isCorrect": true
		},
		{
			"answerText": "240 Million",
			"isCorrect": false
		},
		{
			"answerText": "38 Million",
			"isCorrect": false
		}],
			"userCorrect": false,
			"explanation": "Each day, there are over 120 Million sexual intercourse taking place all over the world."
		},
		{
		"qNum": 5,
		"questionText": "How much does the average person eat per year?",
		"answers": [{
			"answerText": "800 pounds",
			"isCorrect": false
		},
		{
			"answerText": "2,000 pounds",
			"isCorrect": false
		},
		{
			"answerText": "500 pounds",
			"isCorrect": false
		},
		{
			"answerText": "1,500 pounds",
			"isCorrect": true
		}],
			"userCorrect": false,
			"explanation": "The average person eats 1,500 pounds per year."
		},
		{
		"qNum": 6,
		"questionText": "The largest diamon found was how many carats?",
		"answers": [{
			"answerText": "1,689 carats",
			"isCorrect": false
		},
		{
			"answerText": "3,106 carats",
			"isCorrect": true
		},
		{
			"answerText": "896 carats",
			"isCorrect": false
		},
		{
			"answerText": "2,428 carats",
			"isCorrect": false
		}],
			"userCorrect": false,
			"explanation": "The largest diamond ever found was 3,106 carats. Try putting that on a ring!"
		},
		{
		"qNum": 7,
		"questionText": "How many inches can seaweed grow per day?",
		"answers": [{
			"answerText": "12 inches",
			"isCorrect": true
		},
		{
			"answerText": "16 inches",
			"isCorrect": false
		},
		{
			"answerText": "8 inches",
			"isCorrect": false
		},
		{
			"answerText": "4 inches",
			"isCorrect": false
		}],
			"userCorrect": false,
			"explanation": "Seaweed can grow 12 inches per day."
		},
		{
		"qNum": 8,
		"questionText": "The average person has how many dreams per year?",
		"answers": [{
			"answerText": "1,200 dreams",
			"isCorrect": false
		},
		{
			"answerText": "1,460 dreams",
			"isCorrect": true
		},
		{
			"answerText":" 800 dreams",
			"isCorrect": false
		},
		{
			"answerText":"450 dreams",
			"isCorrect": false
		}],
			"userCorrect": false,
			"explanation": "The average person has 1,460 dreams per year."
		},
		{
		"qNum": 9,
		"questionText": "Without coloring, Coca-cola is what color?",
		"answers": [{
			"answerText": "Brown",
			"isCorrect": false
		},
		{
			"answerText": "Clear",
			"isCorrect": false
		},
		{
			"answerText": "Red",
			"isCorrect": false
		},
		{
			"answerText": "Green",
			"isCorrect": true
		}],
			"userCorrect": false,
			"explanation": "Coca-cola is green without coloring."
		},
		{
		"qNum": 10,
		"questionText": "The average human will eat how many spiders in their life time at night?",
		"answers": [{
			"answerText": "8 spiders",
			"isCorrect": true
		},
		{
			"answerText": "20 spiders",
			"isCorrect": false
		},
		{
			"answerText": "12 spiders",
			"isCorrect": false
		},
		{
			"answerText": "6 spiders",
			"isCorrect": false
		}],
			"userCorrect": false,
			"explanation": "The average human will eat 8 spiders in thier life time at night."
		}];