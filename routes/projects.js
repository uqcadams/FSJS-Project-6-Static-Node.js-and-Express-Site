const express = require("express");
const router = express.Router();

// Imports the project data set
const data = require("../data.json");
const projects = data.projects;

// Routes user to first project page if no path is defined.
router.get("/", (req, res) => {
  res.redirect(`/project/0`);
});

// Route to a custom project page
router.get("/:id", (req, res) => {
  const { id } = req.params; // saves the project number
  // If user input is greater than the total number of projects, redirect to the final project
  if (id > data.projects.length - 1) {
    return res.redirect(`/project/${data.projects.length - 1}`);
  }
  if (isNaN(id)) {
    return res.redirect(`../error`);
  }
  res.locals = data.projects[id]; // assigns locals associated with that project
  const project = res.locals;
  console.log(project.image_urls.thumbs[1].src);
  res.render("project", { project });
});

module.exports = router;
