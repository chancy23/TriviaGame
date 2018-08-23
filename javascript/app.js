$(document).ready(function(){
    //declare global variables

    //object array of all questions and which id is the correct answer?
    var questions = {
        question1: {
            name: "Q1",
            question: "What is Cher's real birth name?",
            answer: "Cherilyn Sarkisian",
            idAnswer: "#q1a1"
        },
    }

    
    //timer variables
    var intervalId;
    var timerRunning = false;
    
    var timer = {
        time: 10,

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
        }
    };

    

    // correctAnswerChosen = false;
    //answerChosen = [];



//functions=======================

//a start function to clear all previous answer and start the countdown when start button is selected
    //make it so that answers can't be selected until "start button" is pushed and timer begins

//do a form timer include a countdown in the dom
    function timerStop() {
        if (timer.time === 0) {
            
        }
        //when timer is 0:00 stop timer and disp
    };

    //do a time up function to stop the quiz and display the results
    // setTimeout(timeUp, 1000 * 120);

    // function timeUp() {

    //     // in the element with an id of time-left add an h2 saying Time's Up!
    //     // console log done
    //     console.log("done");
    //     $("#time-left").append("<h2>Time's Up!</h2>");
    //     console.log("time is up");
    
    //     //  The following line will play the audio file we linked to above:
    //     audio.play();
    // }

    //verify the correct answer selected
    //move selected answer id into the answerchosen variable (empty array or variable)
        //conditional if answerChosen ==== id of correct answer
            //then add to correctly answered array
        //if else, left blank or !== to id of correct answer
            //then move to wrongly answered array


    //total the number correct, incorrect
        //display the .length of each array (correctly answered and incorrectly answered) in the results div at end of timer




    //processes and main game play ========================================
        //this starts the countdown timer on when start button is clicked.
        $("#start").on("click", timer.start) //{
            //start the timer and display the Q's);
        //};







})