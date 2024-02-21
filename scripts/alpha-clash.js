// function play(){
//   const homeArea = document.getElementById('home');
//   homeArea.classList.add('hidden')

//   const playGround = document.getElementById('play-ground');
//   playGround.classList.remove('hidden');
// }



// ---------- functional system---------


// document.addEventListener('keyup',function(){
//   console.log('Alhamdulillah');
// })


// let count = 0;
function handleKeyboardKeyUpEvent(event) {
  // console.log(event.key);
  const playerPressed = event.key;
  console.log('Player Pressed:', playerPressed);
  if(playerPressed === 'Escape'){
    gameOver();
  }
  const randomAlphabet = document.getElementById('random-alphabet');
  const currentAlphabet = randomAlphabet.innerText.toLowerCase();
  console.log(playerPressed, currentAlphabet);
  if (playerPressed === currentAlphabet) {
    console.log('You got a point');

    const currentScore = getElementTextValueById('score');
    console.log(currentScore);
    const updatedScore = currentScore + 1;
    setElementTextValueById('score', updatedScore);










    // ------------------Normal System-----------------------------
    // // count+=1;
    // const scoreElement = document.getElementById('score');
    // const score =scoreElement.innerText;
    // const convertedScore = parseInt(score);
    // const updatedScore = convertedScore + 1;
    // scoreElement.innerText = updatedScore;


    // start a new round
    removeBackgroundColorById(currentAlphabet);
    continueGame();
  } else {
    console.log('You Pressed wrong key')

    const currentChance = getElementTextValueById('chance');
    const updatedChance = currentChance - 1;
    setElementTextValueById('chance', updatedChance);

    if (updatedChance === 0) {
      gameOver();


    }














    // ----------------------normal system---------------------
    // const chanceElement = document.getElementById('chance');
    // const chance = chanceElement.innerText;
    // // console.log(typeof life);
    // const convertedChance = parseInt(chance);
    // const updatedChance = convertedChance - 1;
    // chanceElement.innerText = updatedChance;
  }

}

document.addEventListener('keyup', handleKeyboardKeyUpEvent)



function continueGame() {
  const alphabet = getARandomAlphabet();
  console.log('Your Random Alphabet is :', alphabet);

  const randomAlphabet = document.getElementById('random-alphabet');
  randomAlphabet.innerText = alphabet;

  setBackgroundColorById(alphabet);
}


function play() {
  hideElementById('home');
  hideElementById('chance-score');
  showElementById('play-ground');

  setElementTextValueById('chance', 5);
  setElementTextValueById('score', 0)
  continueGame();
}

function gameOver() {
  hideElementById('play-ground');
  showElementById('chance-score');
  const finalScore =  getElementTextValueById('score')
  console.log(finalScore);
  setElementTextValueById('show-score',finalScore)
  const currentAlphabet = getTextElementById('random-alphabet');
  removeBackgroundColorById(currentAlphabet);

}