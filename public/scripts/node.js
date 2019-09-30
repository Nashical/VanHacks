class Node{
    constructor(promp, lChoice, lCost, lResult, rChoice, rCost, rResult) {
        this.promp = promp;
        
        this.lChoice = lChoice;
        this.lCost = lCost;
        this.lResult = lResult;
        
        this.rChoice = rChoice;
        this.rCost = rCost;
        this.rResult = rResult;
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
Essentially the entire branch/path of the game is incorporated into a single row list.

Into                        []                                                              [],
                           /  \
Choice 1                 []    []               <- This      Translates into ->             [], [],
                        / \    / \
Choice 2               [] []  [] []                                                         [], [], [], [],
                      /\  /\  /\  /\
                     [][][][][][][][]                                                       [], [], [], [], [], [], [], []
                      ..............                                                        ........................

Each node in this tree indicates a branch created by another choice.
Not all nodes need to be filled in, you can use 'null' to indicate there's no second option/branch which will force the player
down the same path.


Example:        Tree [0] = introNode                                                            [intro]
                Tree [1] = level1Choice1                                                       /       \
                Tree [2] = level1Choice2                                                [choice1]      [choice2]    <- Selecting the
                Tree [3] = level2Choice1        <- This    Translates into ->           /     \          /     \       right choice
                Tree [4] = level2Choice2                                        [choice1] [choice2]  [choice3]  null   will bring
                Tree [5] = level2Choice3                                         /    \     /    \     /   \           player to
                Tree [6] = null                                                 .....................................  choice3
                ......................
*/

var tree = [
            day_0_Job_Selection,
            
            day_1_Choosing_Savings, null,
            
            day_2_Moving, null, null, null

            ];


