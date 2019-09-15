var Date = updateDate(initDate);
var money = 1000;
var index = 0;

var initPrompt = intro;
var initOp1 = op1[0];
var initOp2 = op2[0];



function diagInit(){
    updateBal(0);
    document.getElementById("option1button").innerHTML = initOp1;
    document.getElementById("option2button").innerHTML = initOp2;
    document.getElementById("dialog").innerHTML = initPrompt;
}
function updatePrompt(text){
    document.getElementById("dialog").innerHTML = text;
}

function updateOption1(text) {
    document.getElementById("option1button").innerHTML = text;
}

function updateOption2(text) {
    document.getElementById("option2button").innerHTML = text;
}

function updateBal(amount) {
    document.getElementById("balance").innerHTML = "$" + (money + amount);
    money = money + amount;
}

function updateDate(day){
    document.getElementById("date").innerHTML = "Day " + day;
}

function changeOp1() {
    index = index + 1;
    if (index == 3 || index == 7){
        accident(accidents, costs);
    }
    else{
        updatePrompt(prom[index]);
        updateBal(bal1[index-1]);
        updateDate(index);
        updateOption1(op1[index]);
        updateOption2(op2[index]);
    }
    checkLoss(money);
    checkWin(Date);
}

function changeOp2() {
    index = index + 1;
    if (index == 3 || index == 7){
        accident(accidents, costs);
    }

    else{
        updatePrompt(prom[index]);
        updateBal(bal2[index-1]);
        updateDate(index);
        updateOption1(op1[index]);
        updateOption2(op2[index]);
    }
    checkLoss(money);
    checkWin(Date);
}

function checkLoss(money){
    if (money <= 0){
        end();
        document.getElementById("result").innerHTML = "You Lose!";
        document.getElementById("enddisc").innerHTML = "Your savings drop below $0 and you fall into debt.<br>Your Savings: $" + money + "<br>Days survived: " + (index + 1);
    }
}

function checkWin() {
    if (Date >= prom.length-1){
        end();
        document.getElementById("result").innerHTML = "You Win!";
        document.getElementById("enddisc").innerHTML = "You have made great choices throughout the month and both you and your children survive!";
    }

}
