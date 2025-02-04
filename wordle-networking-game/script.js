const words = [
	'proxy',
	'cache',
	'tcpip',
	'token',
	'fiber',
	'modem',
	'route',
	'adapt',
	'cloud',
	'wired',
	'frame',
	'patch',
	'ether',
	'datas',
	'stack',
];
const answer = words[Math.floor(Math.random() * words.length)];
let attempts = 0;
const maxAttempts = 6;

function createGrid() {
	const grid = document.getElementById('gameGrid');
	for (let i = 0; i < maxAttempts * 5; i++) {
		const div = document.createElement('div');
		div.classList.add('letter');
		grid.appendChild(div);
	}
}

function checkGuess() {
	const input = document.getElementById('guessInput');
	let guess = input.value.toLowerCase();
	if (guess.length !== 5) return;

	const rowStart = attempts * 5;
	for (let i = 0; i < 5; i++) {
		const box = document.getElementsByClassName('letter')[rowStart + i];
		box.textContent = guess[i];
		if (guess[i] === answer[i]) {
			box.classList.add('correct');
		} else if (answer.includes(guess[i])) {
			box.classList.add('present');
		} else {
			box.classList.add('absent');
		}
	}

	attempts++;
	if (guess === answer) {
		document.getElementById('message').textContent =
			'Congratulations! You guessed the word!';
		document.getElementById('guessInput').disabled = true;
	} else if (attempts === maxAttempts) {
		document.getElementById(
			'message'
		).textContent = `Game over! The word was "${answer}".`;
		document.getElementById('guessInput').disabled = true;
	}

	input.value = '';
}

createGrid();
