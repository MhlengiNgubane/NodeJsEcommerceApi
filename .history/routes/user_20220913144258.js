

const router = require("express").Router();

// GET ALL USERS
router.get("/usertest", (req, res) => {
    res.send("user test is successfull");
});

router.post("/userposttest", (req, res) => {
    const username = req.body.username
    res.send("your user name is")
});

module.exports = router;