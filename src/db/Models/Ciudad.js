const { model, Schema } = require("mongoose");

const ciudadSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  puntosVacunacion: {
    type: Array,
    required: true,
  },
});

const Ciudad = model("Ciudad", ciudadSchema, "ciudades");
