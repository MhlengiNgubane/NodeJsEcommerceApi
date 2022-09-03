

const router = require("express").Router();

// GET ALL USERS
router.get("/", (req, res) => {
    res.send("user test is s")
});


module.exports = router;