
// requiring router and our book routes. 
const router = require("express").Router();
const bookRoutes = require("./books");

// building out book routes by adding "/books" to our books.js routes. 
router.use("/books", bookRoutes);

// exporting our routes. 
module.exports = router;