let mongoose = require("mongoose");

let MesaModel = new mongoose.Schema({
  // _id: mongoose.Types.ObjectId,
  numero_mesa: {
    type: Number,
    required: true,
  },
  cantidad_inscritos: Number,
});

module.exports = mongoose.model("Mesa", MesaModel, "mesa");
