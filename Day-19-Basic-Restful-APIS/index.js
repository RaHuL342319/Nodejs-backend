const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// mimic the db using an array
let blogList = [];

app.get("/blogs", (req, res) => {
  return res.status(202).json({
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

app.get("/blogs/:id",(req,res)=>{
    // console.log(req.params);
    const result = blogList.filter((blog) => blog.id == req.params.id);
    return res.status(200).json({
        data: result,
        success: true,
    })
})

app.delete('/blogs/:id',(req,res)=>{
    const result = blogList
})

app.listen(PORT, () => {
  console.log("Server started on PORT", PORT);
});
