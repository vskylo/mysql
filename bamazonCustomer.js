var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazon"
});


connection.connect(function(err){
	if (err) throw err ;
	console.log("\n                List Of Our Products \n");
	displayProducts();
});


var totalCost = 0;
var orderPrice = 0;
var quantityAfterOrder = 5;


displayProducts = function(){
	for (i=1; i<11; i++){
	var query = connection.query("SELECT * FROM products WHERE ?",
	{
		item_id: i
	},
	function(err,res){
		
		console.log("-----------------------------------------------------------------------------------------------------------")
		console.log("Product ID: "+ res[0].item_id + "  Product Name: " + res[0].product_name + " From: " + res[0].department_name + "  PRICE($): " + res[0].price + "  Quantity: " + res[0].stock_quantity + "\n");
	});


}
connection.end();
}


placeAnOrder = function(){
	inquirer.prompt([{
		name: "orderID",
		type: "input",
		message: "What is the ID of the product you want to order? "
	},
	{
		name: "units",
		type: "input",
		message: "How many units of this product do you want to order? "

	}]).then(function(val){

		if (val.orderID>10 || val.orderID<1) {
			console.log("There is no such product");
			placeAnOrder();
		}
		else {
			var connection = mysql.createConnection({
			host: "localhost",
			port: 3306,
			user: "root",
			password: "b@lderduck123",
			database: "bamazon"
			});
			connection.connect(function(err){
				if (err) throw err;
				var query = connection.query("SELECT * FROM products WHERE ?",
				{
					item_id: val.orderID
				},
				function(err,res){
					orderPrice = res[0].price;
					quantityAfterOrder = res[0].stock_quantity;
					//console.log(res[0]);
				    quantityAfterOrder -= val.units;
				if (quantityAfterOrder < 0) {
					console.log("Sorry, there is not enough stock for this particular order!");
					connection.end();
					placeAnOrder();
				}
				else {
					query = connection.query("UPDATE products SET ? WHERE ?",[{
						stock_quantity : quantityAfterOrder
					},
					{
						item_id : val.orderID
					}],
					function(err,res){
						// Do nothing
					});

					connection.end();
					totalCost += orderPrice*val.units;
					inquirer.prompt([
					{
						name : "something",
						type : "confirm",
						message : "Do you want to place another order? "
					}
					]).then(function(ans){
						if (ans.something) {
							placeAnOrder();
						}
						else {
							console.log("Total Cost :" + totalCost);
							console.log("GoodBye!");
							process.exit(0);
						}
					});
				}
				});
				
			});

		}
	});


}


placeAnOrder();


