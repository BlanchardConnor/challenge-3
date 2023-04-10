// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(length, characters) {
console.log("button clicked");

// 1. Prompt user for password criteria
prompt("Hello, user. Let's make a password");

//  a. Password length (8<128)
var length = parseInt(prompt("How long is your password? (8-128 characters):"));

//   a 2. What if the entry doesn't meet the required criteria?
if (isNaN(length) || length < 8 || length > 128) {
  alert("Invalid length, please enter a number between 8-128.");
  return;
}

//  b. Lowercase, uppercase, numbers, special characters
var lowercase = confirm("Include lowercase letters?");
var uppercase = confirm("Include uppercase letters?");
var numbers = confirm("Include numbers?");
var special = confirm("Include special characters?");

// 2. Validate input
var characters = "";
if (lowercase) {
  characters += "abcdefghijklmnopqrstuvwxyz";
}
if (uppercase) {
  characters += "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
}
if (numbers) {
  characters += "0123456789";
}
if (special) {
  characters +=  "!@#$%^&*()-_=+[]{}\\|;:'\",.<>/?";
}

// 3. Generate password based on criteria
var password = "";
for (var i = 0; i < length; i++) {
  password += characters.charAt(Math.floor(Math.random() * characters.length));
}
// 4. Display password to the page
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
