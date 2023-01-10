let mongoose = require("mongoose");
let MesaModel = require("../models/mesaModel");

// Connecting to database
let query =
  "mongodb+srv://weizmanfabian:password12345" +
  "@cluster0.fvfzcgo.mongodb.net/academia?" +
  "retryWrites=true&w=majority";

// let query =
//   "mongodb://weizmanfabian:password12345@monguito:27017/miapp?authSource=admin";

const db = query;
mongoose.Promise = global.Promise;

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => console.log(error ? `Error! ${error}` : "Conexión exitosa")
);

exports.findAll = (req, res) => {
  MesaModel.find((err, data) => {
    console.log(err ? `Error findAll ${err}` : `findAll=> ${data.length}`);
    res.json(data);
  });
};

exports.findById = (req, res) => {
  MesaModel.findById(req.params._id, (err, data) => {
    console.log(err ? `Error findById ${err}` : `findById=> ${data}`);
    res.json(data);
  });
};

exports.save = (req, res) => {
  MesaModel.init(); // <- document gets generated
  let newMesa = new MesaModel(req.body);
  console.log("New Mesa", newMesa);
  newMesa.save((err, data) => {
    console.log(err ? `Error save ${err}` : `save=> ${data}`);
    res.json(
      err
        ? { msg: "Error al insertar", success: false }
        : {
            msg: "Perfect, Registro exitoso",
            result: data,
            success: true,
          }
    );
  });
};

exports.findByIdAndUpdate = (req, res) => {
  MesaModel.findByIdAndUpdate(req.params._id, req.body, (err, data) => {
    console.log(
      err ? `Error findByIdAndUpdate ${err}` : `findByIdAndUpdate=> ${data}`
    );
    res.json(
      err
        ? {
            msg: data == null ? "No existe" : "Error al actualizar",
            success: false,
          }
        : {
            msg: "Perfect, Actualización exitosa",
            // result: data,
            success: true,
          }
    );
  });
};

exports.findByIdAndDelete = (req, res) => {
  MesaModel.findByIdAndDelete(req.params._id, (err, data) => {
    console.log(
      err ? `Error findByIdAndDelete ${err}` : `findByIdAndDelete=> ${data}`
    );
    res.json(
      err
        ? {
            msg: data == null ? "No existe" : "Error al eliminar",
            success: false,
          }
        : {
            msg: "Perfect, Registro eliminado",
            success: true,
          }
    );
  });
};
