'use strict';
const playerr0 = prompt('First player name');
const playerr1 = prompt('2nd player name');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

const dice = document.querySelector('.dice');

//Starting
document.getElementById('name--0').textContent = playerr0;
document.getElementById('name--1').textContent = playerr1;
let score = [0, 0];
score0.textContent = 0;
score1.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//Function of switching player
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
//hiding dice
dice.classList.add('hidden');

//Rolling Dice Function when press dice roll

rollBtn.addEventListener('click', function () {
  if (playing) {
    const Dice = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${Dice}.png`;

    if (Dice !== 1) {
      currentScore += Dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//WHEN HOLD IS PRESSED
holdBtn.addEventListener('click', function () {
  if (playing) {
    //Add the current score to the final score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    //If the value is  100
    if (score[activePlayer] >= 100) {
      //?finish games
      playing = false;
      document.getElementById(`name--${activePlayer}`).textContent = `You Win`;
      document.getElementById(`name--${activePlayer}`).style.color = 'White';
      document.querySelector(`.player--${activePlayer}`).classList.add('win');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
//When new is pressed
newBtn.addEventListener('click', function () {
  playing = true;
  if (playing) {
    currentScore = 0;
    document.getElementById(`name--1`).style.color = '#333;';
    document.getElementById(`name--0`).style.color = '#333;';
    document.querySelector(`.player--1`).classList.remove('win');
    document.querySelector(`.player--2`).classList.remove('win');
    score0.textContent = 0;
    score1.textContent = 0;
    currentScore = 0;
    activePlayer = 0;
    dice.classList.add('hidden');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    playing = true;
  }
});
