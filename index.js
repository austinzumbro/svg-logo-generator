const fs = require("fs");
const CLI = require("./lib/cli");
const FileWriter = require("./lib/writeToFile");

const cli = new CLI;
const filewriter = new FileWriter;

function init() {
    cli.getInput()
        .then((response) => {
            let svg = filewriter.parseResponse(response);
            console.log(svg);
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