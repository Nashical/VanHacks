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

To avoid confusion, please follow the naming scheme for the node: day_1_Event_Name
There is an example node created below.

If you are unsure of where to add the node, refer back to the instructions under node.js file.

Some important information to remember:
    - Anything that is text, add " around it. [Example: "This is a sentence"]
    - For the left and right balances, keep them as numbers without " or $. [Example: 100]
        - For gain/addition of funds, keep as regular number. [Example: 1000]
        - For loss/subtraction of funds, add a - in front of the number. [Example: -500]

Example:

day_3_Fair = new Node (
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

day_0_Job_Selection = new Node (
                                "You have to find a job to support your living, which one do you choose?",
  
                                "You choose to work a full time minimum wage job at a local fast food place.  You work daytime hours, Monday to Friday, 7am to 3pm.  Your pre-tax, annual gross income from employment is $28,808. By-weekly that income is $1,008.  After tax, each bi-weekly paycheque is $880.00",
                                0,
                                "People with minumum wage jobs barely meet their bill payments every month.",
  
                                "You choose to apply for student loans and work 25 hours per week at a $20/hour office job.  You take 2 classes per semester at a local University to upgrade your education amd eventually your earning potential.  After tax, your bi-weekly pay is $800.  Your student loans cover your tuition costs but not your books or other school supplies.",
                                0,
                                "Many students who cannot afford the expensive tuition of post-secondary opts for student loans."
                                )
            
day_1_Choosing_Savings = new Node (
                                   "You need to save some money, but how much?",
  
                                   "In order to have enough money on hand to pay your rent you have to make sure you have $600 left in your bank account at the end of the month.  Let's assume you've been successful at that this month.",
                                   600,
                                   "",
  
                                   "In order to have enough money on hand to pay your rent you have to make sure you have $400 left in your bank account at the end of the month.  Let's assume you've been successful at that this month.",
                                   400,
                                   ""
                                   )
            
day_2_Moving = new Node (
                         "",                    
  
                         "Okay",
                         0,
                         "",
  
                         "Okay",
                         0,
                         ""
                         )
