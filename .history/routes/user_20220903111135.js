

const router = require("express").Router();

// GET ALL USERS
router.get("/usertest", (req, res) => {
    res.send("user test is successfull");
});

router.g("/usertest", (req, res) => {
    res.send("user test is successfull");
});

module.exports = router;