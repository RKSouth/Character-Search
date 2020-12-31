/*requiring router and our controllers to connect the two and call on
The functions made by the controller. */
const router = require("express").Router();
const charactersController = require("../../controllers/charactersController");

// setting routes for the get and post functions
//  using the functions "findAll" and "create" from the controller.
router
  .route("/")
  .get(charactersController.findAll)
  .post(charactersController.create)

  // setting the route "/:id" for the remove function in our controller
router.route("/:id").delete(charactersController.remove);

// Setting the route "/search" for the "findById" function in the controller. 
router 
    .route("/search")
    .get(charactersController.findById)

// exporting our routes. 
module.exports = router;