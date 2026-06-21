const bcrypt = require("bcryptjs");
const passport = require("passport");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.register = async (req, res) => {

  try {

    const {
      firstName,
      lastName,
      email,
      password
    } = req.body;

    const existingUser =
      await prisma.user.findUnique({
        where: {
          email
        }
      });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists"
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user =
      await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword
        }
      });

    res.status(201).json({
      message: "User created",
      user
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server error"
    });

  }

};

exports.login = (req, res, next) => {

  passport.authenticate(
    "local",
    (err, user) => {

      if (err) {
        return next(err);
      }

      if (!user) {

        return res.status(401).json({
          message: "Invalid credentials"
        });

      }

      req.login(user, err => {

        if (err) {
          return next(err);
        }

        res.json({
          message: "Login successful",
          user
        });

      });

    }
  )(req, res, next);

};

exports.logout = (req, res, next) => {

  req.logout(err => {

    if (err) {
      return next(err);
    }

    req.session.destroy();

    res.json({
      message: "Logout successful"
    });

  });

};

exports.me = (req, res) => {

  if (!req.user) {

    return res.status(401).json({
      message: "Not logged in"
    });

  }

  res.json(req.user);

};


exports.guestLogin = (req, res, next) => {

  req.body.email = "guest@test.com";
  req.body.password = "123456";

  passport.authenticate(
    "local",
    (err, user) => {

      if (err) {
        return next(err);
      }

      if (!user) {

        return res.status(401).json({
          message: "Guest account unavailable"
        });

      }

      req.login(user, err => {

        if (err) {
          return next(err);
        }

        res.json(user);

      });

    }
  )(req, res, next);

};