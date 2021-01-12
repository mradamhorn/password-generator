// Assignment Code
var generateBtn = document.querySelector('#generate');

const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('number');
const symbolsEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

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

