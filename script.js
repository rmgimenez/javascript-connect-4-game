document.addEventListener('DOMContentLoaded', () => {
  // seleciona os elementos do DOM
  const squares = document.querySelectorAll('.grid div');
  const result = document.querySelector('#result');
  const displayCurrentPlayer = document.querySelector('#current-player');
  const reset = document.querySelector('#reset');

  // jogador atual
  let currentPlayer = 1;

  reset.style.display = 'none';

  reset.onclick = clearBoard;

  function endGame(winner) {
    result.innerHTML = 'Jogador ' + winner + ' venceu!';
    showResetButton();
  }

  // função que verifica se todas as grids já foram preenchidas
  function checkFullBoard() {
    let fullBoard = true;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].classList.contains('taken')) {
        fullBoard = false;
      }
    }
    if (fullBoard) {
      result.innerHTML = 'Empate!';
      showResetButton();
    }
  }

  function showResetButton() {
    reset.style.display = 'block';
    currentPlayer = 0;
  }

  function clearBoard() {
    for (let i = 0; i < squares.length; i++) {
      if (
        squares[i].classList.contains('player-one') ||
        squares[i].classList.contains('player-two')
      ) {
        squares[i].classList.remove('player-one');
        squares[i].classList.remove('player-two');
        squares[i].classList.remove('taken');
      }
    }
    result.innerHTML = '';
    currentPlayer = 1;
    displayCurrentPlayer.innerHTML = currentPlayer;
    displayCurrentPlayer.style.color = 'red';
    reset.style.display = 'none';
  }

  function checkBoard() {
    checkFullBoard();

    // checa todas as grids para verificar se o jogador possui 4 fichas conectadas verticalmente
    for (let i = 0; i < squares.length; i++) {
      if (
        squares[i].classList.contains('player-one') &&
        squares[i + 7].classList.contains('player-one') &&
        squares[i + 14].classList.contains('player-one') &&
        squares[i + 21].classList.contains('player-one')
      ) {
        endGame(1);
      } else if (
        squares[i].classList.contains('player-two') &&
        squares[i + 7].classList.contains('player-two') &&
        squares[i + 14].classList.contains('player-two') &&
        squares[i + 21].classList.contains('player-two')
      ) {
        endGame(2);
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
        endGame(1);
      } else if (
        squares[i].classList.contains('player-two') &&
        squares[i + 1].classList.contains('player-two') &&
        squares[i + 2].classList.contains('player-two') &&
        squares[i + 3].classList.contains('player-two')
      ) {
        endGame(2);
      }
    }
  }

  displayCurrentPlayer.style.color = 'red';

  for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {
      // checa se o quadrado está com o player one ou player two
      if (
        squares[i].classList.contains('player-one') ||
        squares[i].classList.contains('player-two')
      ) {
        alert('Essa posição é do outro jogador');
        return;
      }

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
