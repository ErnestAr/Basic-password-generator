// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


function writePassword(){
  var resultPassword = "sdafsadf"
  passwordText.value = resultPassword;
  return ;
}

// Event listener of "Generate Password"
generateBtn.addEventListener("click", writePassword);





