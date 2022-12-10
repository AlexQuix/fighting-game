import {PANEL_CONTEXT, CANVAS_GAME} from "./ts/utils/index.js";
import {handleKeyPress, handleKeyUp} from "./ts/controls.js";
import {PlayerManagement} from "./ts/player/management.js";
import {createGameInfo} from "./ts/game/index.js";
import {Demon} from "./ts/characters/index.js";

PlayerManagement.createPlayer(new Demon(), {x:0, y:100}, 0);
PlayerManagement.createPlayer(new Demon(), {x:400, y:100}, 1);
PlayerManagement.assignEnemies();
// PlayerManagement.createPlayer(new Demon(), {x:600, y:100}, 1);
const GAME_INFO = createGameInfo(PlayerManagement.Players);

function updateGame(){
    PANEL_CONTEXT.fillStyle = "#252525";
    PANEL_CONTEXT.fillRect(0, 0, CANVAS_GAME.width, CANVAS_GAME.height);
    GAME_INFO.forEach(gameInfo=>gameInfo.update());
}

function animateGame(){
    PlayerManagement.updatePlayers();
    updateGame();
    requestAnimationFrame(animateGame);
}
function initApp(){
    animateGame();
    window.addEventListener("keydown", handleKeyPress.bind(PlayerManagement.Players))
    window.addEventListener("keyup", handleKeyUp.bind(PlayerManagement.Players));
}
window.onload = initApp;