// Import necessary modules
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Define route to create an event
router.post("/location", adminController.createLocation);

// POST route for creating a new event
router.post("/event", adminController.createEvent);

router.get("/events", adminController.getAllEvents);

router.get("/events/:id", adminController.getEventById);

router.put("/edit-user", adminController.editUserAdminStatus);

router.get("/users", adminController.getAllUsers);

router.post("/create-genre", adminController.createGenre);

// router.get("/new-events", (req, res) => {
//   res.send("hello world");
// });

module.exports = router;
