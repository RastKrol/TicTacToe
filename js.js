let activePlayer, gamePlaying;
init();
const cell = document.querySelectorAll(".cell");
for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", function (e) {
    if (gamePlaying) {
      if (activePlayer == 0) {
        if (!e.target.textContent) {
          const el = e.target;
          el.style.color = "red";
          e.target.textContent = "X";
          catsGame(cell);
          winnerCheck(cell);
        } 
      } else {
        if (!e.target.textContent) {
          const el = e.target;
          el.style.color = "black";
          e.target.textContent = "O";
          catsGame(cell);
          winnerCheck(cell);
        } 
      }
    }
  });
}

//Функция переключения активный игроков
function nextPlayer(e) {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.querySelector(".player-1").classList.toggle("active");
  document.querySelector(".player-2").classList.toggle("active");
}

function init() {
  gamePlaying = true;
  activePlayer = 0;
}

function newGame() {
  const cell = document.querySelectorAll(".cell");
  for (i = 0; i < cell.length; i++) {
      
      cell[i].textContent = "";
  }
      nextPlayer();
}

function catsGame(v) {
if(v[0].textContent &&
    v[1].textContent &&
    v[2].textContent &&
    v[3].textContent &&
    v[4].textContent &&
    v[5].textContent &&
    v[6].textContent &&
    v[7].textContent &&
    v[8].textContent) {
     alert('Cat\'s game');
     newGame();
    }
}

function winnerCheck(x) {
  if(x[0].textContent ==="X" &&
     x[1].textContent === 'X'&&
     x[2].textContent ==='X') {
       alert('X has won');
			 newGame();
     } else if(
      x[0].textContent === 'X' &&
      x[4].textContent === 'X' &&
      x[8].textContent === 'X') {
        alert('X has won');
			  newGame();
      } else if(
       x[0].textContent === 'X' &&
       x[3].textContent === 'X' &&
       x[6].textContent === 'X') {
         alert('X has won');
			   newGame();
       } else if(
       x[1].textContent ==='X' &&
       x[4].textContent === 'X' && 
       x[7].textContent ==='X') {
         alert('X has won');
			   newGame();
       } else if(
       x[2].textContent === 'X' &&
       x[5].textContent === 'X' &&
       x[8].textContent === 'X') {
         alert('X has won');
			   newGame();
       } else if(
       x[2].textContent === 'X' &&
       x[4].textContent === 'X' && 
       x[6].textContent === 'X') {
         alert('X has won');
			   newGame();
       }else if(
       x[3].textContent === 'X' &&
       x[4].textContent === 'X' && 
       x[5].textContent === 'X') {
         alert('X has won');
			   newGame();
       } else if(
       x[6].textContent === 'X' &&
       x[7].textContent === 'X' &&
       x[8].textContent === 'X' ) {
			alert('X has won');
      newGame();
      }
      
        if (
          x[0].textContent === "O" &&
          x[1].textContent === "O" &&
          x[2].textContent === "O"
        ) {
          alert("O has won");
          newGame();
        } else if (
          x[0].textContent === "O" &&
          x[4].textContent === "O" &&
          x[8].textContent === "O"
        ) {
          alert("O has won");
          newGame();
        } else if (
          x[0].textContent === "O" &&
          x[3].textContent === "O" &&
          x[6].textContent === "O"
        ) {
          alert("O has won");
          newGame();
        } else if (
          x[1].textContent === "O" &&
          x[4].textContent === "O" &&
          x[7].textContent === "O"
        ) {
          alert("O has won");
          newGame();
        } else if (
          x[2].textContent === "O" &&
          x[5].textContent === "O" &&
          x[8].textContent === "O"
        ) {
          alert("O has won");
          newGame();
        } else if (
          x[2].textContent === "O" &&
          x[4].textContent === "O" &&
          x[6].textContent === "O"
        ) {
          alert("O has won");
          newGame();
        } else if (
          x[3].textContent === "O" &&
          x[4].textContent === "O" &&
          x[5].textContent === "O"
        ) {
          alert("O has won");
          newGame();
        } else if (
          x[6].textContent === "O" &&
          x[7].textContent === "O" &&
          x[8].textContent === "O"
        ) {
          alert("O has won");
          newGame();
        } else {
          nextPlayer();
        } 
}