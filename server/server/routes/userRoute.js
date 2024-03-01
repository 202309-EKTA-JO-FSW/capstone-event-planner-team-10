const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

//new user
router.post("/signup", userController.createUser);

//buy ticket
router.post("/events/purchase-ticket", userController.purchaseTicket);

//order by id of user
router.get("/:userId/orders", userController.getUserOrders);

//cancel order
router.post("/cancel-order", userController.cancelOrder);

//seatch functionality
router.get("/events", userController.searchEvents);

// router.get("/new-events", (req, res) => {
//   res.send("hello world");
// });

module.exports = router;
