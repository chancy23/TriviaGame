$(document).ready(function(){
    //declare global variables

    //object array of all questions and which id is the correct answer?
    var questions = [{
            name: "Q1",
            question: "What is Cher's real birth name?",
            answers: ["Cherilyn Sarkisian", "Cher Saskatoon", "Cheryl Sanford", "Cheryl Ann Sarswesian"],
            divClass: ".birthName"
            //correctAnswer: answer[0]
        },
        {
            name: "Q2",
            question: "What award has Cher not won?",
            answers: ["A Grammy", "An Oscar", "An Emmy", "A Tony"],
            divClass: ".awards"
            //correctAnswer: answer[3]
        },
        {
            name: "Q3",
            question: "What 1998 hit pioneered the use of Auto-Tune?",
            answers: ["Strong Enough", "Believe", "The Power", "When the Money's Gone"],
            divClass: ".autoTune"
            //correctAnswer: answer[1]
        },
        {
            name: "Q4",
            question: "What movie was Cher's film debut in?",
            answers: ["Mask", "Moonstruck", "Silkwood", "Tea with Mussolini"],
            divClass: ".filmDebut"
            //correctAnswer: answers[2]
        },
        {
            name: "Q5",
            question: "What band is Cher covering on her upcoming album 'Dancing Queen'?",
            answers: ["Journey", "ABBA", "REO Speedwagon", "Fleetwood Mac"],
            divClass: ".coverAlbum"
            //correctAnswer: answers[2]
        }
    ];

    var labels = ["first", "second", "third", "forth"];

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
    //$(".allQuestions :not('#sub-but')").empty();
    // loops through the 5 questions 
    for (var i = 0; i < 5; i++) {
        $(".allQuestions").append("<div class='" + questions[i].name + "'></div>");
        console.log(questions[i].name);
        console.log(questions[i].question);
        $(questions[i].divClass).append("<div class ='questionTitle'>" + questions[i].question + "</div>");
        //console.log("these are the questions: " + questions[i].questions);
        // loops through answers for each radio button
        for (var j = 0; j <= 4; j++) {
            $(questions[i].divClass).append("<input type='radio' name='" + questions[i].name + "'value='" + questions[i].answers[j] + "'/><label for='" + labels[i] + "'>" + questions[i].answers[j] + "</label>");
        }
        //$(".allQuestions").prepend("<hr />");
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
        $(".allQuestions").show();
    });

    // $("#q1a1").on("click", function() {
    //     correctAnswers
    // }
    
      
            
        






})