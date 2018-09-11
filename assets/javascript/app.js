// ===Questions/Options/Answers========================================================================================
var questions = [
    { question: "_______ in capacity can learn to talk better than parrots.",
    options: ["Hawks", "Pigeons", "Ravens"],
    answer: "Ravens"},
    { question: "The average cumulus cloud weighs roughly ________ pounds.",
    options: ["1.1 billion", "1.1 million", "11 thousand"],
    answer: "1.1 million"},
    { question: "A newborn blue whale gains about ________ pounds a day during its first year.",
    options: ["20", "200", "2,000"],
    answer: "200"},
    { question: "How many possible ways could you make change for a U.S. dollar?",
    options: ["293", "42", "132"],
    answer: "293"},
    { question: "________ was initially intended to be used as 3-D wallpaper.",
    options: ["Play-Doh", "Bubble wrap", "Sand paper"],
    answer: "Bubble wrap"},
    { question: "The last movie ever rented at a corporate Blockbuster was __________ at a store in Hawaii.",
    options: ["The Land Before Time", "The NeverEnding Story", "This Is The End"],
    answer: "This Is The End"},
    { question: "Doctors' __________ kill more than 7,000 people annually in the United States.",
    options: ["broken watches", "untied shoes", "sloppy handwriting"],
    answer: "sloppy handwriting"},
    { question: "There are about __________ of blood vessels in the human body.",
    options: ["60,000 miles", "60,000 feet", "60,000 inches"],
    answer: "60,000 miles"},
    { question: "For every human on Earth, there are ________ ants.",
    options: ["160", "16 thousand", "1.6 million"],
    answer: "1.6 million"}];
// ==================================================================================================================
// answer score begins at 0
var correctAnswers = 0;
var incorrectAnswers = 0;


// only shows the #welcome div on load
$(document).ready(function(){
    document.getElementById('game').style.display = "none";
    document.getElementById('results').style.display = "none";
    document.getElementById('welcome').style.display = "block";
});
// when you click the "BRING IT ON" button:
$("#beginBtn").on("click", function() {
    
    // hide the #welcome div and show the #game div
    document.getElementById('welcome').style.display = "none";
    document.getElementById('results').style.display = "none";
    document.getElementById('game').style.display = "block";

    // timer function
    var time = 90;
    var timerDiv = document.getElementById('timer');
    var timerInt = setInterval(countdown, 1000);

    function countdown (){
        //if time runs out end game, otherwise keep counting down
        if (time == 0){
            clearTimeout(timerInt);
            endGame();
        } else{
            timerDiv.innerHTML = (time + " SECONDS REMAINING");
            time--;
        }
    };
    //end game function
    function endGame(){
        gameResults();
    }
    // questions appear
    function triviaQuestions() {
        for (var i = 0; i < questions.length; i++){
            //create variables for the new divs that are added to #qNa div
            var qDiv = $("<div>");
            var aDiv = $("<form action='#'></form>");
            //append question to div
            qDiv.append(questions[i].question);
            //append answer options to div with radio buttons
            for (var a = 0; a <questions[i].options.length; a++) {
                //create variables for the answer input options and labels
                var p = $("<p>");
                var label = $("<label>");
                var input = $("<input type='radio' name='answer" + i + "' id='" + questions[i].options[a] + "'class='with-gap' color='black' />");
                var span = $("<span>" + questions[i].options[a] + "</span>");

                //now trigger the appending
                aDiv.append(p);
                p.append(label);
                label.append(input);
                label.append(span);
            }
            //append the question and answer to #qNa div
            $("#qNa").append(qDiv);
            $("#qNa").append(aDiv);
        };
    }

    //submit button ends game
    $("#submitBtn").on("click", function(){
        endGame();
        gameResults();
        
        console.log("Correct answers: " + correctAnswers);
        console.log("incorrect answers: " + incorrectAnswers);
        


    })
    //retrieve answer values and store score in correct/incorrect answer var
    function getScore(){
        for (var i = 0; i < questions.length; i++){
            var value = $("input[name='answer" + i + "']:checked")[0];
            //if value is undefined it will count as wrong, 
            //if value does not match correct answer it will count as wrong,
            //if value matches correct answer it will count as right
            if((typeof value) != 'undefined'){
                value = value.id;
                if (value == questions[i].answer){
                    correctAnswers++;
                }else{
                    incorrectAnswers++;
                }
            }else{incorrectAnswers++;}
        }
    }
        //show score
        function gameResults(){
            //call function to retrieve answer values
            getScore();
            //hide the trivia game and show results div
            document.getElementById('game').style.display = "none";
            document.getElementById('results').style.display = "block";
            //append score to correct/incorrect div
            $("#correct").append(correctAnswers);
            $("#incorrect").append(incorrectAnswers);

        }

    //start game
    triviaQuestions();
    countdown();


});

