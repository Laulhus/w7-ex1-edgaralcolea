const { model, Schema } = require("mongoose");

const personaSchema = new Schema({
  dni: {
    type: String,
    required: true,
  },
  centroVacunacion: {
    type: Array,
    required: true,
  },
});

const Persona = model("Persona", personaSchema, "personas");
