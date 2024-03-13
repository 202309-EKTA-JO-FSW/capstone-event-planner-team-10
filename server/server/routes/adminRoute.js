// Import necessary modules
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { adminAuthMiddleware } = require("../middleware/adminAuth");
const { authenticateUser } = require("../middleware/userAuth");

// make event
router.post("/event", adminController.createEvent);

//get all events
router.get(
  "/events",
  authenticateUser,
  adminAuthMiddleware,
  adminController.getAllEvents
);

//make a user admin or non-admin
router.put(
  "/edit-user",
  authenticateUser,
  adminAuthMiddleware,
  adminController.editUserAdminStatus
);

//get all users
router.get(
  "/users",
  authenticateUser,
  adminAuthMiddleware,
  adminController.getAllUsers
);

//make a genre
router.post(
  "/create-genre",
  authenticateUser,
  adminAuthMiddleware,
  adminController.createGenre
);

//make location
router.post(
  "/location",
  authenticateUser,
  adminAuthMiddleware,
  adminController.createLocation
);

//edit events
router.put(
  "/events/:id",
  authenticateUser,
  adminAuthMiddleware,
  adminController.editEvent
);

// router.get("/new-events", (req, res) => {
//   res.send("hello world");
// });

module.exports = router;
