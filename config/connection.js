var mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "fj5867HJC74^$VBR#D5677b",
  database: "burgers_db"
});

db.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + db.threadId);
});

module.exports = db;
