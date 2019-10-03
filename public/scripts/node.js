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
}

// ---------------------------------------------------------/ Tree \-------------------------------------------------------- \\
/*
Essentially the entire branch/path of the game is incorporated into a single binary tree data structure.

Into                        []
                           /  \
Day 1                    []    []
                        / \    / \
Day 2                  [] []  [] []
                      /\  /\  /\  /\
                     [][][][][][][][]
                      ..............


Each node in this tree indicates a branch created by another choice.
Not all nodes need to be filled in, the program automatically deals with empty choices by forcing the player down the other path.
An empty choice is represented by the 'null' element. (The each node/choice already incorporates this in each choice)

When you first make a new node/choice, both the left and right child/branch/path will be initialized as 'null'.
You have to manually (sorry) point each child/branch/path to the next node/choice.

Example:      introNode.leftChild = day_1_Choice_1                                              [intro]
              introNode.rightChild = day_1_Choice_2                                            /       \
                                                                                        [choice1]      [choice2]    <- Selecting the
              day_1_Choice_1.leftChild = day_2_Choice_1     Translates into ->          /     \          /     \       right choice
              day_1_Choice_1.rightChild = day_2_Choice_2                        [choice1] [choice2]  [choice3]  null   will bring
                                                                                 /    \     /    \     /   \           player to
              day_1_Choice_2.leftChild = day_2_Choice_3                        null  null null  null null  null        choice3
              ......................                                            .....................................

You don't have to follow the above diagram/example, you can manually map these branches/paths anyway you like.
You don't have to make 2 branches/paths for each choice, as long as each node/choice points to another node/choice this game could
go indefinitely!

For example, You can make the choices point to one another, so the overall branch/path of the story is circular.
Or you can make only one node, for each day leading the story to be linear
The possiblities are endless.
*/

function makeTree(){
    introNode.leftChild = day_0_Job_Selection;
    
    day_0_Job_Selection.leftChild = day_1_Choosing_Savings;
    
    day_1_Choosing_Savings.leftChild = day_2_Moving;
}


