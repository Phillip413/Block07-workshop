/* Create a String for user saying: "You have received this message because you have been chosen to open an important vault. Here is the secret combination: */
const message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: ";
// console.log(message);

/* Assign 3 variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator(+-* or /). Each must equal one of the three codes in the combination */

// variable for 10
let var1 = 8 + 2;
// variable for 40
let var2 = 48 - 8;

// variable for 39
let var3 = (3%2) + (76/2);
// 3%2 gives a remainder and value of 1, 76/2 = 38, 1 + 38 = 39

/* combines all three variable value into one combination string called combo
using template literals */
let combo = `${var1} - ${var2} - ${var3}.`;

// create a dialog box displaying the vault code
console.log(message + combo);
/* concatenates the message string with the combo string and prints it out onto the HTML Console log */

// creates a pop-up dialog on the HTML webpage containing the same message
alert (message + combo);


/* Create a dialog box displaying the vault codes and the text if using HTML and a script tag, or create a popup dialog. */


