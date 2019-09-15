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



function updatePrompt(ind){
    document.getElementById("dialog").innerHTML = prom[ind];
}

function updateOption1(text) {
    document.getElementById("option1button").innerHTML = text;
}

function updateOption2(text) {
    document.getElementById("option2button").innerHTML = text;
}

function updateBal(amount) {
    document.getElementById("balance").innerHTML = "$" + (money + amount);
}

function updateDate(day){
    document.getElementById("date").innerHTML = "Day " + day;
}

function changeOp1() {
    index = index + 1;
    if (index == 4 || index == 8){
        accident(accidents, costs);
    }
    else{
        updatePrompt(index);
        updateBal(bal1[index]);
        updateDate(index + 1);
        updateOption1(op1[index]);
        updateOption2(op2[index]);
    }
}

function changeOp2() {
    index = index + 1;
    if (index == 4 || index == 8){
        accident(accidents, costs);
    }
    else{
        updatePrompt(index);
        updateBal(bal2[index]);
        updateDate(index + 1);
        updateOption1(op1[index]);
        updateOption2(op2[index]);
    }
}

function checkLoss(money){
    if (money <= 0){

    }

}