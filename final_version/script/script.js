// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowerArray =  "abcdefghijklmnopqrstuvwxyz"
var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numArray = "1234567890"
var symArray = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~\\\""
var resultPassword = ""



//lowercase 0 to 26(27), uppercase 27 to 52(53), numbers 53 to 62(63), symbols 64 to 97(98)
// Write password to the #password input
function writePassword() {
  var startProcess = confirm("Hey there, let's set you up with a strong password. Ready to get started?");
  if (startProcess) {
    var lengthPass = prompt("Alright! This is going to be fun, so let's get started! Plese enter a numerical value from 8 to 128 to select your password lengh: ");
    var upper = confirm("Would you like any uppercase characters in your password?");
    var num = confirm("Would you like any numbers in your password?");
    var symbol = confirm("Would you like any special characters in your password?");
    //just lower(works)
      if (!upper && !num && !symbol) {
        for(var i = 0; i<parseInt(lengthPass); i++){
          var randomNum = Math.floor(Math.random() * lowerArray.length);
          resultPassword = resultPassword +  lowerArray[randomNum];}
          passwordText.value = resultPassword;
      }else if (upper && !num && !symbol) {
        var conArray = lowerArray.concat(upperArray);
        for(var i = 0; i<parseInt(lengthPass); i++){
          var randomNum = Math.floor(Math.random() * conArray.length);
          resultPassword = resultPassword +  conArray[randomNum];}
          passwordText.value = resultPassword;
      }else if (!upper && num && !symbol) {
        var conArray = lowerArray.concat(numArray);
        for(var i = 0; i<parseInt(lengthPass); i++){
          var randomNum = Math.floor(Math.random() * conArray.length);
          resultPassword = resultPassword +  conArray[randomNum];}
          passwordText.value = resultPassword;
      }else if (!upper && !num && symbol) {
        var conArray = lowerArray.concat(symArray);
        for(var i = 0; i<parseInt(lengthPass); i++){
          var randomNum = Math.floor(Math.random() * conArray.length);
          resultPassword = resultPassword +  conArray[randomNum];}
          passwordText.value = resultPassword;
      }else if (upper && num && !symbol) {
        var conArray = lowerArray.concat(upperArray, numArray);
        for(var i = 0; i<parseInt(lengthPass); i++){
          var randomNum = Math.floor(Math.random() * conArray.length);
          resultPassword = resultPassword +  conArray[randomNum];}
          passwordText.value = resultPassword;
      }else if (!upper && num && symbol) {
        for(var i = 0; i<parseInt(lengthPass); i++){
          var conArray = lowerArray.concat(numArray, symArray);
          var randomNum = Math.floor(Math.random() * conArray.length);
          resultPassword = resultPassword +  conArray[randomNum];}
          passwordText.value = resultPassword;
      }else if (upper && !num && symbol) {
        for(var i = 0; i<parseInt(lengthPass); i++){
          var conArray = lowerArray.concat(upperArray, symArray);
          var randomNum = Math.floor(Math.random() * conArray.length);
          resultPassword = resultPassword +  conArray[randomNum];}
          passwordText.value = resultPassword;
      }else if (upper && num && symbol) {
        for(var i = 0; i<parseInt(lengthPass); i++){
          var conArray = lowerArray.concat(upperArray, numArray,symArray);
          var randomNum = Math.floor(Math.random() * conArray.length);
          resultPassword = resultPassword +  conArray[randomNum];}
          passwordText.value = resultPassword;
      }
      
  } else {
    alert('Too bad. I guess next time then...')
  }
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




