var initDate = 0;

var intro = "You are a single parent with two children, 8 months and 6 years old.  You are recently separated from your spouse who works a full time minimum wage job and regularly pays less than his court ordered child maintenance due to lack of funds.";

var op1 = ["Okay",
    "In order to have enough money on hand to pay your rent you have to make sure you have $400 left in your bank account at the end of the month.  Let's assume you've been successful at that this month.",
    "You choose to work a full time minimum wage job at a local fast food place.  You work daytime hours, Monday to Friday, 7am to 3pm.  Your pre-tax, annual gross income from employment is $28,808. By-weekly that income is $1,008.  After tax, each bi-weekly paycheque is $880.00",
    "",
    "Next",
    "You rent a 1 bedroom basement suite in Vancouver, within walking distance of your work and your kids school.  Your children share the bedroom while you sleep on a futon in the living room.",
    "Next",
    "",
    "You own a used car, a 1999 Ford Escape.  Because you live so close to work, you don't drive it more than a few km per week for groceries and errands.  You do make one longer trip per week ot Abbotsford for Sunday dinner with your parents.  You pay your insurance monthly and it's due later in the month, but you need today.",
    "Next",
    "You choose to pay for internet at home.",
    "Next"
];

var bal1 = [0,
    400.00,
    880.00,
    0,
    -800.00,
    880.00,
    -20.00,
    0,
    880.00,
    -90.00,
    -475.00
];

var op2 = ["Okay",
    "In order to have enough money on hand to pay your rent you have to make sure you have $600 left in your bank account at the end of the month.  Let's assume you've been successful at that this month.",
    "You choose to apply for student loans and work 25 hours per week at a $20/hour office job.  You take 2 classes per semester at a local University to upgrade your education amd eventually your earning potential.  After tax, your bi-weekly pay is $880.  Your student loans cover your tuition costs but not your books or other school supplies.",
    "",
    "Next",
    "You rent a 2 bedroom apartment in North Burnaby, a 40 minute drive from your work.  Your children share one bedroom and you have the other.",
    "Next",
    "",
    "Dinner at your parents house in Abbotsford.  Because you don't own a car, your dad drives in to pick you up.  You give him $20 for gas.",
    "Next",
    "You choose to not have internet at home but spend more on your cellphone so you have a better data plan.  Your bill is due.",
    "Next"
];

var bal2 = [0,
    600.00,
    880.00,
    0,
    100.00,
    -1000.00,
    880.00,
    -20.00,
    0,
    880.00,
    -110.00,
    -475.00
];

var prom = ["",
    "You need to save some money, but how much?",
    "You have to find a job to support your living, which one do you choose?",
    "",
    "After rent, you have $0 left in your bank account until your next paycheque.  You take out a $100 payday loan so you can buy groceries for the week.",
    "You need a place to move to that suits your needs, which place do you choose?",
    "Payday!",
    "",
    "You have to go out tonight, what do you do?",
    "You need some sort of wireless network, which one do you choose?",
    "Childcare fees are due tomorrow.  You have one child in full time care ($1250/month) and one in before and after school care ($650/month).  You get subsidy from the government for $1425, but still have to pay $475 each month.",
];

var accidents = ["You need groceries.  Luckily your daughter's school has a subsidized lunch program but your sons daycare does not provide lunches.  The baby also needs diapers and you're still weaning him off formula. With what you have left in your bank account, you can only afford some ground beef, spaghetti sauce makings, a jug of milk, a loaf of bread, a bag of apples, pasta and a small pack of diapers.",
    "You get hit by another vehicle on your way home from family dinner in Abbotsford.  You have to miss a day of work, pay your deductible, and take transit for a couple of days which costs you late fees at daycare.  You do not have the money for your deductible.  Do you borrow it from your parents?",
    "Your daughter is playing with the neighbourhood kids and accidentally breaks a neighbours window.  They insist you pay their $100 insurance deductible to replace the window.  Do you pay it?  Do you move?  Do you refuse to pay it and avoid the neighbours for the rest of your life?",
    "Your son gets a bad cold and can't be sent to daycare for three days.  You miss 10 hours of work to stay home and care for him.",
    "You have to pay your Rental Insurance costs.",
    "Your payday loan is due, plus 20% interest.",
    "You need to buy textbooks for your two classes this semester.",
    "Your car insurance is automatically taken out of your bank account on this day each month",
    "Your cell phone bill is due."
];

var costs = [-80,
    -300.00,
    -100.00,
    -120,
    -30.00,
    -120.00,
    -170.00,
    -130.00,
    -90.00,
];

function accident(text, values){
    var rand = Math.floor(Math.random() * (+text.length - +0)) + +0;
    updatePrompt(text[rand]);
    money = money + values[rand];
    updateDate(index)
    updateOption1("Next");
    updateOption2("Next");
}

//"You can not qualify for an overdraft on your bank account.  You do not have a credit card but you need to feed your kids.  You go to the food bank and get a 2 to 3 day food supplement, including diapers and formula for the baby" 0

//"Groceries.  Before you pay anything else you go shopping for groceries that will hopefully last a couple of weeks.  You buy diapers, as well as milk, bread, and other basics.\" -$250.00\n" +

//"You qualify for the BC Early Childhood Tax Benefit of $55 per month and the Canada Child Benefit of $1020 combined for both your children,\"+$1,075.00\"\n"
//"Your former spouse is able to give you the rest of his owed child support for the month. +$164.00"

//"Hydro on one bedroom basement suite -$60.00, Hydro on 2 bedroom apartment -$70.00,\n" +