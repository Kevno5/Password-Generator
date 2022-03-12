//arrays for the prompts
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','q','r','s','t','u','v','w','x','y','z'];
var specialChar = ['!','@','#','$','%','^','&','*','.','<',',','>','/','?','~'];
var number = [1,2,3,4,5,6,7,8,9,0];

//user password characteristics
var userLength = '';
var userUpperCase;
var userLowerCase;
var userSpecialChar;
var userNumber;




function generatePassword(){
    var chars = [];
    var userLength = prompt('How many characters would you like in your password?');

    if(userLength <8 || userLength >128){
        alert('Your password length must be between 8 and 128 characters.');
        return generatePassword();
    }

    var userLowerCase = confirm('Click ok to confirm if you would like lowercase letters in your password.');
    var userUpperCase = confirm('Click ok to confirm if you would like uppercase letters in your password.');
    var userSpecialChar = confirm('Click ok to confirm if you would like special characters in your password.');
    var userNumber = confirm('Click ok to confirm if you would like numbers in your password.')
    
    if(!userUpperCase && !userLowerCase && !userSpecialChar && !userNumber){
        alert('You must select at least one criteria!');
        return generatePassword();
    }

    if(userLowerCase === true){
        for(var i = 0; i<lowerCase.length; i++){
            chars.push(lowerCase[i]);
        }
    }

    if(userUpperCase === true){
        for(var i = 0; i<upperCase.length; i ++){
            chars.push(upperCase[i]);
        }
    }

    if(userSpecialChar === true){
        for(var i = 0; i<specialChar.length; i ++){
            chars.push(specialChar[i]);
        }
    }


    if(userNumber === true){
        for(var i = 0; i<number.length; i++){
            chars.push(number[i]);
        }
    }
    console.log(chars);
    var password='';
    for (i = 0; i<userLength; i++){
        var randomIndex = Math.floor(Math.random() * chars.length);
        var randomChar = chars[randomIndex];
        password += randomChar;
    }
    console.log(password);
    return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



