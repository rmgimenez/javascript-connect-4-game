document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div');
  const result = document.querySelector('#result');
  const displayCurrentPlayer = document.querySelector('#current-player');
  const reset = document.querySelector('#reset');
  let currentPlayer = 1;

  reset.style.display = 'none';

  reset.onclick = clearBoard;

  function showResetButton() {
    reset.style.display = 'block';
    currentPlayer = 0;
  }

  function clearBoard() {
    for (let i = 0; i < squares.length; i++) {
      squares[i].classList.remove('player-one');
      squares[i].classList.remove('player-two');
    }
    result.innerHTML = '';
    currentPlayer = 1;
    displayCurrentPlayer.innerHTML = currentPlayer;
    displayCurrentPlayer.style.color = 'red';
    reset.style.display = 'none';
    clearBoard();
  }

  function checkBoard() {
    for (let i = 0; i < squares.length; i++) {
      if (
        squares[i].classList.contains('player-one') &&
        squares[i + 7].classList.contains('player-one') &&
        squares[i + 14].classList.contains('player-one') &&
        squares[i + 21].classList.contains('player-one')
      ) {
        result.innerHTML = 'Jogador 1 venceu!';
        showResetButton();
      } else if (
        squares[i].classList.contains('player-two') &&
        squares[i + 7].classList.contains('player-two') &&
        squares[i + 14].classList.contains('player-two') &&
        squares[i + 21].classList.contains('player-two')
      ) {
        result.innerHTML = 'Jogador 2 venceu!';
        showResetButton();
      }
    }

    // checa se o jogador possui 4 fichas conectadas horizontalmente
    for (let i = 0; i < squares.length; i++) {
      if (
        squares[i].classList.contains('player-one') &&
        squares[i + 1].classList.contains('player-one') &&
        squares[i + 2].classList.contains('player-one') &&
        squares[i + 3].classList.contains('player-one')
      ) {
        result.innerHTML = 'Jogador 1 venceu!';
        showResetButton();
      } else if (
        squares[i].classList.contains('player-two') &&
        squares[i + 1].classList.contains('player-two') &&
        squares[i + 2].classList.contains('player-two') &&
        squares[i + 3].classList.contains('player-two')
      ) {
        result.innerHTML = 'Jogador 2 venceu!';
        showResetButton();
      }
    }

    // checa se o jogador possui 4 fichas conectadas diagonalmente
    for (let i = 0; i < squares.length; i++) {
      if (
        squares[i].classList.contains('player-one') &&
        squares[i + 8].classList.contains('player-one') &&
        squares[i + 16].classList.contains('player-one') &&
        squares[i + 24].classList.contains('player-one')
      ) {
        result.innerHTML = 'Jogador 1 venceu!';
        showResetButton();
      } else if (
        squares[i].classList.contains('player-two') &&
        squares[i + 8].classList.contains('player-two') &&
        squares[i + 16].classList.contains('player-two') &&
        squares[i + 24].classList.contains('player-two')
      ) {
        result.innerHTML = 'Jogador 2 venceu!';
        showResetButton();
      }
    }
  }

  displayCurrentPlayer.style.color = 'red';

  for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
      if (squares[i + 7].classList.contains('taken')) {
        if (currentPlayer === 1) {
          squares[i].classList.add('taken');
          squares[i].classList.add('player-one');
          currentPlayer = 2;
          displayCurrentPlayer.innerHTML = currentPlayer;
          displayCurrentPlayer.style.color = 'blue';
        } else if (currentPlayer === 2) {
          squares[i].classList.add('taken');
          squares[i].classList.add('player-two');
          currentPlayer = 1;
          displayCurrentPlayer.innerHTML = currentPlayer;
          displayCurrentPlayer.style.color = 'red';
        } else {
          alert('Jogo finalizado, clique em reiniciar');
        }
      } else alert('Não pode colocar sua peça aqui!');
      checkBoard();
    };
  }
});
