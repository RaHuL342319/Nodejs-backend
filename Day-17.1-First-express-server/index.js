const express = require('express');

// create an express app object by calling the express funtion
const app = express();
const PORT = 3000;

app.get('/',function (req,res){
    res.send("Hello World!")
});

app.post('/home', function(req,res){
    res.send("welcome to home")
})

app.patch('/home', function(req,res){
    // res.send("this is a patch request.");

    res.json({
        message: "This is a patch request",
        success: true
    })
})


app.listen(PORT, ()=>{
    console.log('Server started on port no', PORT)
})