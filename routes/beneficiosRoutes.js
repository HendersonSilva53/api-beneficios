const express = require("express");

const router = express.Router();

const BeneficioController = require("../controller/BeneficioController");

router.post("/beneficios", BeneficioController.cadastrar);
router.get("/beneficios", BeneficioController.listar);

module.exports = router;