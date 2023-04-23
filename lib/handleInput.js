const inquirer = require("inquirer");

const inputHandler = inquirer.prompt([
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
        message: "Enter a color for the text (use color name or hexadecimal)."
    },
    {
        name: "shape",
        type: "list",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        name: "shapeColor",
        type: "input",
        message: "Enter a color for the shape (use color name or hexadecimal)."
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
]).then((response) => {
    let returnShape;
    switch (response.shape) {
        case 'Circle':
            returnShape = new Circle(response.width, response.height, response.shapeColor, response.text, response.textColor);
            break;
        case 'Triangle':
            returnShape = new Triangle(300, 200, response.shapeColor);
            break;
        case 'Square':
            returnShape = new Square(300, 200, response.shapeColor);
            break;
    }
}
);

module.exports = inputHandler;