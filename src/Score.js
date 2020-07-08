class Score {
    constructor() {
        this.scoreEl = document.getElementById('score');
    }

    init(snake) {
        this.snake = snake;
    }

    clearScore() {
        this.scoreEl.textContent = '';
    }

    renderScore() {
        this.scoreEl.textContent = `Счёт: ${this.snake.body.length}`;
    }
}