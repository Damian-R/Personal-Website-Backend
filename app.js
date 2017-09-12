var express = require("express"),
    app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index"); 
});

app.get("/project/:projectName", function(req, res){
    res.render("project", {projectName: req.params.projectName, albumSize: 0});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started on port " + process.env.PORT); 
});