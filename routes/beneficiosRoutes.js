const express = require("express");

const router = express.Router();

const BeneficioController = require("../controller/BeneficioController");

router.post("/beneficio", BeneficioController.cadastrar);
router.get("/beneficio", BeneficioController.listar);

module.exports = router;