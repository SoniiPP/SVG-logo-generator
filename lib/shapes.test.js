const { Circle, Square, Triangle } = require("./shape");

// Circle Shape
describe("Circle", () => {
  it("renders correctly", () => {
    const shape = new Circle(); // Create the circle with an initial color
    let color = "Green";
    shape.setColor(color); // Change the color to Green
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="Green" />' // Expect the SVG to reflect the green color
    );
  });
});

// Square Shape
describe("Square", () => {
  it("renders correctly", () => {
    const shape = new Square(); // Create the square with an initial color
    let color = "Blue";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      '<rect x="50" y="50" width="200" height="200" fill="Blue" />' // Expect the SVG to reflect the blue color
    );
  });
});

// Optionally, a test for the Triangle class
describe("Triangle", () => {
  it("renders correctly", () => {
    const shape = new Triangle(); // Create the triangle with an initial color
    let color = "Pink";
    shape.setColor(color);
    expect(shape.render()).toEqual(
      '<polygon points="150,20 250,180 50,180" fill="Pink" />' // Expect the SVG to reflect the pink color
    );
  });
});
