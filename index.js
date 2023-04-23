const fs = require("fs");
const CLI = require("./lib/cli");
const ShapeParser = require("./lib/parser");

const cli = new CLI;
const shapeParser = new ShapeParser;

function init() {
    cli.getInput()
        .then((response) => {
            let svg = shapeParser.parseResponse(response);
            return svg;
        })
        .then((svg) => {
            fs.writeFile("./dist/logo.svg", svg, (err) => {
                if (err) {
                    throw err;
                }
            });
            console.log("Generating SVG...");
        })
        .catch((error) => {
            console.log(error);
        });
}

init();