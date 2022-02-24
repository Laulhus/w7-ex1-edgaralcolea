const { model, Schema } = require("mongoose");

const ciudadSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  puntosVacunacion: {
    type: [puntoVacunacionSchema],
  },
});

const puntoVacunacionSchema = new Schema({
  nombre: {
    type: String,
  },
  localizacion: {
    type: localizacionSchema,
  },
  vacunas: {
    type: Array,
  },
});

const localizacionSchema = new Schema({
  coordenadas: {
    type: [Schema.Types.Number],
  },
  direccion: {
    type: String,
  },
});

const Ciudad = model("Ciudad", ciudadSchema, "ciudades");
