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
    //timer variables and object
    
    var intervalId;
    var timerRunning = false;
    
    var timer = {
        time: 120,

        start: function() {
        // start the count here and set the clock to running.
            if (!timerRunning) {
            intervalId = setInterval(timer.count, 1000);
            timerRunning = true;
            };
        },

        count: function() {
            // Decrement time by 1, remember we cant use "this" here.
            timer.time--;
            $("#timerDisplay").text(timer.time);
                
            //when timer hits zero, stop countdown
            if (timer.time <= 0) {
            clearInterval(intervalId);
            timerRunning = false;
            //display results div showing the varialbe for correct and wrong answers
            $("#results").show();
            }
        }
    };
    
    
    var correctAnswerChosen = false;
    var correctAnswers = 0;
    var wrongAnswers = 0;


    var questionTitle;
    var answer;
    //functions=======================

    function loadQuestions() {
        $(".allQuestions").empty();
        // loops through the 5 questions and loads to div, assigns a class for each question.
        for (var i = 0; i < 5; i++) {
        questionTitle = $("<div>").addClass(questions[i].divClass).addClass("titles").text(questions[i].question);
        $(".allQuestions").append(questionTitle);

            //loops through each answer from object array and assigns a radio button and adds to each questions
            for (var j = 0; j < 4; j++) {
                answer = $("<div>").addClass("allAnswers").text(questions[i].answers[j]);
                $(answer).prepend($('<input type="radio" class="answerButton" value="' + questions[i].answers[j] + '" name="' + questions[i].name +'">' + questions[i].answers[j]));
                $(questionTitle).append(answer);
                
            }
        }
   };


    //verify the correct answer selected on button click 
    function checkAnswer() {
        //this console log displays, but then it stops
        console.log("this is connected");
        //this isn't pulling in the correct button class, it is showing nothing except an error message about "toLowerCase", which
        //isn't used in this code anywhere??
        if  ($(this).val() === questions.correctAnswer) {
            console.log("this should be the correct answer");
            correctAnswers++
            $("#results").append("Correct Answers: " + correctAnswers);
        }
        else {
        console.log("wrong answer");
            wrongAnswers++
            $("#results").append("Wrong Answers: " + wrongAnswers);
        }
    };
    
    
    //processes and main game play =======================================

    //this starts the countdown timer and displays the questions
    $("#start").on("click", function(){
        loadQuestions();
        timer.start;
        
    });

    //added submit button to be able to check right/wrong answer function.
    $("#submit").on("click", function(){
        //console.log("this is submit");
        checkAnswer();
        
    });
    
    

    
      
            
        






})