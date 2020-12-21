/*requiring router and our controllers to connect the two and call on
The functions made by the controller. */
const router = require("express").Router();
const bookController = require("../../controllers/controller");

// setting routes for the get and post functions
//  using the functions "findAll" and "create" from the controller.
router
  .route("/")
  .get(bookController.findAll)
  .post(bookController.create)

  // setting the route "/:id" for the remove function in our controller
router.route("/:id").delete(bookController.remove);

// Setting the route "/search" for the "findById" function in the controller. 
router 
    .route("/search")
    .get(bookController.findById)

// exporting our routes. 
module.exports = router;