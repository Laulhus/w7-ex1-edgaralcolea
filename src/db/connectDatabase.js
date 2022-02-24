const mongoose = require("mongoose");
const debug = require("debug")("vacunas:db");
const connectDataBase = (connectString) =>
  new Promise((resolve, reject) => {
    mongoose.connect(connectString, (error) => {
      if (error) {
        reject(new Error(`Cannot connect to the database. ${error.message}`));
      }
      debug("Conexión con la base de datos realizada.");
      resolve();
    });
  });

module.exports = connectDataBase;
