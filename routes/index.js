const express = require("express");
const router = express.Router();

// Imports the project data set
const data = require("../data.json");
const projects = data.projects;

// Route to the "Home" page
router.get("/", (req, res) => {
  res.locals = data.projects; // Gives the index route access to the project dataset
  res.render("index", { projects });
});

// Route to the "About" page
router.get("/about", (req, res) => {
  res.render("about");
});

// Exports the module for use within app.js
module.exports = router;
