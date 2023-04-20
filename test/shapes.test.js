const sum = require("./shapes");

test("Addition of 2 numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
