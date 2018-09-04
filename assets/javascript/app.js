$(document).ready(function() {

    //object array of all questions, answers, and the correct answer to each question, also a class to assign  to each question and answer set
    var questions = [{
            name: "Q1",
            question: "What is Cher's real birth name?",
            answers: ["Cherilyn Sarkisian", "Cher Saskatoon", "Cheryl Sanford", "Cheryl Ann Sarswesian"],
            correctAnswer: "Cherilyn Sarkisian",
        },
        {
            name: "Q2",
            question: "What award has Cher not won?",
            answers: ["A Grammy", "An Oscar", "An Emmy", "A Tony"],
            correctAnswer: "A Tony",
        },
        {
            name: "Q3",
            question: "What 1998 hit pioneered the use of Auto-Tune?",
            answers: ["Strong Enough", "Believe", "The Power", "When the Money's Gone"],
            correctAnswer: "Believe",
        },
        {
            name: "Q4",
            question: "What movie was Cher's film debut in?",
            answers: ["Mask", "Moonstruck", "Silkwood", "Tea with Mussolini"],
            correctAnswer: "Silkwood",
        },
        {
            name: "Q5",
            question: "What band is Cher covering on her upcoming album 'Dancing Queen'?",
            answers: ["Journey", "ABBA", "REO Speedwagon", "Fleetwood Mac"],
            correctAnswer: "ABBA",
        }
    ];

    var numCorrect = 0;
    var numWrong = 0;

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
            $(".allQuestions").hide();
            }
        }
    };

    //functions=======================================================

    //resets the game at start and if Try Again button is pushed.
    //clears all divs, resets results, resets timer to start at 30 seconds
    function resetGame(){
        timer.reset();
        numCorrect = 0;
        numWrong = 0;
        $("#start").show();
        $(".allQuestions, #results").empty();
        $(".displayResults").hide();
    };

    //loads questions and their corresponding answers to the browser
    function loadQuestions() {
        $(".allQuestions").show();
        // loops through the 5 questions and loads to div, assigns a class for each question.
        for (var i = 0; i < questions.length; i++) {
            $(".allQuestions").append("<h5>" + questions[i].question + "</h5>").addClass("questionTitle");
                //loops through each answer from object array and assigns a radio button and adds to each questions
                for (var j = 0; j < questions[i].answers.length; j++) {
                    $(".allQuestions").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
                };
        };
   };

   function checkAnswer() {
   
        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() === questions[0].correctAnswer){
                numCorrect++;
            }
            else {
                numWrong++;
            };
        });
        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val() === questions[1].correctAnswer){
                numCorrect++;
            }
            else {
                numWrong++;
            };
        });
        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val() === questions[2].correctAnswer){
                numCorrect++;
            }
            else {
                numWrong++;
            };
        });
        $.each($("input[name='question-3']:checked"), function() {
            if ($(this).val() === questions[3].correctAnswer){
                numCorrect++;
            }
            else {
                numWrong++;
            };
        });
        $.each($("input[name='question-4']:checked"), function() {
            if ($(this).val() === questions[4].correctAnswer){
                numCorrect++;
            }
            else {
                numWrong++;
            };
        });

        $("#results").append("<h6>Number Correct: " + numCorrect + "</h6>");
        $("#results").append("<h6>Number Wrong: " + numWrong + "</h6>");
        $("#results").append("<h6>Number Unanswered: " + (questions.length - (numWrong + numCorrect)) + "</h6>");
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