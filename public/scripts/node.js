class Node{
    constructor(promp, lCost, rCost, lChoice, rChoice, result) {
        this.promp = promp;
        this.lCost = lCost;
        this.rCost = rCost;
        this.leftChoice = lChoice;
        this.rightChoice = rChoice;
        this.result = result;
        this.leftChild = null;
        this.rightChild = null;
    }

    getPrompt(){
        return this.promp;
    }

    getLCost(){
        return this.lCost;
    }

    getRCost(){
        return this.rCost;
    }

    getResult(){
        return this.result;
    }

    getLeftChoice(){
        return this.leftChoice;
    }

    getRightChoice(){
        return this.rightChoice;
    }

    getLeftChild(){
        return this.leftChild;
    }

    getRightChild(){
        return this.rightChild;
    }

    assignLeft(lChild){
        this.leftChild = lChild;
    }

    assignRight(rChild){
        this.rightChild = rChild;
    }
}

var tree = [];

function addNodes() {
    for (i = 1; i < prom.length; i++) {
        makeNode(i)
    }
}
function makeNode(index){
    node = new Node (prom[index], bal1[index], bal2[index], op1[index], op2[index]);

    tree[index] = node;
}

function addIntro(){
    introNode = new Node (intro, bal1[0], bal2[0], op1[0], op2[0]);
    tree[0] = introNode;
}

function makeTree(){
    addIntro();
    addNodes();
}