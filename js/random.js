
const inputLow = prompt('Please give me a number');
const inputHigh = prompt('Now please give me a higher number');
const lowNumber = parseInt(inputLow);
const highNumber = parseInt(inputHigh);


if (lowNumber && highNumber) {
  const randomNumber = Math.floor(Math.random() * (highNumber - lowNumber + 1) ) + lowNumber;
    document.querySelector('main').innerHTML = `<h2>${randomNumber} is a random number between ${lowNumber} and ${highNumber}.</h2>`
} else {
    alert('You did not enter 2 valid numbers, please refresh the page and try again!')
};