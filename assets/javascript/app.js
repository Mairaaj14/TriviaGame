$(document).ready(function() {
    //Declare timer variables
    var index = 0;
	var countdownTimer = {
		time : 15,
		reset: function() {
			this.time = 15;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//			
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
    var correct = 0;
    var wrong = 0;
    var q1 = {
        question : "What is Jerome's favorite pet?",
        possibleAnswers : ['A. iguana',
                     'B. cat',
                     'C. dog',
                     'D. hamster'],
        flags : [false, true, false, false],
        answer : 'B. cat'
    };
    
    var q2 = {
        question: "Where is UC Berkeley's Extension building located?",
        possibleAnswers: ['A. 190 Spruce St',
                     'B. 160 Spear St',
                     'C. 160 Stanyan St',
                     'D. 190 Spear St'],
        flags : [false, true, false, false],
        answer : 'B. 160 Spear St'
    };
    
    var q3 = {
        question : "What does HTML stand for?",
        possibleAnswers : ['A. Hyper Link Markup Language',
                     'B. Hyper Text Markup Language',
                     'C. Hyper Tech Markup Language',
                     'D. Hyper Table Markup Language'],
        flags : [false, true, false, false],
        answer : 'B. Hyper Text Markup Language'
    };
    
    var q4 = {
        question : "Who plays Neo in The Matrix?",
        possibleAnswers : ['A. Keannu Reeves',
                     'B. Adam Sandler',
                     'C. Jim Carey',
                     'D. Dwayne Johnson'],
        flags : [true, false, false, false],
        answer : 'A. Keannu Reeves'
    };
    
    var q5 = {
        question : "Which chess piece can only move diagonally?",
        possibleAnswers : ['A. queen',
                     'B. king',
                     'C. bishop',
                     'D. knight'],
        flags : [false, false, true, false],
        answer : 'C. bishop'
    };
    var questionArray = [q1, q2, q3, q4, q5];

    function loadQuestion(questionSelection) {
        console.log(questionSelection);
        countdownTimer.reset();
      $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
      $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
      $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
      $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
      $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
    }    
    function setup() {
        index = 0;
        $('.question').append('<button id="startButton">Start</button>');
        $('#startButton').on('click', function() {
            $(this).hide();
            countdownTimer.start();
             loadQuestion(index);
        });
    }		
    
    function getAnswer() {
        $('.answerchoice').on('click', function() {
            console.log('alert', index);
              index++;
              console.log('click', index);
              $(".question").text('');
              $("#buttonA").text('');
              $("#buttonB").text('');
              $("#buttonC").text('');
              $("#buttonD").text('');
              loadQuestion();
          })
      }
      function answerCorrect() {
        correct++;
        alert("Correct!");
        console.log("correct");
    }
    
    function answerWrong() {
        wrong++;
        alert("Incorrect! ");
        console.log("wrong");
    }
    
    function showScore() {
        $('.question').empty();
        $('.question').append("<h2><p>" + correct + " correct</p></h2>");
        $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
        countdownTimer.stop();
        $('.timer').empty();
    
    }
    setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }
 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});
});
 



