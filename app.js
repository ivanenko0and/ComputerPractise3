
const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");
const app = express();

const fs = require('fs');
const child_process = require('child_process');


app.engine("hbs", expressHbs(
    {
        layoutsDir: "views/layouts", 
        defaultLayout: "layout",
        extname: "hbs"
    }
))

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");


app.use("/", function(request, response){
    var workerProcess = child_process.exec('cmd /c chcp 65001>nul && dir', function(error, stdout) {
        console.log(String(stdout));
        response.send(String(stdout));
    });
});

app.use("/", function(request, response){
    response.render("home.hbs");
});


app.listen(3000);

