function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

function getARandomAlphabet() {
  const alphabetString = 'abcdefghijklmnopqrstuwvxyz';
  const alphabets = alphabetString.split('');
  // console.log(alphabets);

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  // console.log(index,alphabet);
  return alphabet;
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('bg-orange-400');
}

function getElementTextValueById(elementId) {
  const elementText = document.getElementById(elementId);
  const elementTextValue = elementText.innerText;
  const convertedElementValue = parseInt(elementTextValue);
  return convertedElementValue;
}

function getTextElementById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function setElementTextValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}