const express = require("express");
const router = express.Router();

const peopleController = require("../controllers/peopleController");

//---------------
// Define Routes
//---------------
router
  .route("/")
  .get(peopleController.getAllPeople)
  .post(peopleController.createPerson);

router.route("/postman").post(peopleController.createPersonPostman);

router
  .route("/:id")
  .put(peopleController.updatePerson)
  .delete(peopleController.deletePerson);

//-----------------
// Default Export
//-----------------
module.exports = router;
