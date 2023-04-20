const { Circle, Triangle, Square } = require("./shapes.js");

describe("Triangle Test", () => {
  test("Test for a Triangle with a [green] Background", () => {
    const shape = new Triangle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<polygon points="10,190 100,10 190,190" fill="green" />'
    );
  });
});
describe("Circle Test", () => {
  test("Test for a Circle with a [darkred] Background", () => {
    const shape = new Circle();
    shape.setColor("darkred");
    expect(shape.render()).toEqual(
      '<circle cx="100" cy="100" r="95" fill="darkred" />'
    );
  });
});
describe("Square Test", () => {
  test("Test for a Square with a [#af2307] Background", () => {
    const shape = new Square();
    shape.setColor("#af2307");
    expect(shape.render()).toEqual(
      '<rect x="10" y="10" width="190" height="190" fill="#af2307" />'
    );
  });
});
