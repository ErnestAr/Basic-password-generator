// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var lowerArray = "abcdefghijklmnopqrstuvwxyz";
var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numArray = "1234567890";
var symArray = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~\\\"";
var resultPassword = "";

//This algorithm goes through all the possible variations of parameters
//set by the user (upper, lower, symbol, num) and concatinates
//required strings of letters or symbols to creat a password of length set by the user.
//Output is displayed in the window with id = "password"
function writePassword() {
  var startProcess = confirm(
    "Hey there, let's set you up with a strong password. Ready to get started?"
  );
  if (startProcess) {
    var lengthPass = prompt(
      "Alright! This is going to be fun! Plese enter a numerical value from 8 to 128 to select your password lengh: "
    );
    if (parseInt(lengthPass) >= 8 && parseInt(lengthPass) <= 128) {
      var lower = confirm(
        "Would you like any lowercase characters in your password?"
      );
      var upper = confirm(
        "Would you like any uppercase characters in your password? "
      );
      var num = confirm("Would you like any numbers in your password?");
      var symbol = confirm(
        "Would you like any special characters in your password?"
      );
      if (upper || num || symbol || lower) {
        var confStart = confirm(
          "Would you like to proceed with password generation?"
        );
        if (confStart) {
          if (!upper && num && symbol && lower) {
            var conArray = numArray.concat(symArray, lowerArray);
            for (var i = 0; i < parseInt(lengthPass); i++) {
              var randomNum = Math.floor(Math.random() * lowerArray.length);
              resultPassword = resultPassword + lowerArray[randomNum];
            }
          } else if (!upper && num && symbol && !lower) {
            var conArray = numArray.concat(symArray);
            for (var i = 0; i < parseInt(lengthPass); i++) {
              var randomNum = Math.floor(Math.random() * conArray.length);
              resultPassword = resultPassword + conArray[randomNum];
            }
          } else if (upper && !num && symbol && lower) {
            var conArray = upperArray.concat(lowerArray, symArray);
            for (var i = 0; i < parseInt(lengthPass); i++) {
              var randomNum = Math.floor(Math.random() * conArray.length);
              resultPassword = resultPassword + conArray[randomNum];
            }
          } else if (upper && !num && symbol && !lower) {
            var conArray = upperArray.concat(symArray);
            for (var i = 0; i < parseInt(lengthPass); i++) {
              var randomNum = Math.floor(Math.random() * conArray.length);
              resultPassword = resultPassword + conArray[randomNum];
            }
          } else if (upper && num && !symbol && lower) {
            var conArray = lowerArray.concat(upperArray, numArray);
            for (var i = 0; i < parseInt(lengthPass); i++) {
              var randomNum = Math.floor(Math.random() * conArray.length);
              resultPassword = resultPassword + conArray[randomNum];
            }
          } else if (upper && num && !symbol && !lower) {
            var conArray = upperArray.concat(numArray);
            for (var i = 0; i < parseInt(lengthPass); i++) {
              var randomNum = Math.floor(Math.random() * conArray.length);
              resultPassword = resultPassword + conArray[randomNum];
            }
          } else if (!upper && !num && symbol && lower) {
            var conArray = lowerArray.concat(symArray);
            for (var i = 0; i < parseInt(lengthPass); i++) {
              var randomNum = Math.floor(Math.random() * conArray.length);
              resultPassword = resultPassword + conArray[randomNum];
            }
          } else if (!upper && !num && !symbol && lower) {
            for (var i = 0; i < parseInt(lengthPass); i++) {
              var randomNum = Math.floor(Math.random() * lowerArray.length);
              resultPassword = resultPassword + lowerArray[randomNum];
            }
          } else if (!upper && !num && symbol && !lower) {
            for (var i = 0; i < parseInt(lengthPass); i++) {
              var randomNum = Math.floor(Math.random() * symArray.length);
              resultPassword = resultPassword + conArray[randomNum];
            }
          } else if (upper && !num && !symbol && lower) {
            var conArray = lowerArray.concat(upperArray);
            for (var i = 0; i < parseInt(lengthPass); i++) {
              var randomNum = Math.floor(Math.random() * conArray.length);
              resultPassword = resultPassword + conArray[randomNum];
            }
          } else if (upper && !num && !symbol && !lower) {
            for (var i = 0; i < parseInt(lengthPass); i++) {
              var randomNum = Math.floor(Math.random() * upperArray.length);
              resultPassword = resultPassword + conArray[randomNum];
            }
          } else if (!upper && num && !symbol && lower) {
            var conArray = lowerArray.concat(numArray);
            for (var i = 0; i < parseInt(lengthPass); i++) {
              var randomNum = Math.floor(Math.random() * conArray.length);
              resultPassword = resultPassword + conArray[randomNum];
            }
          } else if (!upper && num && !symbol && !lower) {
            for (var i = 0; i < parseInt(lengthPass); i++) {
              var randomNum = Math.floor(Math.random() * numArray.length);
              resultPassword = resultPassword + conArray[randomNum];
            }
          } else if (!upper && !num && !symbol && lower) {
            for (var i = 0; i < parseInt(lengthPass); i++) {
              var randomNum = Math.floor(Math.random() * lowerArray.length);
              resultPassword = resultPassword + conArray[randomNum];
            }
          } else {
            for (var i = 0; i < parseInt(lengthPass); i++) {
              var conArray = lowerArray.concat(upperArray, numArray, symArray);
              var randomNum = Math.floor(Math.random() * conArray.length);
              resultPassword = resultPassword + conArray[randomNum];
            }
          }
          passwordText.value = resultPassword;
        } else {
          alert("No problem, let's try again.");
          writePassword();
        }
      } else {
        alert(
          "You have to select at least one character type dear user. Please try again."
        );
        writePassword();
      }
    } else {
      alert(
        "Fun fact, when you go from a 7 digit password to a 8 digit password, the time it would take to crack your password goes from 1 month to 9 years! Let's try again, aim for range 8 to 128 to create a strong combination."
      );
      writePassword();
    }
  } else {
    alert("Too bad. I guess next time then...");
  }
  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
