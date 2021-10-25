// exports the GameView object
export default class GameView {
    constructor(root) {
        // uses the root element to create an element 'GameView'
        this.root = root;
        // uses innerHTML to create elements: turn, game status, and reset
        this.root.innerHTML = `
            <div class="header">
                <div class="header__turn">
                    X's turn
                </div>
                <div class="header__status">
                    In Progress
                </div>
                <button type="button" class="header__reset">
                    <i class="material-icons">autorenew</i>
                </button>
            </div>
            <div class="board">
                <div class="board__tile" data-index="0">0</div>
                <div class="board__tile" data-index="1">0</div>
                <div class="board__tile" board__board--winner" data-index="2">0</div>
                <div class="board__tile" data-index="3">0</div>
                <div class="board__tile" data-index="4">0</div>
                <div class="board__tile" data-index="5">0</div>
                <div class="board__tile" data-index="6">0</div>
                <div class="board__tile" data-index="7">0</div>
                <div class="board__tile" data-index="8">0</div>
            </div>
        `;
    }
}