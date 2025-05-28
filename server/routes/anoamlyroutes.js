const express = require("express");
const router = express.Router();
const multer = require("multer");
const anomalyController = require("../controllers/anomalycontroller");

const upload = multer({ dest: "uploads/" });

router.post("/detect", upload.single("image"), anomalyController.detectAnomaly);

module.exports = router;
