const express = require("express");
const router = express.Router();
const { postcomment, deleteComment } = require("../Controller/comment");

router.patch("/post/:id", postcomment);
router.patch("/delete/:id", deleteComment);

module.exports = router;
