const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shape");
const { default: Choices } = require("inquirer/lib/objects/choices");

class Svg {
  constructor() {
    this.textElement = "";
    this.shapeElement = "";
  }

  render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" `;
  }

  setTextElement(text, color) {
    this.textElement =
      'text  x="150" y="125" font-size="60" text-anchor="middle" fill="white"';
  }

  setShapeElement(shape) {
    this.shapeElement = shape.render();
  }
}
const questions = [
  {
    type: "input",
    name: "text",
    message: " Text : Enter up to (3) Characters:",
  },

  {
    type: "input",
    name: "text-color",
    message: "Text COLOR: Enter a color keyword (OR a hexadecimal number): ",
  },

  {
    type: "input",
    name: "shape",
    message: " Shape COLOR: Enter a Color keyword(OR a hexadecimal number):",
  },
  {
    type: "list",
    name: "pixel-image",
    message: "Choose which Pixel Image you would like?",
    choices: ["Circle", "Shape", "Triangle"],
  },
];

// console.log(questions);
inquirer.prompt(questions).then((answers) => {
  let shape;
  switch (answers.shape.toLowerCase()) {
    case "circle":
      shape = new Circle(answers.color);
      break;
    case "triangle":
      shape = new Triangle(answers.color);
      break;
    case "square":
      shape = new Square(answers.color);
      break;
  }

  //   const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  //   ${shape.render()}
  //   <text x="150" y="150" font-family="Arial" font-size="20" fill="black" text-anchor="middle">${
  //     answers.text
  //   }</text>
  // </svg>`;

  fs.writeFileSync("examples/logo.svg", Svg);
  console.log("Generated logo.svg");
});
