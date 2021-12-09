// Initialises express
const express = require("express");
const app = express();

app.set("view engine", "pug");
app.use("/static", express.static("public"));

// Defines the routes for the portfolio website. Project routing is kept separate.
const mainRoutes = require("./routes");
const projectRoutes = require("./routes/projects");
app.use(mainRoutes);
app.use("/project", projectRoutes);

// Custom error handling for 404 errors
app.use((req, res, next) => {
  const err = new Error("Sorry, this page does not exist!");
  err.status = 404;
  next(err);
});

// Redirects the user to appropriate error pages when different errors are encountered
app.use((err, req, res, next) => {
  res.locals.error = err;
  if (err.status === 404) {
    console.log("Hi friend, this page cannot be found!");
    res.render("page-not-found", err);
  } else {
    res.render("error", err);
  }
});

// Establishes the local host port for the server to run on
const port = 3000;
app.listen(port, () => {
  console.log(`Nodemon is running on local host: port ${port}`);
});
