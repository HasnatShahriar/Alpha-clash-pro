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
function handleKeyboardKeyUpEvent(event){
  // console.log(event.key);
  const playerPressed = event.key;
  console.log('Player Pressed:', playerPressed);
  const randomAlphabet = document.getElementById('random-alphabet');
  const currentAlphabet = randomAlphabet.innerText.toLowerCase();
  console.log(playerPressed,currentAlphabet);
  if(playerPressed === currentAlphabet){
    console.log('You got a point');
    // count+=1;
    const scoreElement = document.getElementById('score');
    const score =scoreElement.innerText;
    const convertedScore = parseInt(score);
    const updatedScore = convertedScore + 1;
    scoreElement.innerText = updatedScore;

    
    // start a new round
    removeBackgroundColorById(currentAlphabet);
    continueGame();
  }else{
    console.log('You Pressed wrong key')
    const chanceElement = document.getElementById('chance');
    const chance = chanceElement.innerText;
    // console.log(typeof life);
    const convertedChance = parseInt(chance);
    const updatedChance = convertedChance - 1;
    chanceElement.innerText = updatedChance;
  }
  
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent)



function continueGame(){
 const alphabet = getARandomAlphabet();
 console.log('Your Random Alphabet is :', alphabet);

 const randomAlphabet = document.getElementById('random-alphabet');
 randomAlphabet.innerText = alphabet;

 setBackgroundColorById(alphabet);
}


function play(){
  hideElementById('home');
  showElementById('play-ground');
  continueGame();
}

