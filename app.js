const express = require("express");
//const ejsLint = require("ejs - lint");
//const expressLayouts = require("express-ejs-layouts");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "yoshi finds eggs",
      snippet: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      title: "yoshi finds eggs",
      snippet: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      title: "yoshi finds eggs",
      snippet: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "Error Page" });
});

app.listen(3000, () => {
  console.log("app is running on ");
});
