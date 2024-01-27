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

    // checa verticalmente
    for (let coluna = 0; coluna < 7; coluna++) {
      for (let divIndex = coluna; divIndex < squares.length; divIndex += 7) {
        if (
          squares[divIndex].classList.contains('player-one') &&
          squares[divIndex + 7].classList.contains('player-one') &&
          squares[divIndex + 14].classList.contains('player-one') &&
          squares[divIndex + 21].classList.contains('player-one')
        ) {
          endGame(1);
        }

        if (
          squares[divIndex].classList.contains('player-two') &&
          squares[divIndex + 7].classList.contains('player-two') &&
          squares[divIndex + 14].classList.contains('player-two') &&
          squares[divIndex + 21].classList.contains('player-two')
        ) {
          endGame(2);
        }
      }
    }

    // checa horizontalmente
    for (let coluna = 0; coluna < 7; coluna++) {
      for (let divIndex = coluna; divIndex < squares.length; divIndex += 7) {
        if (
          squares[divIndex].classList.contains('player-one') &&
          squares[divIndex + 1].classList.contains('player-one') &&
          squares[divIndex + 2].classList.contains('player-one') &&
          squares[divIndex + 3].classList.contains('player-one')
        ) {
          endGame(1);
        }

        if (
          squares[divIndex].classList.contains('player-two') &&
          squares[divIndex + 1].classList.contains('player-two') &&
          squares[divIndex + 2].classList.contains('player-two') &&
          squares[divIndex + 3].classList.contains('player-two')
        ) {
          endGame(2);
        }
      }
    }

    // checa na diagonal esquerda
    for (let coluna = 0; coluna < 7; coluna++) {
      for (let divIndex = coluna; divIndex < squares.length; divIndex += 7) {
        if (
          squares[divIndex].classList.contains('player-one') &&
          squares[divIndex + 8].classList.contains('player-one') &&
          squares[divIndex + 16].classList.contains('player-one') &&
          squares[divIndex + 24].classList.contains('player-one')
        ) {
          endGame(1);
        }

        if (
          squares[divIndex].classList.contains('player-two') &&
          squares[divIndex + 8].classList.contains('player-two') &&
          squares[divIndex + 16].classList.contains('player-two') &&
          squares[divIndex + 24].classList.contains('player-two')
        ) {
          endGame(2);
        }
      }
    }

    // checa na diagonal direita
    for (let coluna = 0; coluna < 7; coluna++) {
      for (let divIndex = coluna; divIndex < squares.length; divIndex += 7) {
        if (
          squares[divIndex].classList.contains('player-one') &&
          squares[divIndex + 6].classList.contains('player-one') &&
          squares[divIndex + 12].classList.contains('player-one') &&
          squares[divIndex + 18].classList.contains('player-one')
        ) {
          endGame(1);
        }

        if (
          squares[divIndex].classList.contains('player-two') &&
          squares[divIndex + 6].classList.contains('player-two') &&
          squares[divIndex + 12].classList.contains('player-two') &&
          squares[divIndex + 18].classList.contains('player-two')
        ) {
          endGame(2);
        }
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

      try {
        checkBoard();
      } catch (error) {}
    };
  }
});
