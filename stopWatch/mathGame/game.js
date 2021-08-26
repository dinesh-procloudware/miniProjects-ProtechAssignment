var oneHtml = document.getElementById("one");
var twoHtml = document.getElementById("two");
var opHtml = document.getElementById("op");
var userAnswer = document.getElementById("ans").value;
var storedDataInLocalStorage = document.getElementById("getScore");

/**
 * this function gets the random numbwer and a random operator 
 * and print those values on web page
 */
function showNewQuestion() {
    let opOptions = ["+", "-", "*", "/"];
    let one = getRandomNo(100);
    let two = getRandomNo(100);
    let op = opOptions[getRandomNo(3)];
    oneHtml.innerText = one;
    twoHtml.innerText = two;
    opHtml.innerText = op;
    let answer = eval(one + op + two);
    console.log(":Answer", answer);
    return answer
}
let correctAns = showNewQuestion();
console.log(' :: correctAns', correctAns);


/**
 * this fxn returns random number but within the given max number
 */
function getRandomNo(num) {
    return Math.floor(Math.random() * 100) % num;
}

/** Get the user answer  */
function getUserAnswer() {
    var userAnswer = document.getElementById("ans").value;
    console.log("UserAnser", userAnswer);
    return userAnswer;
}
// function match() 
document.getElementById("btn").addEventListener("click", function () {
    var userAns = getUserAnswer();
    if (correctAns == userAns) {
        alert("You got 10 points");
        // save 10 points to localstorage
        var score = 10;
        localStorage.setItem("score", JSON.stringify(score));
        console.log("::StoreData Local Initially", localStorage);
    } else {
        // show how much score user got 
        alert("GAME OVER");
        // get data from local storage
        var finalScore = localStorage.getItem("score");
        alert("::GET FINALSCORE" + finalScore)
        // storedDataInLocalStorage.innerHTML = finalScore;
    }
    window.location.href = "/game1.html";
});

/**
 * this fxn gets the value of score from local storage 
 * and adds 10 to the value and save it in local storage again
 */
function addPointsInLocal() {
    // get the score 
    var score = Number(localStorage.getItem("score"));
    console.log("::GET SCORE FROM LOCAL INFORM OF NUMBER", score);
    console.log("TYPEOF", typeof (score));
    // add 10 to it
    score = score + 10;
    console.log("Increase Score", score);
    // save it again in local storage     

    localStorage.setItem("score", JSON.stringify(score));
    console.log("::StoreData", localStorage);

}

/**
 * this fxn will return you the  score (as number) saved in local storage 
 */
function getScoreFromLocal() {
    // get the score value from local storage 

    var getValueFromLocal = localStorage.getItem("score");
    console.log("::GET SCORE FROM LOCAL", getValueFromLocal);

    // if no value is saved in local storae return 0;
    if (getValueFromLocal == null && getValueFromLocal == '') {
        return 0;
    }

}


//this fxn will return you the clear storage

function clearLocalStorage() {
    return localStorage.clear();
}
