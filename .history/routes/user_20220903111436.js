

const router = require("express").Router();

// GET ALL USERS
router.get("/usertest", (req, res) => {
    res.send("user test is successfull");
});

router.post("/userposttest", (req, res) => {}
    const username = req.body.username

module.exports = router;