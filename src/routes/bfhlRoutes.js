const express = require("express");
const router = express.Router();
const { handleBFHL } = require("../controllers/bfhlController");

// POST /bfhl
router.post("/", handleBFHL);

module.exports = router;
