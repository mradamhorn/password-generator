// Assignment Code
var generateBtn = document.querySelector('#generate');

const passwordEl = document.querySelector('#password');
const lengthEl = document.querySelector('#length');
const uppercaseEl = document.querySelector('#uppercase');
const lowercaseEl = document.querySelector('#lowercase');
const numbersEl = document.querySelector('#number');
const symbolsEl = document.querySelector('#symbol');
const generateEl = document.querySelector('#generate');

const randomFunct = {
  lower: generateRandomLower,
  upper: generateRandomUpper,
  number: generateRandomNumber,
  symbol: generateRandomSymbol,
};

// Event listener to verify selected criteria
generate.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  passwordEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// Function to generate password based on criteria the user selects
function generatePassword(lower, upper, number, symbol, length) {
  if(length < 8) {
    alert('Your password needs to be at least 8 characters long.')
  }
  else if (length > 128) {
    alert('Your password is too long.')
  }
  else{
  let generatedPassword = ''; 
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
  

  if(typesCount === 0) {
    return '';
  }

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const functName = Object.keys(type)[0];
      generatedPassword += randomFunct[functName]();
    });
  }

  console.log(generatedPassword);

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}
}

// Functions to generate random characters for each lowercase, uppercase, number, and symbol when called upon
function generateRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function generateRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function generateRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function generateRandomSymbol() {
  const symbols = '!@#$%^&*()_-<>?.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

