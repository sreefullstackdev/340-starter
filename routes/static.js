const express = require('express');
const router = express.Router();

// Static Routes
// Set up "public" folder / subfolders for static files
router.use(express.static("public"));
router.use("/css", express.static(__dirname + "public/css"));
router.use("/js", express.static(__dirname + "public/js"));
router.use("/images", express.static(__dirname + "public/images"));

router.get("/custom", (req, res) => {
  res.send("<h2>Custom page coming soon!</h2>")
})

router.get("/sedan", (req, res) => {
  res.send("<h2>Sedan page coming soon!</h2>")
})

router.get("/suv", (req, res) => {
  res.send("<h2>SUV page coming soon!</h2>")
})

router.get("/truck", (req, res) => {
  res.send("<h2>Truck page coming soon!</h2>")
})

router.get("/inventory", (req, res) => {
  res.render("inventory", { title: "Inventory" })
})

router.get("/account/login", (req, res) => {
  res.render("login", { title: "Login" })
})


module.exports = router;



