const debug = require("debug");

(async () => {
  try {
    const options = await appOptions();

    await connectDataBase(dbUrl);

    debug("Bienvenido a EA Vacunation Database");
  } catch (error) {
    debug(`Error: ${error.message}`);
  }
})();
