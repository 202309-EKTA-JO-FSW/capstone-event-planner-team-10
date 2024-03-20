const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticateUser } = require("../middleware/userAuth");

//google auth
const {
  googleAuth,
  googleAuthCallback,
  generateToken,
} = require("../middleware/googleAuth");

//google auth
router.get("/auth/google", googleAuth);

//google auth
router.get("/auth/google/callback", googleAuthCallback, generateToken);

//update user's image
router.put("/image", userController.updateProfileImage);

//update user's location
router.put("/update-location", userController.updateLocation);

//new user
router.post("/signup", userController.createUser);

//login
router.post("/login", userController.loginUser);

//logout
router.post("/logout", userController.logoutUser);

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

//get all locations
router.get("/location-list", userController.getAllLocations);

//get all genres
router.get("/genre-list", userController.getAllGenres);

//get event by id
router.get("/events/:id", userController.getEventById);

//myprofile
router.get("/me", authenticateUser, userController.getCurrentUser);

module.exports = router;
