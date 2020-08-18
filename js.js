let activePlayer, gamePlaying;
init();
const cell = document.querySelectorAll('.cell');
	for(i=0; i < cell.length; i++) {
	cell[i].addEventListener('click', function (e) {
		if(gamePlaying){
			if(activePlayer == 0) {
				if(!e.target.textContent){
					const el = e.target;
					el.style.color = 'red';
					e.target.textContent = 'X';
					// winnerCheck(cell);
					nextPlayer();
				}
			} else {
				if(!e.target.textContent){
					const el = e.target;
					el.style.color = 'black';
					e.target.textContent = 'O';
					// winnerCheck(cell);
					nextPlayer();
				}
			}
		}
	});
}

//Функция переключения активный игроков
function nextPlayer(e) {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	
		document.querySelector('.player-1').classList.toggle('active');
		document.querySelector('.player-2').classList.toggle('active');    
	
}

function init() {
	gamePlaying = true;
	activePlayer = 0;
   }

function newGame () {
	const cell = document.querySelectorAll('.cell');
	for(i=0; i < cell.length; i++) {
	cell[i].textContent = '';
	}
	// activePlayer = 0;
}

	function winnerCheck(x) {
		switch(true){
			case (x[0].textContent === x[1].textContent && x[0].textContent === x[2].textContent) :
				alert('Winner');
				newGame();
				break;
			case (x[0].textContent === x[4].textContent && x[0].textContent === x[8].textContent) :
				alert('Winner');
				newGame();
				break;
			case (x[0].textContent === x[3].textContent && x[0].textContent === x[6].textContent) :
				alert('Winner');
				newGame();
				break;
			case (x[1].textContent === x[4].textContent && x[1].textContent === x[7].textContent) :
				alert('Winner');
				newGame();
				break;
			case (x[2].textContent === x[5].textContent && x[2].textContent === x[8].textContent) 	:
				alert('Winner');
				newGame();
				break;
			case (x[2].textContent === x[4].textContent && x[2].textContent === x[6].textContent) :
				alert('Winner');
				newGame();
				break;
			case (x[3].textContent === x[4].textContent && x[3].textContent === x[5].textContent) :
				alert('Winner');
				newGame();
				break;
			case (x[6].textContent == x[7].textContent && x[6].textContent == x[8].textContent) :
				alert('Winner');
				newGame();
				break;
		}
		/* if(x[0].textContent == x[1].textContent && x[0].textContent == x[2].textContent || 
		   x[0].textContent == x[4].textContent && x[0].textContent == x[8].textContent ||
		   x[0].textContent == x[3].textContent && x[0].textContent == x[6].textContent ||
		   x[1].textContent == x[4].textContent && x[1].textContent == x[7].textContent ||
		   x[2].textContent == x[5].textContent && x[2].textContent == x[8].textContent ||
		   x[2].textContent == x[4].textContent && x[2].textContent == x[6].textContent ||
		   x[3].textContent == x[4].textContent && x[3].textContent == x[5].textContent ||
		   x[6].textContent == x[7].textContent && x[6].textContent == x[8].textContent ) {
			alert('Winner');
			newGame();
			} */
	}
