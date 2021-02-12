
// Arrays of all character options
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "0123456789".split("");
var specialCharacters = "~`! @#$%^&*()_-+={[}]|?".split("");
// function to collect user's options
function getPasswordOptions() {

  // prompts to obtain user's options
  var passwordLength = parseInt(prompt('How long would you like your password to be? Limit 8 to 128 characters long. Please enter number desired.'));
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please select number within range")
    return
  }

  var wantsUpper = confirm('Would you like your password to have Uppercase letters?');
  var wantsLower = confirm('Would you like your password to have Lowercase letters?');
  var wantsNumber = confirm('Would you like your password to have Numbers?');
  var wantsSpecial = confirm('Would you like your password to have special characters?');
  // alert user to seclect at least one option
  if (!wantsUpper && !wantsLower && !wantsNumber && !wantsSpecial) {
    alert("Please select at least one option");
    return
  }
  // all of user's choices
  var userChoices = {
    length: passwordLength,
    hasUpper: wantsUpper,
    hasLower: wantsLower,
    hasNumber: wantsNumber,
    hasSpecial: wantsSpecial,
  }
  return userChoices;
}
// function to get random characters
function obtainRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomElement = arr[randomIndex]
  return randomElement
}

// function to generate password with all of the users choices
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
    possibleCharacters = possibleCharacters.concat(numbers);
    confirmedCharacters.push(obtainRandom(numbers))
  }

  if (userOptions.hasSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    confirmedCharacters.push(obtainRandom(specialCharacters))
  }


  // for loop to get random characters
  for (i = 0; i < userOptions.length; i++) {

    var possibleCharacters = obtainRandom(possibleCharacters)
    result.push(possibleCharacters)
  }
  for (i = 0; i < confirmedCharacters.length; i++) {
    result[i] = confirmedCharacters[i]
  }
  // returns the result
  return result.join("");
}

// Get references to the #generate element
var generateButton = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);

