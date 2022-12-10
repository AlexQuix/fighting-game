import { GAME_CONTEXT, CANVAS_GAME } from "../utils/index.js";
import { Player } from "./index.js";
import { PlayerInfo } from "./info.js";
import { ManagmentAction } from "../actions/_managment.js";
export class PlayerManagement {
    static createPlayer(character, pos, id) {
        let info = new PlayerInfo(pos, character);
        let action = new ManagmentAction(info, character.skills);
        const player = new Player(info, action, character);
        PlayerManagement.Players[id] = player;
    }
    static assignEnemies() {
        let players = PlayerManagement.Players;
        if (players[0] && players[1]) {
            players[0].info.enemy = players[1].info;
            players[1].info.enemy = players[0].info;
        }
    }
    static updatePlayers() {
        GAME_CONTEXT.fillStyle = "#252525";
        GAME_CONTEXT.fillRect(0, 0, CANVAS_GAME.width, CANVAS_GAME.height);
        PlayerManagement.Players.forEach(player => player.update());
    }
}
PlayerManagement.Players = [];
