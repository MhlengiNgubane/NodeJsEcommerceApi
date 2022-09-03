

const router = require("express").Router();

// GET ALL USERS
router.get("/usertest", (req, res) => {
    res.send("user test is successfull");
});

router.post("/usertest", (req, res) => {
    const username = req.body

module.exports = router;