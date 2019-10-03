var date = 0;
var totalDays = 30;

var player = new Player(
                        /*balance*/ 1000,
                        /*housing*/ null,
                        /*carType*/ null,
                        /*numChildren*/ 2,
                        /*jobType*/ null
                        );

var currentNode = introNode;

function diagInit(){
    updatePrompt(currentNode);
    updateBal(0);
    updateLOption(currentNode);
    updateROption(currentNode);
}

function updatePrompt(node){
    document.getElementById("game-dialog").innerHTML = node.promp;
}

function updateLOption(node) {
    document.getElementById("topOption").innerHTML = node.lChoice;
}

function updateROption(node) {
    document.getElementById("bottomOption").innerHTML = node.rChoice;
}

function updateBal(amount) {
    player.balance = player.balance + amount;
    document.getElementById("game-balance").innerHTML = "Balance: $" + player.balance;
}

function updateDate(){
    document.getElementById("game-date").innerHTML = "Day " + date;
    date = date + 1;
}



function changeLOp() {
    if(currentNode.leftChild == null){
        if(currentNode.rightChild == null){
            return result
        }
      
        else{
            currentNode = currentNode.rightChild;
        }
    }
  
    else{
        currentNode = currentNode.leftChild;
    }  
  
    updatePrompt(currentNode);
    updateBal(currentNode.lCost);
    updateDate();
    updateLOption(currentNode);
    updateROption(currentNode);
    
    checkLoss();
    checkWin();
}



function changeROp() {
    if(currentNode.rightChild == null){
        if (currentNode.leftChild == null){
            return result
        }
      
        else{
            currentNode = currentNode.leftChild;
        }
    }
  
    else{
        currentNode = currentNode.rightChild;
    }
  
    updatePrompt(currentNode);
    updateBal(currentNode.rCost);
    updateDate();
    updateLOption(currentNode);
    updateROption(currentNode);
    
    checkLoss();
    checkWin(); 
}



function checkLoss(){
    if (player.balance <= 0){
        end();
        document.getElementById("ending-result").innerHTML = "You Lose!";
        document.getElementById("ending-dialog").innerHTML = "Your savings drop below $0 and you fall into debt.<br>Your Savings: $" + player.balance + "<br>Days survived: " + date;
    }
}

function checkWin() {
    if (date > totalDays){
        end();
        document.getElementById("ending-result").innerHTML = "You Win!";
        document.getElementById("ending-dialog").innerHTML = "You have made great choices throughout the month and both you and your children survive!<br>Your Savings: $" + player.balance + "<br>Days survived: " + date;
    }

}
