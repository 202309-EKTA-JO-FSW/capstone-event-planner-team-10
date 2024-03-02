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

module.exports = router;
