let randomnumber = parseInt(((Math.random())*100+1));
//console.log(randomnumber)
const userinput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guesses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhi =document.querySelector('.lowOrHi')
const retry = document.querySelector('.resultParas')
const p = document.createElement('p')
let playgame = true;
let prevguess = []
let numguess = 1;

if(playgame){
    submit.addEventListener('click',function(event){
        event.preventDefault();
        const guess = parseInt(userinput.value)
        //console.log(guess)
        guessvalidate(guess)
    }
    )
}

function guessvalidate(guess){
if(guess<1 || guess>100 || isNaN(guess)){
    alert('Please enter a valid number');
}else{
    prevguess.push(guess)
    if(numguess===11){
        displayguess(guess)
        displaymessage(`game over. random number was ${randomnumber}`)
        endgame();
    }else{
        //displayguess(guess)
        guesscheck(guess)
    }
}
}

function guesscheck(guess){
   if(guess === randomnumber){
    displayguess(guess);
    displaymessage('you win');
    endgame();
   } else if(guess<randomnumber){
    displayguess(guess);
    displaymessage('number is too low');
   }else if(guess>randomnumber){
    displayguess(guess);
    displaymessage('number is too high');
   }
}
function displayguess(guess){
    userinput.value='';
    guesses.innerHTML += `${guess}, `;
    numguess++;
    remaining.innerHTML=`${11-numguess}`;
}
function displaymessage(message){
    loworhi.innerHTML=`<h2>${message}</h2>`
}
function endgame(){
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    retry.appendChild(p);
    playgame = false;
    startgame();
}
function startgame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
    randomnumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;
    guesses.innerHTML = '';
    remaining.innerHTML = `${11 - numguess} `;
    userinput.removeAttribute('disabled');
    retry.removeChild(p);
    playgame = true;
  });
}