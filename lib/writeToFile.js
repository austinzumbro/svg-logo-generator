const { Shape, Triangle, Circle, Square } = require("./shapes");

class FileWriter {

    parseResponse(response) {
        let returnShape;
        switch (response.shape) {
            case 'Circle':
                returnShape = new Circle(response.width, response.height, response.shapeColor, response.text, response.textColor);
                break;
            case 'Triangle':
                returnShape = new Triangle(response.width, response.height, response.shapeColor, response.text, response.textColor);
                break;
            case 'Square':
                returnShape = new Square(response.width, response.height, response.shapeColor, response.text, response.textColor);
                break;
        }
        return returnShape.render();
    }



}

module.exports = FileWriter;