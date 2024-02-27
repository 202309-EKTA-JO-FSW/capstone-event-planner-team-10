// routes/userRoute.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route for creating a new user
router.post("/signup", userController.createUser);

router.post("/events/purchase-ticket", userController.purchaseTicket);

router.get("/:userId/orders", userController.getUserOrders);

router.put("/cancel-ticket", userController.cancelTickets);

// router.get("/new-events", (req, res) => {
//   res.send("hello world");
// });

module.exports = router;
