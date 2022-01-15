'use strict';

// Selecting Element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Selecting Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Default score
const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

// Default
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Roll Button Event Listener
btnRoll.addEventListener('click', function () {
  // Create random number 1-6
  const dice = Math.trunc(Math.random() * 6) + 1;
  //   make random number wise dice
  diceEl.src = `dice-${dice}.png`;
  //   make dice visible
  diceEl.classList.remove('hidden');

  //   Add dice number to current score if dice !==1
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // current0El.textContent = currentScore; //Statice
  } else {
    //   Switch player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    console.log(activePlayer);

    // Change Active Player
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

// Hold Button Event Listener
btnHold.addEventListener('click', function () {
  // Add Current score to total score
  scores[activePlayer] += currentScore;
  // display total score
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  // if score >=100 then Active player win
  if (scores[activePlayer] >= 10) {
    console.log('Active player wins.');

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // switch player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    console.log(activePlayer);

    // Change Active Player
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
