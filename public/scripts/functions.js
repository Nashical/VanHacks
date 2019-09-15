//var date = updateDate(initDate);
//var money = updateBal(initMoney);
var index = 0;

var diagtext,opt1text,opt2text;


//var initOp1 = op1[0].toString();
//var initOp2 = op2[0].toString();

function diagInit(){
    diagtext = document.getElementById("dialog").innerHTML;
    opt1text = document.getElementById("balance").innerHTML;
    opt2text = document.getElementById("balance").innerHTML;
}

/*
function updatePrompt(ind){
    document.getElementById("dialog").innerHTML = prom[ind].toString();
}

function updateOption1(text) {
    document.getElementById("option1button").innerHTML = text.toString();
}

function updateOption2(text) {
    document.getElementById("option2button").innerHTML = text.toString();
}

function updateBal(amount) {
    document.getElementById("balance").innerHTML = ("$" + (money + amount)).toString();
}

function updateDate(day){
    document.getElementById("date").innerHTML = ("Day " + day).toString();
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

*/