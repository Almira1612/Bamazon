# Bamazon
The app will take in orders from customers and deplete stock from the store's inventory.

## How to use
First of all, you should have the MySQL database already set up on your machine. 
The Bamazon Customer Portal allows users to view the current items available for purchase. The user will be prompted to enter the item id# and how many items they wish to purchase. If the item is in stock, the order will be completed and the user will see the total amount of their purchase.
To run the customer interface please follow the steps below on command line:

* git clone https://github.com/Almira1612/Bamazon.git
* cd bamazon
* node bamazonCustomer.js

![Begin](/Screenshots/01.png)

Enter the ID of the product:

![Enter ID](/Screenshots/02.png)

After enter product ID and number of purchase, user can see the purchase complete message and total prices, and comfirm message.

![order complete](/Screenshots/03.png)
![order confirm](/Screenshots/noToBuy.png)

If there is not enough of the product to meet the customer's request,will show "out of stock"message.

![out of stock](/Screenshots/outstock.png)





