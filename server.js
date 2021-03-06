const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + "/public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Set handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controller/burgers_controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on: " + PORT);
});

