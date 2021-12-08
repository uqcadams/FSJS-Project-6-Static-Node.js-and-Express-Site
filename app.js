// Initialises express
const express = require("express");
const app = express();

app.set("view engine", "pug");
app.use("/static", express.static("public"));

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

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("error");
});

// Establishes the local host port for the server to run on
const port = 3000;
app.listen(port, () => {
  console.log(`Nodemon is running on local host: port ${port}`);
});
