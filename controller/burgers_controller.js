const express = require("express");

const router = express.Router();

//Import the model to use its functions
const burger = require("../models/burger.js");

//All routes 
router.get("/", function (req, res){
    burger.all(function(output){
        var burgerObject = {
            burgers: output
        };
        res.render("index", burgerObject);
    });
});

router.post("/api/burger", function(req, res){
    burger.insert(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(output){
        res.json({ id: output.insertId });
    });
});

router.put("/api/burger/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log(req.body.devoured);

    burger.update ({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end;
         } else {
             res.status(200).end();
            }
    });
    });

//Export module
module.exports = router;
