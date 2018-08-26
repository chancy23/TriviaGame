$(document).ready(function(){
    //declare global variables

    //object array of all questions and which id is the correct answer?
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
                    }
        },
    };
    
    correctAnswerChosen = false;
    correctAnswers = 0;
    wrongAnswers = 0;



//functions=======================

//a start function to clear all previous answer and start the countdown when start button is selected
    //make it so that answers can't be selected until "start button" is pushed and timer begins
function startGame() {
    //$(".questions").hide();
    console.log("this starts the game");
};

function loadQuestions() {
    $(".allQuestions").empty();
    // loops through the 5 questions 
    for (var i = 0; i < 5; i++) {
       var questionTitle = $("<div></div>").addClass(questions[i].divClass).text(questions[i].question);
       $(".allQuestions").append(questionTitle);
        //loops through each answer from object array and assigns a radio button and adds to each questions
        for (var j = 0; j < 4; j++) {
            var answer = $("<div></div>").addClass("allAnswers").text(questions[i].answers[j]);
            $(answer).prepend($('<input type="radio" value=" name="' + questions[i].name + '">' + questions[i].answers[j]));
            $(questionTitle).append(answer);
            //****Help!!***** need to make only one radio button at a time, not multiple
        }
    }
}
loadQuestions();



// function checkAnswer(questions) {
//     if ($("#q1a1").on("click", function(){

//     }
    //verify the correct answer selected
    //move selected answer id into the answerchosen variable (empty array or variable)
        //conditional if answerChosen ==== id of correct answer
            //then add to correctly answered counter
        //if else, left blank or !== to id of correct answer
            //then move to wrongly answered counter


//};

    //do a time up function to stop the quiz and display the results
    

    


    //total the number correct, incorrect
        //display the .length of each array (correctly answered and incorrectly answered) in the results div at end of timer




    //processes and main game play ========================================
    startGame();

    //this starts the countdown timer and displays the questions
    $("#start").on("click", function(){
        timer.start;
        //$(".allQuestions").show();
    });

    // $("#q1a1").on("click", function() {
    //     correctAnswers
    // }
    
      
            
        






})