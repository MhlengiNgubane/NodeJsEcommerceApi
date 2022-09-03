
const router = require("express").Router();


// GET ALL USERS
router.get("/usertest", (req, res) => {
    res.send("user test is succ")
});


module.exports = router;