// Assignment Code

//Users input on criteria of Password
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Password Value
// Special characters 
character = ["!", "@","#","$","%","^","&", "*", "(", ")", "-", "_", "=", "+", "{", "[", "]", "}", "|", ";", ":", "'", "<", ">", ",", ".", "/", "?" ];
// Numeric characters
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabet characters
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Space is for the Uppercase conversion
space = [];

// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
alphabet2 = alphabet.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
    // Asks for user Password criteria
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // First if statement for user validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };

    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alphabet, alphabet2);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alphabet2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alphabet);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alphabet, alphabet2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alphabet, alphabet2);
    }
    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alphabet);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alphabet2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alphabet.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alphabet.concat(alphabet2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alphabet2);
    }
    // Else if for 1 positive option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alphabet;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        choices = space.concat(alphabet2);
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}