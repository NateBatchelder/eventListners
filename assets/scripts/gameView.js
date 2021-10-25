// exports the GameView object
export default class GameView {
    constructor(root) {
        // uses the root element to create an element 'GameView'
        this.root = root;
        // uses innerHTML to create elements: turn, game status, and reset
        this.root.innerHTML = `
            <div class="header">
                <div class="header__turn"></div>
                <div class="header__status"></div>
                <button type="button" class="header__reset">
                    <i class="material-icons">autorenew</i>
                </button>
            </div>
            <div class="board">
                <div class="board__tile" data-index="0"></div>
                <div class="board__tile" data-index="1"></div>
                <div class="board__tile" data-index="2"></div>
                <div class="board__tile" data-index="3"></div>
                <div class="board__tile" data-index="4"></div>
                <div class="board__tile" data-index="5"></div>
                <div class="board__tile" data-index="6"></div>
                <div class="board__tile" data-index="7"></div>
                <div class="board__tile" data-index="8"></div>
            </div>
        `;

        this.onTileClick = undefined;
        this.onRestartClick = undefined;

        this.root.querySelectorAll(".board__tile").forEach(tile => {
            tile.addEventListener("click", () => {
                if (this.onTileClick) {
                    this.onTileClick(tile.dataset.index);
                }
            });
        });

        this.root.querySelector(".header__reset").addEventListener("click", () => {
            if (this.onRestartClick) {
                this.onRestartClick();
            }
        });
    }
    
    update(game) {
        this.updateTurn(game);
        this.updateStatus(game);
        this.updateBoard(game);
    }
    
    updateTurn(game) {
        this.root.querySelector(".header__turn").textContent = `${game.turn}'s turn`;
            
    }
    updateStatus(game) {
        let status = "In Progress";
        if (game.winningCombinationArrays()) {
            status = `${game.turn} wins!`;
        } else if (game.isInProgress()) {
            status = "In Progress";
        }
        
        this.root.querySelector(".header__status").textContent = status;
    }
    updateBoard(game) {
        const winningCombinationArrays = game.findWinningCombinationArrays();
        for (let i = 0; i < 9; i++) {
            const tile = this.root.querySelector(`[data-index="${i}"]`);
            
            tile.classList.remove("board__tile--winning");
            tile.textContent = game.board[i];

            if (winningCombinationArrays && winningCombinationArrays.includes(i)) {
                tile.classList.add("board__tile--winner");
            }
        }   
    }
}