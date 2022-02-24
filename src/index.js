require("dotenv").config();
const debug = require("debug")("vacunas:root");
const appOptions = require("./utils/appOptions");
const chalk = require("chalk");

(async () => {
  try {
    debug(chalk.bgBlack.greenBright("Bienvenido a EA Vacunation Database"));
    const { options: selectedOption } = await appOptions();
    //await connectDataBase(dbUrl);

    debug(selectedOption);
  } catch (error) {
    debug(`Error: ${error.message}`);
  }
})();
