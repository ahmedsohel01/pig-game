'use strict';
/*
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
let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let isPlaying = true;

// Default
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Roll Button Event Listener
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
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
  }
});

// Hold Button Event Listener
btnHold.addEventListener('click', function () {
  if (isPlaying) {
    // Add Current score to total score
    scores[activePlayer] += currentScore;
    // display total score
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // if score >=100 then Active player win
    if (scores[activePlayer] >= 10) {
      console.log('Active player wins.');
      isPlaying = false;
      diceEl.classList.add('hidden');
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
  }
});

// New game Button

btnNew.addEventListener('click', function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  isPlaying = true;

  // Default
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
});
*/
//

// selecting element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
// selecting buttons
const btnNew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
let scores, currentScore, activePlayer, isPlaying;

// Initialize function
const init = function () {
  // initial Value
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;

  // default
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');

  // remove winner class
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
};

// Switch Function
const switchPlayer = function () {
  // Switch player
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  // Active Class add and Romove
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// init function call
init();

// Roll Button Event
btnroll.addEventListener('click', function () {
  if (isPlaying) {
    // random number generating 1-6
    const dice = Math.trunc(Math.random() * 6) + 1;
    // dice number wise showing dice element
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    // If the dice number is 1 then switch the active player
    if (dice !== 1) {
      // Adding dice number to current score
      currentScore += dice;

      // current score showing to active player
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

// Hold Button Event
btnhold.addEventListener('click', function () {
  if (isPlaying) {
    // Add current value to total score
    scores[activePlayer] += currentScore;
    // display total score
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // Wining condition
    if (scores[activePlayer] >= 20) {
      // if got winner then game over
      isPlaying = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

// New button event
btnNew.addEventListener('click', init);
