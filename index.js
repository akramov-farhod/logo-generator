import inquirer from "inquirer";
import { Circle, Triangle, Square } from "./test/shapes";

function generateLogo(fineName, answers) {}

function askQuestions() {}
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
      message: "Choose a color for the Characters. Color Keyword or Hex Number",
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
      // Something else went wrong
      console.log("This thing is broken");
    }
  });

askQuestions();
