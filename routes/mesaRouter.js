let express = require("express");
let router = express.Router();
let {
  findAll,
  findById,
  save,
  findByIdAndUpdate,
  findByIdAndDelete,
} = require("../controllers/mesaController");

router.get("/", findAll);
router.get("/:_id", findById);
router.post("/", save);
router.put("/:_id", findByIdAndUpdate);
router.delete("/:_id", findByIdAndDelete);

module.exports = router;
