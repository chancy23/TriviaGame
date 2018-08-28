$(document).ready(function(){

    //object array of all questions, answers, and the correct answer to each question, also a class to assign  to each question and answer set
    var questions = [{
            name: "Q1",
            question: "What is Cher's real birth name?",
            answers: ["Cherilyn Sarkisian", "Cher Saskatoon", "Cheryl Sanford", "Cheryl Ann Sarswesian"],
            correctAnswer: "Cherilyn Sarkisian",
            divClass: ".birthName"
        },
        {
            name: "Q2",
            question: "What award has Cher not won?",
            answers: ["A Grammy", "An Oscar", "An Emmy", "A Tony"],
            correctAnswer: "A Tony",
            divClass: ".awards"
        },
        {
            name: "Q3",
            question: "What 1998 hit pioneered the use of Auto-Tune?",
            answers: ["Strong Enough", "Believe", "The Power", "When the Money's Gone"],
            correctAnswer: "Believe",
            divClass: ".autoTune"
        },
        {
            name: "Q4",
            question: "What movie was Cher's film debut in?",
            answers: ["Mask", "Moonstruck", "Silkwood", "Tea with Mussolini"],
            correctAnswer: "Silkwood",
            divClass: ".filmDebut"
        },
        {
            name: "Q5",
            question: "What band is Cher covering on her upcoming album 'Dancing Queen'?",
            answers: ["Journey", "ABBA", "REO Speedwagon", "Fleetwood Mac"],
            correctAnswer: "ABBA",
            divClass: ".coverAlbum"
        }
    ];

    //displays the out of total questions in results div
    $("#totalNumQues").text(questions.length);

    //do a form timer include a countdown in browser
    var intervalId;
    var timerRunning = false;
    
    var timer = {
        time: 30,

        start: function() {
        // start the count and set the clock to running.
            if (!timerRunning) {
            console.log("timer is running");
            intervalId = setInterval(timer.count, 1000);
            timerRunning = true;
            };
        },

        reset: function() {
            //resets timer back on game reset
            timer.time = 30;
            $("#timerDisplay").text(30);
        },
        
        count: function() {
            // Decrement time by 1 second.
            timer.time--;
            $("#timerDisplay").text(timer.time);
                
            //when timer hits zero, stop countdown and check answers
            if (timer.time <= 0) {
            clearInterval(intervalId);
            timerRunning = false;
            //when timer stops, check the answers and display results of number correct.
            checkAnswer();
            $(".displayResults").show();
            }
        }
    };
    
    //var correctAnswerChosen = false;
    var numCorrect = 0;
    var numWrong = 0;
    //functions=======================================================

    //resets the game at start and if Try Again button is pushed.
    //clears all divs, resets results, resets timer to start at 60 seconds
    function resetGame(){
        timer.reset();
        $("#start").show();
        $(".allQuestions").empty();
        $("#results").empty();
        $(".displayResults").hide();
    };

    //loads questions and their corresponding answers to the browser
    function loadQuestions() {
        
        // loops through the 5 questions and loads to div, assigns a class for each question.
        for (var i = 0; i < questions.length; i++) {
        var questionTitle = $("<div>").addClass(questions[i].divClass).addClass("titles").text(questions[i].question);
        $(".allQuestions").append(questionTitle);

            //loops through each answer from object array and assigns a radio button and adds to each questions
            for (var j = 0; j < 4; j++) {
                 var answer = $("<div>").addClass("allAnswers").text(questions[i].answers[j]);
                $(answer).prepend($('<input type="radio" class="answerButton" value="' + questions[i].answers[j] + '" name="' + questions[i].name +'">' + questions[i].answers[j]));
                $(questionTitle).append(answer);
            }
        }
   };

   function checkAnswer() {

    // variable to run check answer as long as right answer isn't chosen (from global variable)
    //correctAnswerChosen;
    
    // gather selected answers from document, and loop through each and add the value
    var selectedAnswers = document.querySelectorAll("input[type=radio]:checked");
        for (var l = 0; l < selectedAnswers.length; l++) {
            //add the trim function to eliminate white space so would match right answers, didn't work
            selectedAnswers[l].value.trim();
            console.log("this is the selected answer: " + selectedAnswers[l].value);
        };

        //loop through the questions object to get the correct answer for each question
        //add the trim function to eliminate white space so would match selected answers, didn't work
        for (var k = 0; k < questions.length; k++) {
            var rightAnswer = questions[k].correctAnswer.trim();
            console.log("this is the right answer: " + rightAnswer);
            
        };
        //****Note: this isn't working, but should check the selected answer against the correct answer and return either true or false
        //check the selected answer matches the right answer
        if (selectedAnswers[l] === rightAnswer[k]){
            // add to the correct count
            numCorrect++
            //correctAnswerChosen = true;
            $("#results").append(numCorrect);
            console.log("this is the number correct: " + numCorrect);
        }
        // if answer is wrong or blank
        else {
            //add to wrong count
            numWrong++;
            //not longer need a wrong number count to display
            //$("#results").append("Number of Incorrect Answers: " + numWrong);
            console.log("this is the number wrong: " + numWrong);
        };
        
    };
    
    
    //processes and main game play =======================================
    resetGame();

    //this starts the countdown timer and displays the questions
    $("#start").on("click", function(){
        loadQuestions();
        timer.start();
        $("#start").hide();
    });

    //resets games to play again when button is selected
    $("#resetButton").on("click", function(){
    resetGame();
    });


})