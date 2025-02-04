document.addEventListener('DOMContentLoaded', () => {
	const yesButton = document.querySelector('.yes');
	const absolutelyButton = document.querySelector('.absolutely');

	yesButton.addEventListener('click', () => {
		alert("Yay! See you on Valentine's! ❤️");
	});

	absolutelyButton.addEventListener('click', () => {
		alert('You made my heart melt! 💕');
	});
});
