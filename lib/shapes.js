class Shape {
    constructor(width, height, shapeColor, text, textColor) {
        this.width = width;
        this.height = height;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
        this.svgOpenTag = `<svg width="${width}" height="${height}">`;
        this.svgCloseTag = `</svg>`;
        this.textTag = `<text 
                            text-anchor="middle"
                            style="font: ${height / 5}px;" 
                            fill="${textColor}" 
                            x="${width / 2}" 
                            y="${height / 2}"
                        > ${text} </text>`
    }
}

class Triangle extends Shape {
    constructor(width, height, shapeColor, text, textColor) {
        super(width, height, shapeColor, text, textColor);
        this.yOffset = height / 5;
        this.vertical = height - this.yOffset;
        this.sideLength = this.vertical / Math.sin(Math.PI / 3);
        this.startPoint = `${width / 2} ${this.yOffset}`;
        this.midPoint = `${(this.sideLength + width) / 2} ${height - this.yOffset}`;
        this.endPoint = `${(width - this.sideLength) / 2} ${height - this.yOffset}`;

        this.shapeTag = `<polygon points="$${this.startPoint}, ${this.midPoint}, ${this.endPoint}" fill="${shapeColor}">`;
    }

    render() {
        return this.shapeTag;
    }
}

class Circle extends Shape {
    constructor(width, height, shapeColor, text, textColor) {
        super(width, height, shapeColor, text, textColor);
        this.yOffset = height / 5;
        this.shapeTag = `<circle cx="${width / 2}" cy="${height / 2}" r="${(height - this.yOffset) / 2}" fill="${shapeColor}">`
    }

    render() {
        console.log(this.shapeTag);
    }
}

class Square extends Shape {
    constructor(width, height, shapeColor, text, textColor) {
        super(width, height, shapeColor, text, textColor);
    }

    render() {
        console.log("This is a square.");
    }
}

module.exports = { Shape, Triangle, Circle, Square }