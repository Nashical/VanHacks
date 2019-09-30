/*
To create a new node, copy the code below and paste it at the end of this file.
Remember to replace each field with the appropriate text/balance!

____________________________________________________________________________________________________________

"Name of node" = new Node (
                           "Replace with dialogue",
                           
                           "Replace with left button choice",
                           "Replace with left balance amount",
                           "Replace with left result text"
                           
                           "Replace with right button choice",
                           "Replace with right balance amount",
                           "Replace with right result text"
                           )
____________________________________________________________________________________________________________

To avoid confusion, please follow the naming scheme for the node: level_1_Left_Choice_2
There is an example node created below.

If you are unsure of where to add the node, refer back to the instructions under node.js file.

Some important information to remember:
    - Anything that is text, add " around it. [Example: "This is a sentence"]
    - For the left and right balances, keep them as numbers without " or $. [Example: 100]
        - For gain/addition of funds, keep as regular number. [Example: 1000]
        - For loss/subtraction of funds, add a - in front of the number. [Example: -500]

Example:

level_3_Right_Choice_2 = new Node (
                                   "Your son wants to go to the fair, do you give him $20 to go?",
                                   
                                   "Yes, allow him to go",
                                   -20,
                                   "Your son had a good time at the fair at the cost of $20 of your savings.",
                                   
                                   "No, save the money for other things",
                                   0,
                                   "Sadly, many children living in pverty does not get to enjoy these opportunities"
                                   )

*/

introNode = new Node (
                      "You are a single parent with two children, 8 months and 6 years old.  You are recently separated from your spouse who works a full time minimum wage job and regularly pays less than his court ordered child maintenance due to lack of funds.",
                      
                      "Okay",
                      0,
                      "",
  
                      "Okay",
                      0,
                      ""
                      )

