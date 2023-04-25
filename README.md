# SVG Logo Generator

## Description

This week I've written a simple logo generator that takes user input via the command line and outputs an SVG file based on those settings.

## Usage

1. Run `npm i` to install the required modules. 
> There are only two: `inquirer` and `jest`.
2. From the application directory, run `node index.js`
3. Answer the prompts. These include:  
a. Text _(up to 3 characters)_  
b. Text Color _(name or hex code)_  
c. Shape _(circle, triangle, square)_  
d. Shape Color _(name or hex code)_  
e. Logo Width _(default 300)_  
f. Logo Height _(default 200)_  
4. Unless an error is thrown, the SVG meeting those specifications is written to the `/dist` directory.

---
## My Approach

The impetus behind this project was to try out a few concepts/processes/technologies that I've read about but haven't played around with until now. Taking them in order: 

In terms of new concepts, I want to practice some **Object Oriented Programming**, because it seems to be the preferred model for modern programming - at least according to the reading I've done. 

In terms of process, I'm looking at **Test-Driven Development**, which is new to me, but I know is highly relevant in larger projects. I'm going to be getting my feet wet with [Jest](https://jestjs.io/).

In terms of technology, I'm looking at **SVG**, for no real reason other than I think it will be fun.


---

### Collecting User Input

I'm using `inquirer` here, which I first used in my project last week. Only thing of interest here was adding a little bit of validation.

```javascript
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
```
___
### Shape Classes and Subclasses

Given that this was largely an attempt to get some practice in Object Oriented Programming, this seemed like a great opportunity to set up some Classes. I went with a parent `Shape` class along with some child `Circle`, `Square`, and `Triangle` classes.

The user input is the same set of data every time - `text`, `textColor`, `shape`, `shapeColor`, `width`, `height` - so it makes sense to hand as much of that as possible to the parent `Shape` class. The only information that varies is the `shape` value itself, which I opted not to include in the classes at all. (Right now it simply operates a switch case, which I'll talk about in the next section.)

Each subclass inherits its general properties from the parent class and uses those properties to generate the values needed to draw its particular shape.  To take the `Triangle` class, for example:

```javascript
class Triangle extends Shape {
    constructor(width, height, shapeColor, text, textColor) {
        // Assign properties inherited from the parent class
        super(width, height, shapeColor, text, textColor);

        // The properties below relate to sizing the
        // triangle inside the rectangular SVG field
        this.yOffset = height / 5;
        this.vertical = height * 3 / 5;

        // Using the sizing information above, do a little math
        // to make an equilateral triangle centered inside the
        // rectangular SVG field. 
        this.sideLength = this.vertical / Math.sin(Math.PI / 3);
        this.startPoint = `${width / 2} ${this.yOffset}`;
        this.midPoint = `${(width + this.sideLength) / 2} ${height - this.yOffset}`;
        this.endPoint = `${(width - this.sideLength) / 2} ${height - this.yOffset}`;

        // Store the above data in an SVG-readable string
        this.shapeTag = `<polygon points="${this.startPoint}, ${this.midPoint}, ${this.endPoint}" fill="${shapeColor}"/>`;

        // Build the SVG-readable text tag.
        this.textTag = `<text text-anchor="middle" alignment-baseline="middle" font-size="${height / 5}" fill="${textColor}" x="${width / 2}" y="${height * 2 / 3}"> ${text} </text>`;
    }
}
```
Originally, I had set the `textTag` on the parent class, but after a few trial runs it became clear that the text needed to be positioned slightly differently in a way that was specific to each shape.  

---  
### Testing

I wrote a few tests just to check that SVGs would render as expected.  Nothing too fancy.  

If you want to run them yourself, call `npm run test` from within the application directory.

> In terms of practicing Test-Driven Development, my choice of SVG rendering wasn't the best... I tried to be good and write my tests first, but because the final SVG text was so long and filled with opportunities for spacing differences, I kept failing my tests even though I was successfully rendering logos.  
>
> That said, it was fun to run `Jest` see all the spacing differences that were causing the test to fail! It was super clear and easy to read, and if I was really dedicated, I could have spent the time to write the perfect RegEx expression that would have cleaned it all up.
>
> Instead, I wrote an okay RegEx expression that cleaned things up most of the way, and then I just copied my result into my test... Horrible, I know.

---
## Learnings / Reflections

It's neat writing things to file. It feels like you're really making something. And it's really fun to get started working with SVGs!  (I think because I'm not a great visual artist myself, it's fun to think that maybe I could become one by doing math. Ha!)

In terms of looking forward, it's obvious the logo itself could be vastly improved. However, collecting more input via the command line would have diminishing returns in terms of the app's user experience.  I'm already frustrated by how many things I have to enter right now, and it's only 6 things!
