// Variable for Generate Password Button
var generateBtn = document.querySelector("#generate");

// Variable for invalid entry alert
var invalidAlert = document.getElementById("alert");

// Variables for user input elements
var inclLowerEl = document.getElementById("inclLower"); 
var inclUpperEl = document.getElementById("inclUpper"); 
var inclNumberEl = document.getElementById("inclNumber"); 
var inclSpecEl = document.getElementById("inclSpecial"); 
var charAmtEl = document.getElementById("charLength");

// Variable for form (for event listener)
var form = document.getElementById("pwGenForm");

// Variable for Generated PW display area
var passwordDisplay = document.getElementById("password")

// Variables to store first and last ASCII Character Codes in range for each character type
var LowerCharCodes = characterArray(97, 122);
var UpperCharCodes = characterArray(65, 90);
var NumberCharCodes = characterArray(48, 57);
var SpecialCharCodes = characterArray(33, 47).concat(
    characterArray(58, 64)
  ).concat(
    characterArray(91, 96)
  ).concat(
    characterArray(123, 126)
  )

// Function to generate password characters
function generatePassword(lower, upper, number, special, charAmt) {
   
  var charCodes = [];

  //  Determine what kind of characters to include in charCodes array based on user input
   if (lower) charCodes = charCodes.concat(LowerCharCodes);
   if (upper) charCodes = charCodes.concat(UpperCharCodes);
   if (number) charCodes = charCodes.concat(NumberCharCodes);
   if (special) charCodes = charCodes.concat(SpecialCharCodes);

   var passwordCharacters = [];
   
  //  FOR loop to concatenate all relevant ASCII character codes into passwordCharacter array
  //  based on user input.
   for (var i = 0; i < charAmt; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
   }
   return passwordCharacters.join("")
}

// Functino to add ASCII character codes from a given sequential range to array
function characterArray(first, last) {
  var array = []
  for (var i = first; i <= last; i++) {
    array.push(i)
  }
  return array
}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
