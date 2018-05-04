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
            skills = ["Java", "Volley", "OpenWeatherMap API", "Google Maps API"];
            break;
        case "placefinder":
            desc = "PlaceFinder is a very quick and easy way of finding establishments of a certain type near you. It uses the Google Maps and Google Places API to display the location and information of stores in an easy to use and effective manor. It parses and displays data from the Places API in a RecyclerView, which makes the app easy to use and lightweight.";
            albumSize = 5;
            skills = ["Java", "Volley", "Google API Client", "Google Maps API", "Google Places API"];
            break;
        case "homebase":
            desc = "When I learn a new web development skill, I want a real place to test it and apply my knowledge. I use Home Base as that testing ground for new skills. Using this app, I have reinforced my knowledge with common technolgies and accelerated my learning of new ones through \"real\" applications. On a ground level, Home Base is a dummy campsite review website. Users can leave ratings, descriptions, and comments. It uses Passport to check authentication and MongoDB to store Campsites, Users, and Comments in a database.";
            albumSize = 5;
            skills = ["HTML", "CSS", "JavaScript", "NodeJS", "MongoDB", "RESTful Routing" ,"ExpressJS", "Passport", "Bootstrap"];
            break;
        case "doctordms":
            desc = "In progress";
            albumSize = 1;
            skills = ["NodeJS", "JavaScript"]
            break;
        case "onionometer":
            desc = "Onionometer is my first machine learning project. It uses the Doc2Vec algorithm to convert headlines in to vectors, which are then used to train a logitic regression classifier. I used NodeJS to gather data (with the puppeteer library). I gathered 20000 real headlines and 20000 satirical, fake headlines to train and test with. With my first attempt, I was able to achieve ~80% accuracy. As I learn more about machine learning, I will return to this project and try to increase the accuracy."
            albumSize = 1;
            skills = ["NodeJS", "Python", "Doc2Vec", "sklearn", "puppeteer", "request"];
            break;
    }
    
    if (!desc) return res.render("index");
    
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

