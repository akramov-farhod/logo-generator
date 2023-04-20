import inquirer from "inquirer";
import fs from "fs";
import { Circle, Triangle, Square } from "./test/shapes.js";

function generateLogo(fileName, answers) {
  console.log(answers);
  let svgString = "";
  svgString =
    '<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgString += "<g>";
  svgString += `${answers.shape}`;

  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgString += `<polygon points=" 10,190 100,10 190,190 " fill="${answers.shapeColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="10" y="10" width="190" height="190" fill="${answers.shapeColor}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="100" cy="100" r="95" fill="${answers.shapeColor}"/>`;
  }

  svgString += `<text x="100" y="100" text-anchor="middle" font-size="30" fill="${answers.charactersColor}">${answers.characters}</text>`;
  svgString += "</g>";
  svgString += "</svg>";

  fs.writeFile(fileName, svgString, (error) => {
    error ? console.log(error) : console.log("Generated your logo in logo.svg");
  });
}

function askQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Type up to 3 [LETTERS/NUMBERS] to be displayed on the Logo",
        name: "characters",
      },
      //3 Characters COLOR
      {
        type: "input",
        message:
          "Choose a color for the Characters. Color Keyword or Hex Number",
        name: "charactersColor",
      },
      //Shape Selection
      {
        type: "list",
        message: "Choose a Shape for your Logo",
        choices: ["Circle", "Triangle", "Square"],
        name: "shape",
      },
      //Shape Color
      {
        type: "input",
        message: "Choose a color for the Shape. Color Keyword or Hex Number",
        name: "shapeColor",
      },
    ])
    .then((answers) => {
      if (answers.characters.length > 3) {
        console.log("Your logo can't have more than 3 characters");
        askQuestions();
      } else {
        //use answers to generate the LOGO
        generateLogo("logo.svg", answers);
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log(error);
      } else {
        console.log(error);
      }
    });
}

askQuestions();
