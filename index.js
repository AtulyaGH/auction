var currentBidder;
var timeLeft = 30;
var countdownTimer;
var totalBudget;
var utilisedBudget;
var remainingBudget;
var price;
var playerName;
var playerType;
    function putValue() { let txt;
        let pInfo=document.getElementById("p1").value;
        let pCat=document.getElementById("p2").value;
        document.getElementById("pInfo").innerText=pInfo;
        document.getElementById("pCat").innerText=pCat;
        txt= document.getElementById("i1").value;     
        document.getElementById("a1").innerText=txt;  
        document.getElementById("team").innerText="";
        resetTimer();
        currentBidder="";

    }
function bid1() {
    if (Number(document.getElementById("a1").innerText)<Number(document.getElementById("budget41").innerText)) { 
        currentBidder="KALINGA TUSKERS";
    document.getElementById("a1").innerText=Number(document.getElementById("a1").innerText)+1;
    let txts;
    txts= document.getElementById("b1").value;
    document.getElementById("team").innerText="by "+txts;
    resetTimer();
    }
    else{
        alert("Out of budget");
    }
}
function bid2() {
    if (Number(document.getElementById("a1").innerText)<Number(document.getElementById("budget42").innerText)) {
        currentBidder="NAAGSHAKTI";
    document.getElementById("a1").innerText=Number(document.getElementById("a1").innerText)+1;
    let txts;
    txts= document.getElementById("b2").value;
    document.getElementById("team").innerText="by "+txts;
    resetTimer();
}
else{
    alert("Out of budget");
}
}
function bid3() {
    if (Number(document.getElementById("a1").innerText)<Number(document.getElementById("budget43").innerText)) {
        currentBidder="POWER PACERS";
    document.getElementById("a1").innerText=Number(document.getElementById("a1").innerText)+1;
    let txts;
    txts= document.getElementById("b3").value;
    document.getElementById("team").innerText="by "+txts;
    resetTimer();
}
else{
    alert("Out of budget");
}
}
function sold() {
    playerName=document.getElementById("p1").value;
    playerType=document.getElementById("p2").value;
    price= document.getElementById("a1").innerText;
    document.getElementById("info").innerText+= "\n"+playerName+"("+playerType+") is sold to "+currentBidder+" in "+price+" lakh(s). Congratulations🥳";
    clearInterval(countdownTimer);
    document.getElementById("timer").innerText="";
    document.getElementById("a1").innerText="0";
    document.getElementById("team").innerText="by TEAM";
    calculate();
    assign();
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
            sold();
        }
    }, 1000);
}
function calculate() {
    let a;
    let b;
    if (currentBidder=="KALINGA TUSKERS") {
        a="budget31";
        b="budget41";
    }
    else if (currentBidder=="NAAGSHAKTI"){
        a="budget32";
        b="budget42";
    }
    else if(currentBidder="POWER PACERS"){
        a="budget33";
        b="budget43";
    }
    utilisedBudget=Number(document.getElementById(a).innerText)+Number(price);
    remainingBudget=Number(document.getElementById(b).innerText)-Number(price);
    document.getElementById(a).innerText=utilisedBudget;
    document.getElementById(b).innerText=remainingBudget;
}
function assign() {
    let c;
    if (currentBidder=="KALINGA TUSKERS") {
        c="team11";
    }
    else if (currentBidder=="NAAGSHAKTI"){
        c="team12";
    }
    else if(currentBidder="POWER PACERS"){
        c="team13";
    }
    document.getElementById(c).innerText+="\n"+playerName;
}
