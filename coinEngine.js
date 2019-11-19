var coinFlip = 0;
var myVar;
var endVar;
var counter = 0;
var endGame;
var coinFlipNTimes;
var headCount = 0;
var tailCount = 0;
var percentHeads = 0.0;

/*function stopFunction(){
    if(counter === coinFlipNTimes){
        endGame = clearInterval(flipFunction);
    }
}*/
function flipFunction(){
    coinFlipNTimes = document.getElementById("numFlips").value;
    console.log("Times:" + coinFlipNTimes);
    myVar = setInterval(coinFlipper, 1000);
}

function endFlip(){
    endVar = clearInterval(myVar);
}
function coinFlipper() {
    coinFlip = Math.floor(Math.random() * 2) + 1;
    if(coinFlip === 1){
        document.getElementById("flipResult").innerHTML = '<img align="center" width="50" height="50" src="heads.gif"/>';
        headCount = headCount + 1;
        document.getElementById("headCount").innerHTML = headCount;
    }
    else {
        document.getElementById("flipResult").innerHTML = '<img align="center" width="50" height="50" src="tails.gif"/>';
        tailCount = tailCount + 1;
        document.getElementById("tailCount").innerHTML = tailCount;
    }
    counter = counter + 1;

    if(counter == coinFlipNTimes){
        endFlip();
        percentHeads = (headCount / coinFlipNTimes);
        document.getElementById("percentOfHeads").innerHTML = "The coin landed on heads " + (percentHeads.toFixed(2) * 100) + "% of the time";

    }

}

