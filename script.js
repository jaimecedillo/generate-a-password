// Assignment code here

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "~`! @#$%^&*()_-+={[}]|?";
function generateRandomLetter() {

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return randomCharacter = upperCase[Math.floor(Math.random() * upperCase.length)]
}
var passwordLength

prompt('How long would you like your password to be? Limit 8 to 128 characters long. Please enter number desired.');
confirm('Would you like your password to have Uppercase letters?');
confirm('Would you like your password to have Lowercase letters?');
confirm('Would you like your password to have Numbers?');
confirm('Would you like your password to have special characters?');
alert("Please select at least one option");
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
document.getElementById(generate).addEventListener("click", writePassword);

function writePassword() {
  document.getElementById("generate").innerHTML = password;
}