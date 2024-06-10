let player0 = document.getElementById('player_0');
let player1 = document.getElementById('player_1');

let score0 = document.getElementById('score-0');
let score1 = document.getElementById('score-1');
let dice1 = document.getElementById('dice-pic'); // ["img"][0] -> "img".classList.add

let btnroll = document.getElementById('btn-roll');
let btnhold = document.getElementById('btn-hold');
let btnnew = document.getElementById('btn-new');

let current0 = document.getElementById('current-0');
let current1 = document.getElementById('current-1');

let scores, currentscore, activeplayer, playGame;

// intialization function
const inti = function () {
	score0.textContent = 0;
	score1.textContent = 0;
	dice1.classList.add('hidden');

	scores = [0, 0];
	currentscore = 0;
	activeplayer = 0;
	playGame = true;

	dice1.classList.add('hidden');
	player0.classList.remove('player-winner');
	player1.classList.remove('player-winner');
	player0.classList.add('player-active');
	player1.classList.remove('player-active');

	current0.textContent = 0;
	current1.textContent = 0;
};

inti();
// switch player
const switchPlayer = function () {
	document.getElementById(`current-${activeplayer}`).textContent = 0;
	activeplayer = activeplayer === 0 ? 1 : 0;
	currentscore = 0;
	player0.classList.toggle('player-active');
	player1.classList.toggle('player-active');
};

btnroll.addEventListener('click', function () {
	if (playGame) {
		dice1.classList.remove('hidden');

		let dice = Math.floor(Math.random() * 6) + 1;
		console.log(dice);

		// check for rolled
		if (dice !== 1) {
			currentscore += dice;
			// current0.textContent = currentscore;
			document.getElementById(`current-${activeplayer}`).textContent = currentscore;
		} else {
			// change the  player
			switchPlayer();
		}
	}
});

btnhold.addEventListener('click', function () {
	if (playGame) {
		scores[activeplayer] += currentscore;

		document.getElementById(`score-${activeplayer}`).textContent = scores[activeplayer];

		if (scores[activeplayer] >= 20) {
			playGame = false;
			document.getElementById(`player_${activeplayer}`).classList.add('player-winner');
			document.getElementById(`player_${activeplayer}`).classList.add('player-active');

			dice1.classList.add('hidden');
		} else {
			switchPlayer();
		}
	}
});

btnnew.addEventListener('click', inti);
