const express = require('express');
const router = express.Router();

// Static Routes
// Set up "public" folder / subfolders for static files
router.use(express.static("public"));
router.use("/css", express.static(__dirname + "public/css"));
router.use("/js", express.static(__dirname + "public/js"));
router.use("/images", express.static(__dirname + "public/images"));

router.get("/inventory", (req, res) => {
  res.render("inventory", { title: "Inventory" })
})

router.get("/account/login", (req, res) => {
  res.render("login", { title: "Login" })
})

router.get("/custom", (req, res) => {
  res.render("custom", { title: "Custom Vehicles" })
})

router.get("/sedan", (req, res) => {
  res.render("sedan", { title: "Sedans" })
})

router.get("/suv", (req, res) => {
  res.render("suv", { title: "SUVs" })
})

router.get("/truck", (req, res) => {
  res.render("truck", { title: "Trucks" })
})

module.exports = router;



