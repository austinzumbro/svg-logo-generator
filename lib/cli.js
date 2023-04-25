const inquirer = require("inquirer");

class CLI {
    getInput() {
        return inquirer.prompt([
            {
                name: "text",
                type: "input",
                message: "Enter up to three characters for your logo.",
                validate: function (text) {
                    if (text.length < 4) {
                        return true;
                    }
                    return "Character limit is 3.";
                }
            },
            {
                name: "textColor",
                type: "input",
                message: "Enter a color for the text (use color name or hex code).",
                default: "#FFFFFF",
            },
            {
                name: "shape",
                type: "list",
                choices: ["Circle", "Triangle", "Square"]
            },
            {
                name: "shapeColor",
                type: "input",
                message: "Enter a color for the shape (use color name or hex code).",
                default: "#900C3F"
            },
            {
                name: "width",
                type: "input",
                message: "How wide should the logo be?",
                default: 300,
            },
            {
                name: "height",
                type: "input",
                message: "How tall should the logo be?",
                default: 200
            }
        ]
        );
    }
}

module.exports = CLI;