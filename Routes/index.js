// requiring path, router and and our api routes. 
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// adding our api routes that we required
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;