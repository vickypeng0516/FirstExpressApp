var express = require("express");
var app = express();
var bodyParser = require("body-parser");
// tell express to use public dir
// css in side public, tell express to look for css in public dir
app.use(express.static("public"));
// to eliminate using .ejs in rendering
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
var friends = ["tony","marianda","justin","lily"];

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
    res.render("dog");
});

app.get("/posts", function(req,res){
    var posts = [
        {title:"POST 1", author:"Susy1"},
        {title:"POST 2", author:"Susy2"},
        {title:"POST 3", author:"Susy3"}
    ];

    res.render("posts",{posts:posts});
});
app.get("/friends", function(req,res){
    res.render("friends", {friends : friends});
});
// post request and redirect back to result page
app.post("/addfriend", function(req,res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    // run the code in /friends
    res.redirect("/friends");
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

