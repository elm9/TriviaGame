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
    options: ["Bubble wrap", "Felt", "Sand paper"],
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
    document.getElementById('game').style.display = "block";

    // timer function
    var time = 90;
    var timerDiv = document.getElementById('timer');
    var timerInt = setInterval(countdown, 1000);

    function countdown (){
        //if time runs out end game, otherwise keep counting down
        if (time <= 0){
            clearTimeout(timerInt);
            endGame();
        } else{
            timerDiv.innerHTML = (time + " SECONDS REMAINING");
            time--;
        }
    };
    

});

