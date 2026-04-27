const gameArea = document.querySelector('#game-area');
const playerElement = document.querySelector('#player');
const collectibleElement = document.querySelector('#collectible');
const scoreElement = document.querySelector('#score');
const targetScoreElement = document.querySelector('#target-score');
const messageElement = document.querySelector('#message');
const restartButton = document.querySelector('#restart-button');

const state = {
  score: 0,
  targetScore: 5,
  isGameOver: false,
  keys: {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
  },
  player: {
    x: 40,
    y: 40,
    size: 32,
    speed: 3
  },
  collectible: {
    x: 220,
    y: 160,
    size: 24
  }
};

function initGame() {
  targetScoreElement.textContent = state.targetScore;
  restartButton.addEventListener('click', restartGame);
  window.addEventListener('keydown', handleInput);
  window.addEventListener('keyup', handleInput);
  gameArea.focus();
  moveCollectible();
  requestAnimationFrame(update);
}

function handleInput(event) {
  if (!(event.key in state.keys)) {
    return;
  }

  event.preventDefault();
  state.keys[event.key] = event.type === 'keydown';
}

function update() {
  if (!state.isGameOver) {
    movePlayer();
    checkCollision();
    render();
  }

  requestAnimationFrame(update);
}

function movePlayer() {
  if (state.keys.ArrowUp) {
    state.player.y -= state.player.speed;
  }

  if (state.keys.ArrowDown) {
    state.player.y += state.player.speed;
  }

  if (state.keys.ArrowLeft) {
    state.player.x -= state.player.speed;
  }

  if (state.keys.ArrowRight) {
    state.player.x += state.player.speed;
  }

  // Keep the player inside the visible play area.
  const maxX = gameArea.clientWidth - state.player.size;
  const maxY = gameArea.clientHeight - state.player.size;
  state.player.x = clamp(state.player.x, 0, maxX);
  state.player.y = clamp(state.player.y, 0, maxY);
}

function render() {
  playerElement.style.transform = `translate(${state.player.x}px, ${state.player.y}px)`;
  collectibleElement.style.transform = `translate(${state.collectible.x}px, ${state.collectible.y}px)`;
  scoreElement.textContent = state.score;
}

function checkCollision() {
  const playerBox = {
    left: state.player.x,
    right: state.player.x + state.player.size,
    top: state.player.y,
    bottom: state.player.y + state.player.size
  };

  const collectibleBox = {
    left: state.collectible.x,
    right: state.collectible.x + state.collectible.size,
    top: state.collectible.y,
    bottom: state.collectible.y + state.collectible.size
  };

  const overlaps =
    playerBox.left < collectibleBox.right &&
    playerBox.right > collectibleBox.left &&
    playerBox.top < collectibleBox.bottom &&
    playerBox.bottom > collectibleBox.top;

  if (!overlaps) {
    return;
  }

  state.score += 1;

  if (state.score >= state.targetScore) {
    endGame();
    return;
  }

  moveCollectible();
}

function moveCollectible() {
  const maxX = gameArea.clientWidth - state.collectible.size;
  const maxY = gameArea.clientHeight - state.collectible.size;
  state.collectible.x = randomNumber(0, maxX);
  state.collectible.y = randomNumber(0, maxY);
}

function endGame() {
  state.isGameOver = true;
  messageElement.textContent = 'You collected 5 items. You win!';
  messageElement.classList.add('is-visible');
  render();
}

function restartGame() {
  state.score = 0;
  state.isGameOver = false;
  state.player.x = 40;
  state.player.y = 40;
  clearKeys();
  moveCollectible();
  messageElement.textContent = '';
  messageElement.classList.remove('is-visible');
  gameArea.focus();
  render();
}

function clearKeys() {
  Object.keys(state.keys).forEach((key) => {
    state.keys[key] = false;
  });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

initGame();
