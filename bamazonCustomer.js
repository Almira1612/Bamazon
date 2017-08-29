
//Require packages
var mysql = require('mysql');
var inquirer = require('inquirer');
//var prompt = require('prompt');
var colors = require('colors/safe');
var Table = require('cli-table');

var total = 0;
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
//creates a table for the information from the mysql database to be placed 
var table = new Table({
		head: ['Item Id#', 'Product Name', 'Department', 'Price', 'In Stock'],
		style: {
			head: ['yellow'],
			compact: false,
			colAligns: ['center'],
		}
	});
connection.query('SELECT * FROM products',function(err, result){
	if(err) console.log(err);
    console.log('Here are our products...\n');
    // Display all products
	//loops through each item in the mysql database and pushes that information into a new row in the table
	for(var i = 0; i < result.length; i++){
		table.push(
			[result[i].ItemID, result[i].ProductName, result[i].DepartmentName,result[i].Price,result[i].StockQuantity]
		);
	}
	console.log(table.toString());

	order();
});

//------------------ function of user place an order -------------------------
 //Prompts the user to place an order, fulfills the order, and then calls the new order function
var order = function() {

        inquirer.prompt([{
            name: "Item",
            type: "input",
            message: "Choose the ID of the Item you would like to buy",
            validate: function(value) {

                //Validates answer
                if (isNaN(value) === false) {
                    return true;
                } else {
                    console.log("\nPlease enter only the item ID of the item you'd like to buy\n");
                    return false;
                }
            }
        },

            //Prompts the customer for the quantity
            {
            name: "Qty",
            type: "input",
            message: "How many would you like to buy?",
            validate: function(value) {
                //validates answer
                if (isNaN(value) === false) {
                    return true;
                } else {
                    console.log("\nPlease enter a valid quantity\n");
                    return false;
                }
            }
        }]).then(function(answer) {
            var ItemInt = parseInt(answer.Qty);

            //Queries the database
            connection.query("SELECT * FROM Products WHERE ?", [{ItemID: answer.Item}], function(err, data) {
                if (err) throw err;

                //Checks if sufficient quantity exists
                if (data[0].StockQuantity < ItemInt) {
                    console.log("We're sorry, that product is currently out of stock\n");
                    console.log("Please choose another product\n");
                    order();
                } else {

                    //If quantity exists updates database
                    var updateQty = data[0].StockQuantity - ItemInt;
                    var totalPrice = data[0].Price * ItemInt;
                    connection.query('UPDATE products SET StockQuantity = ? WHERE ItemID = ?', [updateQty, answer.Item], function(err, results) {
                        if(err) {
                            throw err;
                        } else {
                            console.log("Purchase complete!\n");
                            console.log("Your total cost is: $ " + totalPrice);

                            //Asks the buyer if they would like to continue
                            inquirer.prompt({
                                name: "buyMore",
                                type: "confirm",
                                message: "Would you like to buy another product?",
                            }).then(function(answer) {
                                if (answer.buyMore === true) {
                                    order();
                                } else {
                                    console.log("Thank your for shopping with Bamazon, see you later!");
                                    connection.end();
                                }
                            });
                        }
                    });
                }
            });
        });
    };