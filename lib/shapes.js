class Shape {
    constructor(width, height, shapeColor, text, textColor) {
        this.width = width;
        this.height = height;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
        this.svgOpenTag = `<svg width="${width}" height="${height}">`;
        this.shapeTag = '';
        this.textTag = '';
        this.svgCloseTag = `</svg>`;
    }

    render() {
        let uncleanedSVG = this.svgOpenTag + this.shapeTag + this.textTag + this.svgCloseTag;
        let cleanedSVG = uncleanedSVG.replace(/\s\s+/g, ' ');
        return cleanedSVG;
    }

    report() {
        return [this.width, this.height];
    }
}

class Triangle extends Shape {
    constructor(width, height, shapeColor, text, textColor) {
        super(width, height, shapeColor, text, textColor);
        this.yOffset = height / 5;
        this.vertical = height * 3 / 5;
        this.sideLength = this.vertical / Math.sin(Math.PI / 3);
        this.startPoint = `${width / 2} ${this.yOffset}`;
        this.midPoint = `${(width + this.sideLength) / 2} ${height - this.yOffset}`;
        this.endPoint = `${(width - this.sideLength) / 2} ${height - this.yOffset}`;

        this.shapeTag = `<polygon points="${this.startPoint}, ${this.midPoint}, ${this.endPoint}" fill="${shapeColor}"/>`;
        this.textTag = `<text text-anchor="middle" alignment-baseline="middle" font-size="${height / 5}" fill="${textColor}" x="${width / 2}" y="${height * 2 / 3}"> ${text} </text>`;
    }
}

class Circle extends Shape {
    constructor(width, height, shapeColor, text, textColor) {
        super(width, height, shapeColor, text, textColor);
        this.yOffset = height / 5;
        this.shapeTag = `<circle 
                            cx="${width / 2}" 
                            cy="${height / 2}" 
                            r="${height * 3 / 10}" 
                            fill="${shapeColor}" 
                            />`;
        this.textTag = `<text 
                            text-anchor="middle" 
                            alignment-baseline="middle"
                            font-size="${height / 5}"  
                            fill="${textColor}" 
                            x="${width / 2}" 
                            y="${height * 0.525}"
                        > ${text} </text>`
    }
}

class Square extends Shape {
    constructor(width, height, shapeColor, text, textColor) {
        super(width, height, shapeColor, text, textColor);
        this.sideLength = height * 3 / 5
        this.shapeTag = `
            <rect 
                x="${(width - this.sideLength) / 2}" 
                y="${(height / 5)}" 
                width="${this.sideLength}" 
                height="${this.sideLength}" 
                fill="${shapeColor}" 
            />`;
        this.textTag = `
            <text 
                text-anchor="middle" 
                alignment-baseline="middle"
                font-size="${height / 5}"  
                fill="${textColor}" 
                x="${width / 2}" 
                y="${height * 0.525}"
            > ${text} </text>`
    }
}

module.exports = { Shape, Triangle, Circle, Square }