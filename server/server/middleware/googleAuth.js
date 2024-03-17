const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const cookie = require("cookie");
require("dotenv").config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/user/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({
          email: profile.emails[0].value,
        });

        if (existingUser) {
          return done(null, existingUser);
        }

        const newUser = await User.create({
          email: profile.emails[0].value,
          username: profile.displayName,
          image: profile.photos[0].value,
          password: "DSFEWO2@!!3@keoww",
        });

        return done(null, newUser);
      } catch (err) {
        return done(err);
      }
    }
  )
);

exports.googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

exports.googleAuthCallback = passport.authenticate("google", {
  session: false,
});

exports.generateToken = (req, res) => {
  const token = jwt.sign({ userId: req.user._id }, process.env.JWT_SECRET);

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", token, {
      httpOnly: false,
      secure: false,
      maxAge: null,
      sameSite: "none",
      path: "/",
    })
  );

  res.redirect("http://localhost:3000/events");
};
