import { PANEL_CONTEXT, CANVAS_GAME } from "../utils/index.js";
export class GameInfo {
    constructor(player, pos) {
        this.player = player;
        this.pos = pos;
    }
    drawPerfil(x, y) {
        PANEL_CONTEXT.beginPath();
        PANEL_CONTEXT.strokeStyle = "red";
        PANEL_CONTEXT.lineWidth = 5;
        PANEL_CONTEXT.arc(x, y, 50, 0, Math.PI * 2);
        PANEL_CONTEXT.stroke();
        PANEL_CONTEXT.closePath();
    }
    drawHealthBar(x, y) {
        let { health } = this.player.info;
        PANEL_CONTEXT.fillStyle = "yellow";
        PANEL_CONTEXT.fillRect(x, y, health, 40);
        PANEL_CONTEXT.closePath();
    }
    drawName(x, y) {
        let { name } = this.player.info;
        PANEL_CONTEXT.fillStyle = "#fff";
        PANEL_CONTEXT.lineWidth = 1;
        PANEL_CONTEXT.font = "bold 20px tahoma";
        PANEL_CONTEXT.fillText(name, x, y);
        PANEL_CONTEXT.closePath();
    }
    draw() {
        let posx = 0;
        let perfX = 100;
        let textX = 170;
        let barX = 170;
        if (this.pos === "right") {
            posx = CANVAS_GAME.width;
            perfX = -100;
            textX = -260;
            barX = -375;
        }
        this.drawPerfil(posx + perfX, 70);
        this.drawName(posx + textX, 45);
        this.drawHealthBar(posx + barX, 60);
    }
    update() {
        this.draw();
    }
}
export function createGameInfo(players) {
    return [
        new GameInfo(players[0], "left"),
        // new GameInfo(players[1], "right")
    ];
}
