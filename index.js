const fs = require("fs");
const { Shape, Triangle, Circle, Square } = require("./lib/shapes");
const inputHandler = require("./lib/handleInput");

function init() {
    inputHandler();
}

init();