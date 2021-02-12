// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Assignment code here

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "0123456789".split("");
var specialCharacters = "~`! @#$%^&*()_-+={[}]|?".split("");

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
    hasNumber: wantsNumber,
    hasSpecial: wantsSpecial,
  }
  return userChoices;
}

function obtainRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomElement = arr[randomIndex]
  return randomElement
}


function generatePassword() {
  var userOptions = getPasswordOptions()
  var possibleCharacters = []
  var confirmedCharacters = []
  var result = []

  if (userOptions.hasUpper) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    confirmedCharacters.push(obtainRandom(upperCase))
  }

  if (userOptions.hasLower) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    confirmedCharacters.push(obtainRandom(lowerCase))
  }

  if (userOptions.hasNumber) {
    possibleCharacters = possibleCharacters.concat(hasNumber);
    confirmedCharacters.push(obtainRandom(numbers))
  }

  if (userOptions.hasSpecial) {
    possibleCharacters = possibleCharacters.concat(hasSpecial);
    confirmedCharacters.push(obtainRandom(specialCharacters))
  }



  for (var i = 0; i < possibleCharacters; i++) {

    userChoices.push(result[Math.floor(Math.random() * result.length)]);
  }
  return userChoices.join("");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

