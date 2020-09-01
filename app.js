var express = require('express');
var bodyparser = require('body-parser');
var app     = express();
var mongoose = require('mongoose');
var cool = require('cool-ascii-faces');

//mongoose.connect("mongodb://localhost/RPSgame",{ useUnifiedTopology: true,useNewUrlParser: true });

app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended : true}));
app.use(express.static(__dirname + "/public"));
app.get('/cool', (req, res) => res.send(cool()));

app.get("/",function(req,res){
	res.render("home");
})
app.get("/RPSgame",function(req,res){
	res.render("game");
})

app.listen(process.env.PORT || "3000",process.env.ID,function(){
	console.log("The website server is running!")
})