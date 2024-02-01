var currentBidder;
var timeLeft = 30;
var countdownTimer;
    function putValue() { let txt;
        txt= document.getElementById("i1").value;     
        document.getElementById("a1").innerText=txt;  
        document.getElementById("team").innerText="";
        resetTimer();

    }
function bid1() {
    currentBidder="Team 1";
    document.getElementById("a1").innerText=Number(document.getElementById("a1").innerText)+1;
    let txts;
    txts= document.getElementById("b1").value;
    document.getElementById("team").innerText="by "+txts;
    resetTimer();
}
function bid2() {
    currentBidder="Team 2";
    document.getElementById("a1").innerText=Number(document.getElementById("a1").innerText)+1;
    let txts;
    txts= document.getElementById("b2").value;
    document.getElementById("team").innerText="by "+txts;
    resetTimer();
}
function bid3() {
    currentBidder="Team 3";
    document.getElementById("a1").innerText=Number(document.getElementById("a1").innerText)+1;
    let txts;
    txts= document.getElementById("b3").value;
    document.getElementById("team").innerText="by "+txts;
    resetTimer();
}
function sold() {
    let playerName=document.getElementById("p1").value;
    let playerType=document.getElementById("p2").value;
    let price= document.getElementById("a1").innerText;
    document.getElementById("info").innerText+= "\n"+playerName+"("+playerType+") is sold to "+currentBidder+" in "+price+" lakh(s). Congratulations🥳";
    clearInterval(countdownTimer);
    document.getElementById("timer").innerText="";
}
function unSold() {
    let playerName=document.getElementById("p1").value;
    let playerType=document.getElementById("p2").value;
    document.getElementById("info").innerText+= "\n"+playerName+"("+playerType+") is unsold. Better luck next time😞";
    clearInterval(countdownTimer);
    document.getElementById("timer").innerText="";
}
function resetTimer() {
    clearInterval(countdownTimer);
    timeLeft = 30;
    startTimer();
}


function startTimer() {
    countdownTimer = setInterval(function() {
        
        document.getElementById("timer").innerText=timeLeft;
        timeLeft -= 1;
    
        if (timeLeft < 1) {
            clearInterval(countdownTimer);
        }
    }, 1000);
}
