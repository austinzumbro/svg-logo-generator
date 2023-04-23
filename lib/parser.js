const { Triangle, Circle, Square } = require("./shapes");

class ShapeParser {

    parseResponse(response) {
        console.log(response);
        let returnShape;
        switch (response.shape) {
            case 'Circle':
                returnShape = new Circle(parseInt(response.width), parseInt(response.height), response.shapeColor, response.text, response.textColor);
                break;
            case 'Triangle':
                returnShape = new Triangle(parseInt(response.width), parseInt(response.height), response.shapeColor, response.text, response.textColor);
                break;
            case 'Square':
                returnShape = new Square(parseInt(response.width), parseInt(response.height), response.shapeColor, response.text, response.textColor);
                break;
        }
        console.log(returnShape.report());
        return returnShape.render();
    }



}

module.exports = ShapeParser;