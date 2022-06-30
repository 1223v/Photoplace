const express = require('express');
const router = express.Router();



router.get("/hello", (req, res) => {

    res.send("안녕하세요gggggg")
});


module.exports = router;
