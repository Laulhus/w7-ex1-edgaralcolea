require("dotenv").config();
const debug = require("debug")("vacunas:root");
const appOptions = require("./utils/appOptions");
const chalk = require("chalk");
const connectDataBase = require("./db/connectDatabase");

const dbUrl = process.env.MONGO_CONNECT;

(async () => {
  try {
    await connectDataBase(dbUrl);
    debug(chalk.bgBlack.greenBright("Bienvenido a EA Vacunation Database"));
    const { options: selectedOption } = await appOptions();
    debug(selectedOption);
  } catch (error) {
    debug(`Error: ${error.message}`);
  }
})();
