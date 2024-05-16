const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shape");

class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
    this.text = "";
    this.textColor = "";
  }

  render() {
    // Complete the SVG markup by including shape and text elements
    return `<svg width="500" height="400" xmlns="http://www.w3.org/2000/svg">
      ${this.shapeElement}
      <text x="150" y="125" font-family="Arial" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }

  setTextElement(text, color) {
    this.text = text;
    this.textColor = color;
  }

  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to (3) Characters:",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Enter a color keyword (or a hexadecimal number) for the text color:",
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Enter a color keyword (or a hexadecimal number) for the shape color:",
  },
  {
    type: "list",
    name: "shapeType",
    message: "Choose which shape you would like:",
    choices: ["Circle", "Square", "Triangle"],
  },
];

inquirer.prompt(questions).then((answers) => {
  let shape;
  switch (answers.shapeType.toLowerCase()) {
    case "circle":
      shape = new Circle();
      break;
    case "triangle":
      shape = new Triangle();
      break;
    case "square":
      shape = new Square();
      break;
    default:
      console.error("Invalid shape selected.");
      return; // Exit on error
  }

  shape.setColor(answers.shapeColor);

  // Create the SVG instance and set elements
  const svg = new Svg();
  svg.setTextElement(answers.text, answers.textColor);
  svg.setShapeElement(shape);

  // Ensure the 'examples' directory exists
  if (!fs.existsSync("examples")) {
    fs.mkdirSync("examples");
  }

  // Write the SVG content to a file
  fs.writeFileSync("logo.svg", svg.render());
  console.log("Generated logo.svg");

  // Generate example logos for Circle, Triangle, and Square
  const exampleShapes = [
    { shape: new Circle(), name: "example_circle.svg" },
    { shape: new Square(), name: "example_square.svg" },
    { shape: new Triangle(), name: "example_triangle.svg" },
  ];

  exampleShapes.forEach(({ shape, name }) => {
    shape.setColor("green");
    const exampleSvg = new Svg();
    exampleSvg.setTextElement("HEY", "White");
    exampleSvg.setShapeElement(shape);
    fs.writeFileSync(`./examples/${name}`, exampleSvg.render());
    console.log(`Generated ${name}`);
  });
});
