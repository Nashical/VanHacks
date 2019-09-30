class Node{
    constructor(promp, lChoice, lCost, lResult, rChoice, rCost, rResult) {
        this.promp = promp;
        
        this.lChoice = lChoice;
        this.lCost = lCost;
        this.lResult = lResult;
        
        this.rChoice = rChoice;
        this.rCost = rCost;
        this.rResult = rResult;
        
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

    getLResult(){
        return this.lResult;
    }
    
    getRResult(){
        return this.rResult;
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

// ---------------------------------------------------------/ Tree \-------------------------------------------------------- \\
/*
Essentially the entire branch/path of the game is incorporated in a 2 dimensional table.

Into                        []                                                              []
                           /  \
Choice 1                 []    []               <- This      Translates into ->             [] []
                        / \    / \
Choice 2               [] []  [] []                                                         [] [] [] []
                      /\  /\  /\  /\
                     [][][][][][][][]                                                       [] [] [] [] [] [] [] []
                      ..............                                                        ........................

Each node in this tree indicates a branch created by another choice.
Not all nodes need to be filled in, you can use 'null' to indicate there's no second option/branch which will force the player
down the same path.


Example:        Tree [0] [0] = introNode                                                            [intro]
                Tree [1] [0] = level1Choice1                                                       /       \
                Tree [1] [1] = level1Choice2                                                [choice1]      [choice2]    <- Selecting the
                Tree [2] [0] = level2Choice1        <- This    Translates into ->           /     \          /     \       right choice
                Tree [2] [0] = level2Choice2                                        [choice1] [choice2]  [choice3]  null   will bring
                Tree [2] [0] = level2Choice3                                         /    \     /    \     /   \           player to
                Tree [2] [0] = null                                                 .....................................  choice3
                ......................
*/

var tree = [][];

/*
function addNodes() {
    for (i = 1; i < prom.length; i++) {
        makeNode(i)
    }
}
*/

/*
function makeNode(level, index){
    node = new Node (prom[index], bal1[index], bal2[index], op1[index], op2[index]);

    tree[level][index] = node;
}
*/

function addIntro(){
    introNode = new Node (intro, bal1[0], bal2[0], op1[0], op2[0]);
    tree[0][0] = introNode;
}

/*
function makeTree(){
    addIntro();
    addNodes();
}
*/
