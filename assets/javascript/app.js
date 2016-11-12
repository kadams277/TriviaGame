// click start and button disappears
// timer appears and starts counting down
	// move to tally page when time runs out

function hide () {
    document.getElementById("questions").style.display = "none";
    document.getElementById("submitButton").style.display = "none";
}

hide();

function show () {
    document.getElementById("questions").style.display = "";
    document.getElementById("submitButton").style.display = "";
}

var number = 91;

$('#startButton').on('click', run);

function run() {
    counter = setInterval(decrement, 1000);
}

// The decremeent function.
function decrement(){
    // Decrease number by one.
    number--;
    // Show the number in the #show-number tag.
    $('#showTime').html('<h2 class="text-center" style="font-size:25px; color:white">' + number + ' SECONDS REMAINING' + '</h2>');

    // Once number hits zero...
    if (number === 0){
        // ...run the stop function.
        stop();
    }
    // questions populate to take button's place
    show();
}

// questions have radio buttons with possible answers
// user may only select one answer
var rightAnswers = 0;
var wrongAnswers = 0;

// var a2 = document.getElementsByName('radioButton1');
//    for(i = 0; i < a2.length; i++) {
//       if(a2[i].checked) {
//          if(a2[i].value === 'true') {
//             rightAnswers++;
//             break;
//             }
//         }
//     }

var q1 = document.getElementById("radioButton1");
    if (q2 === true){
        rightAnswers++;
    } else {
        wrongAnswers++;
    }

var q2 = document.getElementById("radioButton2");
    if (q2 === true){
        wrongAnswers++;
    } else {
        rightAnswers++;
    }

var q3 = document.getElementById("radioButton3");
    if (q3 === true){
        wrongAnswers++;
    } else {
        rightAnswers++;
    }

var q4 = document.getElementById("radioButton4");
    if (q4 === true){
        wrongAnswers++;
    } else {
        rightAnswers++;
    }

var q5 = document.getElementById("radioButton5");
    if (q5 === true){
        rightAnswers++;
    } else {
        wrongAnswers++;
    }

var q6 = document.getElementById("radioButton6");
    if (q5 === true){
        rightAnswers++;
    } else {
        wrongAnswers++;
    }

var q7 = document.getElementById("radioButton7");
    if (q7 === true){
        wrongAnswers++;
    } else {
        rightAnswers++;
    }

var q8 = document.getElementById("radioButton8");
    if (q8 === true){
        rightAnswers++;
    } else {
        wrongAnswers++;
    }

var q9 = document.getElementById("radioButton9");
    if (q9 === true){
        wrongAnswers++;
    } else {
        rightAnswers++;
    }

var q10 = document.getElementById("radioButton10");
    if (q10 === true){
        rightAnswers++;
    } else {
        wrongAnswers++;
    }

// "done" button at end to submit answers
// show correct answers and incorrect answers
function checkAnswers(){
    var radio1 = document.getElementById("optionRadios1");
    console.log(radio1);
}
$('#submitButton').on('click', function () {
    stop();
    hide();
    checkAnswers();
    $('#right').html('<h2 class="text-center" style="font-size:25px; color:white">' + 'CORRECT ANSWERS: ' + rightAnswers + '</h2>');
    $('#wrong').html('<h2 class="text-center" style="font-size:25px; color:white">' + 'INCORRECT ANSWERS: ' + wrongAnswers + '</h2>');
});


function stop(){
    // Clears our "counter" interval.
    // We just pass the name of the interval
    // to the clearInterval function.
    clearInterval(counter);
    $('#showTime').empty();
}


