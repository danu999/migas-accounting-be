const express = require("express");
const DataMasterController = require("../controller/datamaster.js");
const router = express.Router();

//READ - GET
router.get("/journal", DataMasterController.getallData);


module.exports = router;