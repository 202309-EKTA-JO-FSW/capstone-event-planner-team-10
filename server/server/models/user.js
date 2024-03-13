const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const orderSchema = new Schema({
  eventId: { type: Schema.Types.ObjectId, ref: "Event", required: true },
  ticketId: { type: Schema.Types.ObjectId, ref: "Ticket", required: true },
  eventTitle: { type: String },
  ticketTitle: { type: String },
  ticketDescription: { type: String },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
});

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  isAdmin: { type: Boolean, default: false },
  image: {
    type: String,
    default:
      "https://firebasestorage.googleapis.com/v0/b/eventure-61c1e.appspot.com/o/users%2Faz.png?alt=media&token=189648cb-0edb-40cc-a54a-2dcb61fafaa2",
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: "Location",
    required: true,
    default: "65dcea18e49e1e8b15bae854",
  },
  orders: [orderSchema],
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
