
//Require packages
var mysql = require('mysql');
//var prompt = require('prompt');
var colors = require('colors/safe');
var Table = require('cli-table');
//Connection to the mySQL database
var connection = mysql.createConnection({
	host: 'localHost',
	user: 'root',
	password: '1612',
	database: 'bamazon_db', 
});
//connect to the database
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});
// Display all products 
connection.query('SELECT ItemID, ProductName, DepartmentName, Price, StockQuantity FROM Products', function(err, result){
	if(err) console.log(err);
    console.log('Here are our products...\n');
	//creates a table for the information from the mysql database to be placed
	var table = new Table({
		head: ['Item Id#', 'Product Name', 'Department', 'Price', 'In Stock'],
		style: {
			head: ['yellow'],
			compact: false,
			colAligns: ['center'],
		}
	});

	//loops through each item in the mysql database and pushes that information into a new row in the table
	for(var i = 0; i < result.length; i++){
		table.push(
			[result[i].ItemID, result[i].ProductName, result[i].DepartmentName,result[i].Price,result[i].StockQuantity]
		);
	}
	console.log(table.toString());

	//purchase();
});