import Game from "./Game.js";
import GameView from "./GameView.js"


let game = new Game();
let gameView = new GameView(document.getElementById("app"));

// define functions
gameView.onTileClick = function (i) {
    console.log(`Array tile ${i} clicked.`);
    game.makeMove(i);
    gameView.update(game);
};

gameView.onRestartClick = function () {
    game = new Game();
    gameView.update(game);
    console.log("Restart button clicked, game is restarted!");

};

// update the gameView with the game data
gameView.update(game);
 




