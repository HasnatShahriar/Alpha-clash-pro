// function play(){
//   const homeArea = document.getElementById('home');
//   homeArea.classList.add('hidden')

//   const playGround = document.getElementById('play-ground');
//   playGround.classList.remove('hidden');
// }



// ---------- functional system---------

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

