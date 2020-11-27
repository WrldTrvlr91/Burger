//Require connections.js file
const db = require("../config/connection.js");

function questionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + " = " + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

//Object for all SQL Statements
var orm = {

  //Return all results from table
  selectAll: function (tableInput, cb) {
    let sqlString = "SELECT * FROM " + tableInput + ";";
    db.query(sqlString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //Add new item to database
  insertOne: function (table, cols, vals, cb) {
    let sqlString = "INSERT INTO " + table;

    sqlString += " (";
    sqlString += cols.toString();
    sqlString += ") ";
    sqlString += "VALUES (";
    sqlString += questionMarks(vals.length);
    sqlString += ") ";

    db.query(sqlString, vals, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  //Update existing item in database
  updateOne: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    db.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

//Export module
module.exports = orm;