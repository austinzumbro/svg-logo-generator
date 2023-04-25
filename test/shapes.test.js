const { Triangle, Circle, Square } = require("../lib/shapes");

describe('Shape Behavior', () => {
    describe('Render Triangle', () => {
        it('should render a triangle with text', () => {
            const width = 300;
            const height = 200;
            const shapeColor = "blue";
            const text = "123";
            const textColor = "white";
            const triangle = new Triangle(width, height, shapeColor, text, textColor);
            let svg = triangle.render();
            expect(svg).toBe(`<svg width="300" height="200"><polygon points="150 40, 219.2820323027551 160, 80.7179676972449 160" fill="blue"/><text text-anchor="middle" alignment-baseline="middle" font-size="40" fill="white" x="150" y="133.33333333333334"> 123 </text></svg>`);
        })
    })
    describe('Render Circle', () => {
        it('should render a circle with text', () => {
            const width = 300;
            const height = 200;
            const shapeColor = "blue";
            const text = "123";
            const textColor = "white";
            const circle = new Circle(width, height, shapeColor, text, textColor);
            let svg = circle.render();
            expect(svg).toBe(`<svg width="300" height="200"><circle cx="150" cy="100" r="60" fill="blue" /><text text-anchor="middle" alignment-baseline="middle" font-size="40" fill="white" x="150" y="105" > 123 </text></svg>`);
        })
    })
    describe('Render Square', () => {
        it('should render a square with text', () => {
            const width = 300;
            const height = 200;
            const shapeColor = "blue";
            const text = "123";
            const textColor = "#FFFFFF";
            const square = new Square(width, height, shapeColor, text, textColor);
            let svg = square.render();
            expect(svg).toBe(`<svg width="300" height="200"> <rect x="90" y="40" width="120" height="120" fill="blue" /> <text text-anchor="middle" alignment-baseline="middle" font-size="40" fill="#FFFFFF" x="150" y="105" > 123 </text></svg>`);
        })
    })

}
);