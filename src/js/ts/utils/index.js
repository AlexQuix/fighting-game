export { Damage } from "./damage.js";
export { Velocity } from "./velocity.js";
export { Position } from "./position.js";
export * from "./predicates.js";
export const CANVAS_GAME = document.querySelector(".game");
export const CANVAS_PANEL = document.querySelector(".panel");
export const GAME_CONTEXT = CANVAS_GAME.getContext("2d");
GAME_CONTEXT.imageSmoothingEnabled = false;
export const PANEL_CONTEXT = CANVAS_PANEL.getContext("2d");
