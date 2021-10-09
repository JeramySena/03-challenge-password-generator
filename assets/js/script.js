// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// Each value available for the password is listed out in their own array.
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

var selectedArray = [];
var userArray = [];
var passwordLength = correctPassword ();


// Window prompt for each array/value for password.
function correctPassword () {
  var passwordLength = 0;
    while ((passwordLength < 8) || (passwordLength > 128)) {
      passwordLength = window.prompt("How many characters do you want between 8 and 128?");
      }
    return passwordLength;
  }
  var numbervalue = window.confirm ("Do you want numbers in your password?");
  var uppercase = window.confirm ("Do you want uppercases letters in your password?");
  var lowercase = window.confirm ("Do you want lowercases letters in your password?");
  var specialcharacters = window.confirm ("Do you want special characters in your password?");

  

// condition of the array


if (numbervalue) {
  selectedArray = selectedArray.concat(numberValue);
}

if (uppercase) {
  selectedArray = selectedArray.concat(upperCase);
}

if (lowercase) {
  selectedArray = selectedArray.concat(lowerCase);
}

if (specialcharacters) {
  selectedArray = selectedArray.concat(specialCharacters);
}
console.log(selectedArray)


for (var i = 0; i < passwordLength; i++) {
  userArray.push (selectedArray[Math.floor(Math.random() * selectedArray.length)]); 
  }
  return userArray.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// BONUS EVENT LISTENER
