
const router = require("express").Router();


// GET ALL USERS
router.get("/usertest", (req, res) => {
    res.send("user test is successful");
});


module.exports = router;