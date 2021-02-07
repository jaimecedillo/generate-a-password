// Assignment code here

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "0123456789".split("");
var specialCharacters = "~`! @#$%^&*()_-+={[}]|?".split("");
function generateRandomLetter() {

  return randomCharacter = upperCase[Math.floor(Math.random() * upperCase.length)]
}
function getPasswordOptions() {

  var passwordLength = parseInt(prompt('How long would you like your password to be? Limit 8 to 128 characters long. Please enter number desired.'));
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Select number within range")
    return;
  }
  var wantsUpper = confirm('Would you like your password to have Uppercase letters?');
  var wantsLower = confirm('Would you like your password to have Lowercase letters?');
  var wantsNumber = confirm('Would you like your password to have Numbers?');
  var wantsSpecial = confirm('Would you like your password to have special characters?');
  if (!wantsUpper && !wantsLower && !wantsNumber && !wantsSpecial) {
    alert("Please select at least one option");
    return;
  }
  var userChoices = {
    length: passwordLength,
    hasUpper: wantsUpper,
    hasLower: wantsLower,
    hasSpecial: wantsSpecial,
    hasNumber: wantsNumber,
  }
  return userChoices
}
function generatePassword() {
  var userOptions = getPasswordOptions()
  var possibleCharacters = []
  var garantiedCharacters = []
  var result = []
  if (userOptions.hasUpper) {
    possibleCharacters = possibleCharacters.concat(upperCase)
  }










}

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

// function writePassword() {
//   document.getElementById("generate").innerHTML = password;
// }