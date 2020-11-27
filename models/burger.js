//Require orm file
const orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
    orm.selectAll("burgers", function(results){
        cb(results);
    });
    },

    insert: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(results){
            cb(results);
        });
    },

    update: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(results){
            cb(results);
        });
    }

};

//Export module
module.exports = burger;