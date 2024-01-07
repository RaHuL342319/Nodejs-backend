const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger);

// mimic the db using an array
let blogList = [];

function logger(req, res, next) {
  console.log(req.url);
  console.log(req.body);
  let condition = true;
  if (condition) {
    return res.status(500).json({
      message: "something went wrong",
    });
  }
  next();
}

function isAuthenticated(req, res, next) {
  console.log("user Authentication successful");
  next();
}

app.get("/blogs", logger, isAuthenticated, (req, res) => {
  return res.status(200).json({
    data: blogList,
    success: true,
  });
});

app.post("/blogs", (req, res) => {
  //  console.log(req.body);
  blogList.push({
    title: req.body.title,
    content: req.body.content,
    id: Math.floor(Math.random() * 1000),
  });
  return res.status(200).json({
    success: true,
  });
});

app.get("/blogs/:id", (req, res) => {
  // console.log(req.params);
  const result = blogList.filter((blog) => blog.id == req.params.id);
  return res.status(200).json({
    data: result,
    success: true,
  });
});

app.delete("/blogs/:id", (req, res) => {
  const result = blogList;
});

app.listen(PORT, () => {
  console.log("Server started on PORT", PORT);
});
