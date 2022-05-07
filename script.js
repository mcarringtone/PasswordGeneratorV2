var generateBtn = document.querySelector("#generate");
var textArea = document.querySelector("#password");

var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
var lowerCase = "qwertyuiopasdfghjklzxcvbnm".split("");
var specialCharacters = "!@#$%^&*()".split("");

function generatePassword() {
  var characterLength = prompt(
    "Choose a length of at least 8 characters and no more than 128 characters"
  );

  var passwordContainer = [];

  while (characterLength < 8 || characterLength > 128) {
    alert(
      "Chose a length of at least 8 characters nad no more than 128 characters"
    );
    prompt(
      "Choose a length of at least 8 characters and no more than 128 characters"
    );
  }

  var chooselowercase = prompt("Will your password have lowercase letters?");

  if (
    chooselowercase === "Yes" ||
    chooselowercase === "Y" ||
    chooselowercase === "YES" ||
    chooselowercase === "y"
  ) {
    passwordContainer = passwordContainer.concat(lowerCase);
  }

  var chooseUppercase = prompt("Will your password have uppercase letters?");
  if (
    chooseUppercase === "yes" ||
    chooseUppercase === "y" ||
    chooseUppercase === "YES" ||
    chooseUppercase === "Y"
  ) {
    passwordContainer = passwordContainer.concat(upperCase);
  }
  var chooseSpecialCharacters = prompt(
    "Will your password have special characters?"
  );
  if (
    chooseSpecialCharacters === "yes" ||
    chooseSpecialCharacters === "y" ||
    chooseSpecialCharacters === "YES" ||
    chooseSpecialCharacters === "Y"
  ) {
    passwordContainer = passwordContainer.concat(specialCharacters);
  }

  var finalPassword = [];

  for (var i = 0; i < characterLength; i++) {
    finalPassword +=
      passwordContainer[Math.floor(Math.random() * passwordContainer.length)];
  }

  textArea.textContent = finalPassword;
}

generateBtn.addEventListener("click", generatePassword);
