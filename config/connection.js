//Require mysql
var mysql = require("mysql");

var db;

//Create conenction to the database
if (process.env.JAWSDB_URL){
  db = mysql.createConnection(process.env.JAWSDB_URL);
} else {

db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "fj5867HJC74^$VBR#D5677b",
  database: "burgers_db"
});
};

//Connect to the database
db.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + db.threadId);
});

//export db module
module.exports = db;
