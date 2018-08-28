$(document).ready(function(){
    //declare global variables

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

    //do a form timer include a countdown in the dom
    //timer variables and object (working, don't touch!!)
    
    var intervalId;
    var timerRunning = false;
    
    var timer = {
        time: 10,

        start: function() {
        // start the count here and set the clock to running.
            if (!timerRunning) {
            console.log("timer is running");
            intervalId = setInterval(timer.count, 1000);
            timerRunning = true;
            };
        },
        
        count: function() {
            // Decrement time by 1, remember we cant use "this" here.
            timer.time--;
            $("#timerDisplay").text(timer.time);
                
            //when timer hits zero, stop countdown and check answers
            if (timer.time <= 0) {
            clearInterval(intervalId);
            timerRunning = false;
            //display results div showing the varialbe for correct and wrong answers
            //checkAnswer();
            $("#message").show();
            $("#results").show();
            }
        }
    };
    
    
    var correctAnswerChosen = false;
    var numCorrect = 0;
    var numWrong = 0;
    // var questionTitle;
    // var answer;
    //functions=======================

    //resets the game at start and if Try Again button is pushed.
    //clears all divs, resets results, resets timer to start at 60 seconds
    function resetGame(){
        $("#timerDisplay").text(timer.time);
        $(".allQuestions").empty();
        $("#message").hide();
        $("#results").empty();
        $("#results").hide();
    };

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
    correctAnswerChosen;
    
    // gather selected answers from document, and loop through each and add the value
    var selectedAnswers = document.querySelectorAll("input[type=radio]:checked");
        for (var l = 0; l < selectedAnswers.length; l++) {
            selectedAnswers[l].value;
            console.log("this is the selected answer: " + selectedAnswers[l].value);
        };

        //loop through the questions object to get the correct answer for each question
        for (var k = 0; k < questions.length; k++) {
            var rightAnswer = questions[k].correctAnswer;
            console.log("this is the right answer: " + rightAnswer);
            
        };

        //check the selected answer matches the right answer
        if (selectedAnswers[l] === rightAnswer[k]) {
            // add to the correct count
            numCorrect++
            correctAnswerChosen = true;
            $("#results").append("Number of Correct Answers: " + numCorrect);
            console.log("this is the number correct: " + numCorrect);
        }
        // if answer is wrong or blank
        else {
            //add to wrong count
            numWrong++;
            $("#results").append("Number of Incorrect Answers: " + numWrong);
            console.log("this is the number wrong: " + numWrong);
        };
        
    };
    
    
    //processes and main game play =======================================
    resetGame();

    //this starts the countdown timer and displays the questions
    $("#start").on("click", function(){
        loadQuestions();
        timer.start();
        
    });

    //added submit button to be able to check right/wrong answer function.
    $("#submit").on("click", function(){
        console.log("this is submit");
        checkAnswer();
        
    });

    $("#resetButton").on("click", function(){
    resetGame();
    });


})