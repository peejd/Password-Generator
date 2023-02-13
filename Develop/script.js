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

// Event listener for button submit 
form.addEventListener("submit",  e => {
  
  // Prevent page reload
  e.preventDefault();

  // Set variables to user selections
  var lower = inclLowerEl.checked;
  var upper = inclUpperEl.checked;
  var number = inclNumberEl.checked;
  var special = inclSpecEl.checked;
  var charAmt = charAmtEl.value;

    // Throw error message if no checkbox is checked or if invalid character length is entered
    if (((!lower) && (!upper) && (!number) && (!special)) || ((charAmt < 8) || (charAmt > 128))) {
      var alertInvalid = "INVALID ENTRY! <br> You must include at least one character type and enter a Password Length value between 8 and 128."
      passwordDisplay.innerText = "";
      invalidAlert.innerHTML = alertInvalid;
    }

    // Otherwise, call generatePassword function and display resulting password on page
    else {
      var password = generatePassword(lower, upper, number, special, charAmt);
      invalidAlert.innerText = "";
      passwordDisplay.style.fontSize ="1.2rem";
      passwordDisplay.innerText = password;
    }
})

// Function to generate password characters
function generatePassword(lower, upper, number, special, charAmt) {
   
  var charCodes = [];

  //  Determine what kind of characters to concatenate into charCodes array based on user selections
   if (lower) charCodes = charCodes.concat(LowerCharCodes);
   if (upper) charCodes = charCodes.concat(UpperCharCodes);
   if (number) charCodes = charCodes.concat(NumberCharCodes);
   if (special) charCodes = charCodes.concat(SpecialCharCodes);

   var passwordCharacters = [];
   
  //  FOR loop to spool random ASCII character codes into passwordCharacter array
  //  based on user selections
   for (var i = 0; i < charAmt; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
   }
   return passwordCharacters.join("")
}

// Function to add ASCII character codes from a given sequential range to array
function characterArray(first, last) {
  var array = []
  for (var i = first; i <= last; i++) {
    array.push(i)
  }
  return array
}

