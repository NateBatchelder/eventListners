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
        `;
    }
}