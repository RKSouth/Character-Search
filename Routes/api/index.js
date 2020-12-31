// requiring router and our character routes. 
const router = require("express").Router();
const characterRoutes = require("./characters");

// building out character routes by adding "/characters" to our characters.js routes. 
router.use("/characters", characterRoutes);

// exporting our routes. 
module.exports = router;