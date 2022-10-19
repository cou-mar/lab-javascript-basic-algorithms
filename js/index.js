console.log("I'm ready!");

// Iteration 1: Names and Input
const hacker1 = "Daniela";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Courtney"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has XX characters.")
  } else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has XX characters.")
  } else {
    console.log("Wow, you both have equally long names, XX characters!")
  }

// Iteration 3: Loops

///3.1
let capHacker = " ";

  for (let letter of hacker1) {
  capHacker = capHacker + letter + " "
  }

console.log(capHacker.toUpperCase());

// 3.2
let backwards = "";
  for(let i = hacker2.length - 1; i >= 0; i--){
    backwards += hacker2.charAt(i);
  }
console.log(backwards);
/* alternate solution
    console.log(hacker1.split('').reverse().join(""))
    splits the name into an array of individual letters, then reverses their order
*/

// 3.3
if (hacker1.localeCompare(hacker2)-1){
    console.log("The driver's name goes first")
 } else if (hacker2.localeCompare(hacker1)){
   console.log("Yo, the navigator goes first definitely")
 } else {
   console.log("What?! You both have the same name?")
 }
 /* alternate solution
    if (hacker1.localeCompare(hacker2) === -1) {
        console.log("Driver goes first")
    } else if {
        (hacker1.localeCompare(hacker2) === 1) {
        console.log("Navigator goes first")
        } else {
            console.log("What?! You both have the same name?")
        }
    }
    Dustin said ours evaluated truthy and falsey values
 */

// bonus 1.1
let splitParagraph = paragraph.split(" ")
let result = 0;

for (let i = 0; i<= splitParagraph.length; i++){
  result++
}
  
console.log(splitParagraph.length)


