const { model, Schema } = require("mongoose");

const vacunaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  dosis: {
    type: Schema.Types.Number,
    required: true,
  },
});

const Vacuna = model("Vacuna", vacunaSchema, "vacunas");
