// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLength = document.getElementById("charLength");
var inclLowerEl = document.getElementById("inclLower"); 
var form = document.getElementById("pwGenForm");

// Write password to the #password input

form.addEventListener("submit",  e => {
  e.preventDefault()
  var charAmt = charLength.value;
  var inclLower = inclLowerEl.checked;
  var password = generatePassword(length, inclLower, inclUpper, inclNumber, InclSpecial);
})
// function writePassword() {
//   var password = generatePassword(length, inclLower, inclUpper, inclNumber, InclSpecial);
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
