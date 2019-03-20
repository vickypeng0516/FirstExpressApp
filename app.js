var express = require("express");
var app = express();

// Define route
// "/" => "Hi"
app.get("/", function(req, res){
    res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req,res){
    res.send("Goodye!");
})
// /r/anything will be redirect
// /r/anything/something will not be redirect
app.get("/r/:subredditName", function(req,res){
    var subredditName = req.params.subredditName;
    res.send("WELCOME TO A SUBRREDIT!" + subredditName);
})

app.get("/r/:subrreditName/comments/:id/:title/", function(req,res){
    res.send("WELCOME TO THE COMMENTS PAGE!");
});

app.get("/dog", function(req,res){
    res.render("dog.ejs");
});
// * this will run with any /jfisoir, if not match above route
// the order of this route matter
// if move to top, all route will map to below function
app.get("*",function(req,res){
    res.send("You Are a star!!")
});

// Tell Express to listen for request
app.listen(3000, function(){
    console.log("Server has started!");
}); 

