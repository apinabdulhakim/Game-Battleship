const gridSize = 5;
let shipRow, shipCol;
let isGameOver = false;

function getRandomCoord() {
  return Math.floor(Math.random() * gridSize);
}

function startGame() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  isGameOver = false;
  shipRow = getRandomCoord();
  shipCol = getRandomCoord();

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.addEventListener('click', handleGuess);
      grid.appendChild(cell);
    }
  }

  document.getElementById('message').textContent = '🔍 Tebak lokasi kapal musuh!';
}

function handleGuess(e) {
  if (isGameOver) return;

  const cell = e.target;
  const row = parseInt(cell.dataset.row);
  const col = parseInt(cell.dataset.col);

  if (cell.classList.contains('hit') || cell.classList.contains('miss')) return;

  if (row === shipRow && col === shipCol) {
    cell.classList.add('hit');
    document.getElementById('message').textContent = `🎯 HIT! Kamu menemukan kapal di (${row}, ${col})!`;
    isGameOver = true;
  } else {
    cell.classList.add('miss');
    document.getElementById('message').textContent = `❌ MISS di (${row}, ${col})!`;
  }
}

startGame();
