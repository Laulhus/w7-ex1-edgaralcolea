const inquirer = require("inquirer");

const appOptions = () =>
  new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          name: "options",
          message: "Selecciona una de las siguientes opciones:",
          type: "list",
          choices: [
            "Listar centros de vacunación",
            "Listar personas vacunadas por centro",
            "Introducir vacunas",
            "Introducir personas vacunadas",
          ],
        },
      ])
      .then((answer) => {
        const options = {
          options: answer.options,
        };
        resolve(options);
      })
      .catch((error) => {
        reject(error);
      });
  });

module.exports = appOptions;
