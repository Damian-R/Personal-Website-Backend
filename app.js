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
            desc = "EasyWeather is an extremely simple weather app. It was my first experience using APIs ever, and my first experience parsing and using JSON. It uses the Google Maps API to get the latitude/longitude of the current user, then makes a JSON object request to the OpenWeatherMap API with that data.";
            albumSize = 1;
            skills = ["Java", "Volley", "OpenWeatherMap API", "Google Maps API", "JSON", "Android Studio"];
            break;
        case "placefinder":
            desc = "This is the description for PlaceFinder";
            albumSize = 5;
            skills = ["Java", "Volley", "JSON", "Google API Client", "Google Maps API", "Google Places API", "Android Studio"];
            break;
        case "homebase":
            desc = "This is the description for Home Base";
            albumSize = 5;
            skills = ["HTML", "CSS", "JavaScript", "NodeJS", "MongoDB", "ExpressJS, Passport", "Bootstrap", "VS Code"];
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

