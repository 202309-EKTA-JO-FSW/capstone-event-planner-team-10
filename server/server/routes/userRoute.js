const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticateUser } = require("../middleware/userAuth");

//new user
router.post("/signup", userController.createUser);

//log in
router.post("/login", userController.loginUser);

//search functionality
router.get("/events", userController.searchEvents);

//buy ticket
router.post(
  "/events/purchase-ticket",
  authenticateUser,
  userController.purchaseTicket
);

//order by id of user
router.get("/orders", authenticateUser, userController.getUserOrders);

//cancel order
router.post("/cancel-order", authenticateUser, userController.cancelOrder);

//myprofile
router.get("/myprofile", authenticateUser, userController.userProfile);

//get all locations
router.get("/location-list", userController.getAllLocations);

//get all genres
router.get("/genre-list", userController.getAllGenres);

//get event by id
router.get("/events/:id", userController.getEventById);

module.exports = router;
