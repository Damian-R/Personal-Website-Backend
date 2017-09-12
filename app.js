var express = require("express"),
    app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index"); 
});

app.get("/project/:projectName", function(req, res){
    var desc;
    var albumSize = 0;
    var skills = [];
    
    switch(req.params.projectName){
        case "easyweather":
            desc = "This is the description for EasyWeather";
            albumSize = 1;
            skills = ["Java", "Volley", "OpenWeatherMap API", "JSON"];
            break;
        case "placefinder":
            desc = "This is the description for PlaceFinder";
            albumSize = 5;
            skills = ["Java", "Volley", "JSON", "Google API Client", "Google Maps API", "Google Places API"];
            break;
    }
    var project = {
        title: req.params.projectName,
        desc: desc,
        albumSize: albumSize,
        skills: skills
    };
    res.render("project", {project: project});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started on port " + process.env.PORT); 
});

// PROJECT INFORMATION

