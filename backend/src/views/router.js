const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const post_controller = require("../controllers/posts");

router.get("/", controller.get);

// Miguel
router.post("/posts", post_controller.createPost);
router.delete("/posts", post_controller.deletePost);


module.exports = router;
