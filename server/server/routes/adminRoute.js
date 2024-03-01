// Import necessary modules
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

//make location
router.post("/location", adminController.createLocation);

// make event
router.post("/event", adminController.createEvent);

//get all events
router.get("/events", adminController.getAllEvents);

//get event by id
router.get("/events/:id", adminController.getEventById);

//make a user admin or non-admin
router.put("/edit-user", adminController.editUserAdminStatus);

//get all users
router.get("/users", adminController.getAllUsers);

//make a genre
router.post("/create-genre", adminController.createGenre);

// router.get("/new-events", (req, res) => {
//   res.send("hello world");
// });

module.exports = router;
