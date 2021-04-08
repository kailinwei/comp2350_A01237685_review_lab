const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

//mysql://be84da1b1de2a8:c09c6fb3@us-cdbr-east-03.cleardb.com/heroku_955a7b8e38392a7?reconnect=true
const dbConfigHeroku = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "be84da1b1de2a8",
	password: "c09c6fb3",
	database: "heroku_955a7b8e38392a7",
	multipleStatements: false,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "2155",
	database: "restaurant_review",
	multipleStatements: false,
	namedPlaceholders: true
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
