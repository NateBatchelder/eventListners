export default class Game {
    constructor() {
        this.turn = "X";
        this.board = new Array(9).fill(null); // 9 is the length of the array    
    }
}
