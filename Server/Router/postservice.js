const express = require("express");
const router = express.Router();
const { postservice, deleteService } = require("../Controller/services");

router.patch("/post/:id", postservice); // here :id for Organization id
router.patch("/delete/:id", deleteService);

module.exports = router;
