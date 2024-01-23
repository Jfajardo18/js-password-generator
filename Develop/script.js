// Assignment Code
var generateBtn = document.querySelector("#generate");

//fit it all in a giant function?
function generatePassword() {

  // all possible characters
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  //first prompt
  var length = prompt("choose a length of at least 8 characters and no more than 128 characters")

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
