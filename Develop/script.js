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
  
  if (length < 8 || length > 128) {
    alert("Please enter an amount between 8 and 128 characters");
  }

  //now have to prompt which types of characters to use
  //variables first
  var useLowercase = confirm("Include Lowercase characters?");
  var useUppercase = confirm("Include Uppercase Characters?");
  var useNumbers = confirm("Include Numbers?");
  var useSpecial = confirm("Include Special Characters?");

  //make sure at least one type is picked
  if (!(useLowercase || useUppercase || useNumbers || useSpecial)) {
    alert("Please pick at least one character type.")
  }

  //combine all the selected inputs
  //set a variable to contain all the chosen characters and then append the choices with if statements!
  var chosenChars = "";
  if(useLowercase) chosenChars += lowercaseChars;
  if(useUppercase) chosenChars += uppercaseChars;
  if(useNumbers) chosenChars += numbers;
  if(useSpecial) chosenChars += specialChars;

  //fingers crossed now we just generate password
  // used codeforum.org for help with writing this last part as I got stuck with how to get the randomization and math.
  var password = "";
  for (var i = 0; i < length; i++){
    var randomIndex = Math.floor(Math.random() * chosenChars.length);
    password += chosenChars.charAt(randomIndex);
  }

  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
