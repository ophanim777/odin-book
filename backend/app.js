require("dotenv").config();

const express = require("express");

const session = require("express-session");

const passport = require("./config/passport");

const cors = require("cors");

const app = express();

const authRoutes =
require("./routes/authRoutes");

const postRoutes = require("./routes/postRoutes");

const commentRoutes =
require("./routes/commentRoutes");

const likeRoutes =
require("./routes/likeRoutes");

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());

app.use(passport.session());

app.use("/auth", authRoutes);

app.get("/", (req, res) => {

  res.json({
    message: "Odin Book API"
  });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});