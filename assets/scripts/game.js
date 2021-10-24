export default class Game {
    constructor() {
        this.turn = "X";
        this.board = new Array(9).fill(null); // 9 is the length of the array    
    }

    nextTurn() {
        this.turn = this.turn === "X" ? "O" : "X";
    }
    
    makeMove(i) {
        // adds protection if the user tries to make a move on a cell that is already occupied
        if (this.board[i]) {
            return;
        }
        // adds the move to the board, and then changes the turn to the next player
        this.board[i] = this.turn;
        this.nextTurn();    
    }
}
