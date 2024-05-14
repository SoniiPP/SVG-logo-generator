const { Circle, Square, Triangle } = require("./shape");

// Circle Shape
describe("Circle", () => {
  test("renders correctly", () => {
    const shape = new Circle("red"); // Create the circle with an initial color
    var color = "blue";
    shape.setColor(color); // Change the color to blue
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="blue" />' // Expect the SVG to reflect the blue color
    );
  });
});

// Square Shape
describe("Square", () => {
  test("renders correctly", () => {
    const shape = new Square("green"); // Create the square with an initial color
    expect(shape.render()).toEqual(
      '<rect x="50" y="50" width="200" height="200" fill="green" />' // Expect the SVG to reflect the green color
    );
  });
});

// Optionally, a test for the Triangle class
describe("Triangle", () => {
  test("renders correctly", () => {
    const shape = new Triangle("yellow"); // Create the triangle with an initial color
    expect(shape.render()).toEqual(
      '<polygon points="150,20 250,180 50,180" fill="yellow" />' // Expect the SVG to reflect the yellow color
    );
  });
});
