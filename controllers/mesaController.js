let mongoose = require("mongoose");
let MesaModel = require("../models/mesaModel");

// Connecting to database
let query =
  "mongodb+srv://weizmanfabian:password12345" +
  "@cluster0.fvfzcgo.mongodb.net/academia?" +
  "retryWrites=true&w=majority";

const db = query;
mongoose.Promise = global.Promise;

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) {
      console.log("Error!" + error);
    } else {
      console.log("Conexión exitosa");
    }
  }
);

exports.findAll = (req, res) => {
  MesaModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
};

exports.findById = (req, res) => {
  MesaModel.findById(req.params._id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
};

exports.save = (req, res) => {
  MesaModel.init(); // <- document gets generated
  let newMesa = new MesaModel(req.body);
  console.log("New Mesa", newMesa);
  newMesa.save((err, data) => {
    if (err) {
      console.log(err);
      res.json({ msg: "Error al insertar", success: false });
    } else {
      res.json({
        msg: "Perfect, Registro exitoso",
        result: data,
        success: true,
      });
    }
  });
};

exports.findByIdAndUpdate = (req, res) => {
  MesaModel.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    if (err) {
      console.log(err);
      res.json({
        msg: data == null ? "No existe" : "Error al actualizar",
        success: false,
      });
    } else {
      res.json({
        msg: "Perfect, Actualización exitosa",
        // result: data,
        success: true,
      });
    }
  });
};

exports.findByIdAndDelete = (req, res) => {
  MesaModel.findByIdAndDelete(req.params._id, (err, data) => {
    if (err || data == null) {
      console.log(err);
      res.json({
        msg: data == null ? "No existe" : "Error al eliminar",
        success: false,
      });
    } else {
      res.json({ msg: "Perfect, Registro eliminado", success: true });
    }
  });
};
