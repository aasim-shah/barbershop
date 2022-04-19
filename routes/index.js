const express = require("express");
const router = express.Router();
const user = require("../model/user");

router.get("/", async (req, res) => {
  res.render("home");
});

router.get("/home", async (req, res) => {
    res.render("home")
})

router.get("/services", async (req, res) => {
  res.render("layouts/services")
})


router.get("/appointments", async (req, res) => {
  res.render("appointments");
});


router.get("/barbers", async (req, res) => {
  res.render("barbers");
});

router.get("/about", async (req, res) => {
  res.render("about");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});


module.exports = router;
