var date = 0;
var index = 0;
var totalDays = 30;

var player = new Player(
                        /*balance*/ 1000,
                        /*housing*/ null,
                        /*carType*/ null,
                        /*numChildren*/ 2,
                        /*jobType*/ null
                        );

function diagInit(){
    updatePrompt(introNode.promp);
    updateBal(0);
    updateDate();
    updateLOption(introNode.lChoice);
    updateROption(introNode.rChoice);

}

function updatePrompt(node){
    document.getElementById("dialog").innerHTML = node.promp;
}

function updateLOption(node) {
    document.getElementById("lOption").innerHTML = node.lChoice;
}

function updateROption(node) {
    document.getElementById("rOption").innerHTML = node.rChoice;
}

function updateBal(amount) {
    player.balance = player.balance + amount;
    document.getElementById("balance").innerHTML = "$" + player.balance;
}

function updateDate(){
    document.getElementById("date").innerHTML = "Day " + date;
    date = date + 1;
}



function changeLOp() {
    updatePrompt(tree[index]);
    updateBal(tree[index].lCost);
    updateDate();
    updateLOption(tree[index]);
    updateROption(tree[index]);
    
    checkLoss();
    checkWin();
    
    if(tree[index * 2 + 1] == null){
        index = index * 2 + 2;
    }
    else{
        index = index * 2 + 1;
    }
    
}



function changeROp() {
    updatePrompt(tree[index]);
    updateBal(tree[index].rCost);
    updateDate();
    updateLOption(tree[index]);
    updateROption(tree[index]);
    
    checkLoss();
    checkWin();
    
    if(tree[index * 2 + 2] == null){
        index = index * 2 + 1;
    }
    
    else{
        index = index * 2 + 2;
    }
    
}



function checkLoss(){
    if (player.balance <= 0){
        end();
        document.getElementById("result").innerHTML = "You Lose!";
        document.getElementById("enddisc").innerHTML = "Your savings drop below $0 and you fall into debt.<br>Your Savings: $" + player.balance + "<br>Days survived: " + date;
    }
}

function checkWin() {
    if (date > totalDays){
        end();
        document.getElementById("result").innerHTML = "You Win!";
        document.getElementById("enddisc").innerHTML = "You have made great choices throughout the month and both you and your children survive!<br>Your Savings: $" + player.balance + "<br>Days survived: " + date;
    }

}
