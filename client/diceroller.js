/*
 *  When the window loads, the rollButton is assigned
 *  to rollDice on clock. Also, rollDice is called on
 *  load too. We also set the button to be auto focused.
 */
window.onload = function() {
    var rollButton = document.getElementById("rollButton");
    rollButton.onclick = rollDice;
    rollButton.autofocus = true;
    rollButton.focus();
    rollDice();
}

/*
 *  Calculates a random number from 1-6. Changes
 *  the diceRollCount paragraph to that number,
 *  loads the appropriate dice image that reflects
 *  that number, and calculates and loads the win
 *  condition to which the winCondition paragraph
 *  is updated.
 */
function rollDice() {
    var randNum = Math.floor(Math.random()*6) + 1;
    document.getElementById("diceRollCount").innerHTML = "You rolled a " + randNum + "!";
    loadDice(randNum);
    loadWinStatus(calculateWinStatus(randNum));
}

/*
 *  Loads the appropriate dice image based on
 *  the number given.
 */
function loadDice(randNum) {
    var imgString = "diceimg/dice" + randNum.toString() + ".png";
    document.getElementById("diceImg").src=imgString;
}

/*
 *  Returns true if randNum is even.
 *  Otherwise, returns false.
 */
function calculateWinStatus(randNum) {
    if (randNum%2==0) {
        return true;
    }
    else return false;
}

/*
 *  Changes winStatus to reflect if the
 *  user won or lost.
 */
function loadWinStatus(winStatus) {
    var winStatusString;
    if (winStatus) winStatusString = "Even Number? Well, you won it seems! :)";
    else winStatusString = "Odd Number? Must be 'odd' that you lost! :(";

    document.getElementById("winCondition").innerHTML = winStatusString;
}
