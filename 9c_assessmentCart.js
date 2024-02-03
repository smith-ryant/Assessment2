///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
/**
 * The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value.

Here's an in-depth explanation of how the line of code works:

cart.reduce((sum, item) => sum + item.price, 0);
In this line of JavaScript code, cart.reduce() is called on the array cart, which is an array of objects where each object represents an item in the cart.

The reduce() method takes two arguments: a reducer function and an initial value.

The reducer function also takes two arguments: an accumulator and a current value. In this case, the accumulator is sum and the current value is item.

sum is the variable where the resultant value is stored after each iteration. It carries forward the result of each operation moving from one element to the next in the array.

item is the current item in the array, being accessed during each iteration.

=> sum + item.price is the operation that the reduce function is performing. It is adding the price property of the current item object to the sum.

The 0 at the end of the function is the starting value for sum. If this were not provided, sum would start out as the first item in the array (cart[0]), which in this case would be an object and cause the function to fail.

By the end of the operations, reduce() would sum up all the price properties of each item object in the cart array and return that total, which is then stored in the total constant.
 */
// const summedPrice = cart.reduce(/* CALLBACK HERE */)
const total = cart.reduce((sum, item) => sum + item.price, 0);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
/**
 * This is a JavaScript function named calcFinalPrice that takes in three arguments: cartTotal, couponValue, and tax. Here's how it works:

The function calcFinalPrice is declared with three parameters: cartTotal, couponValue, tax. When you call this function, you need to provide these three arguments.

function calcFinalPrice(cartTotal, couponValue, tax)
Inside the function, a new variable finalPrice is declared using the let keyword. The let keyword allows you to declare variables that are limited in scope to the block, statement, or expression in which they are used.

let finalPrice
The value assigned to finalPrice is the result of the calculation cartTotal + (cartTotal * tax) - couponValue.

cartTotal + (cartTotal * tax) : This part of the code handles the tax calculation. The cartTotal is multiplied by tax (where tax is expected to be a decimal representing the tax rate), the result represents the tax on the shopping cart. This is then added to cartTotal to get the total cost after tax.

- couponValue : After the tax is added, the couponValue is subtracted from the result. This represents a discount coupon applied after tax.

finalPrice = cartTotal + (cartTotal * tax) - couponValue;

Finally, the result that is the finalPrice after the computation is returned as the result of the function.

 return finalPrice;
So, when this function is called with appropriate arguments, it returns the final price a user has to pay, taking into account the total cart value, tax, and any coupon discount.
 */
function calcFinalPrice(cartTotal, couponValue, tax) {
    let finalPrice = cartTotal + (cartTotal * tax) - couponValue;
    return finalPrice;
}

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Big Bob is the Sole Proprietor of Big Bob's Burgers. He would like to update his establishment with some javaScript code to collect data on customers. The information he will be collecting: fullName: 'string', email: 'string", address: 'string', and orderHistory: array. Bob needed to use the string values for the keys fullName, email, and address because thats what makes sense.  Now the orderHistory needs to be an array of objects. Those objects will include information about the items the customer ordered, when they were ordered, and how much was the receipt. 

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
/**
 * The let keyword is used to declare a variable that can be reassigned. In this case, the variable named customer is assigned an object.

This customer object has four properties: name, email, address, and orderHistory.

name: This is a string data type that holds the name of the customer, the value "John Doe" in this example.

email: This is also a string data type that holds the customer's email address, "johndoe@example.com" in this case.

address: Another string data type, it holds the customer's address. In this example, the address is "1234 Street, City, State, Country".

orderHistory: This is an array of objects where each object represents an order made by the customer. Each order object has three properties: date, items, and total. date is a string representing the date of the order, items is an array of strings representing the ordered items, and total is a string representing the total cost of the order. This format for order records enables the customer to track and reorder easily and the restaurant to predict sales based on the customer's habits.

By organizing data in this way, the code provides a model of a customer's information and order history that can be used in a hypothetical cart page of a restaurant website.
 */
/**
 * code declares a JavaScript object representing a customer at "Big Bob's Burgers". The JavaScript object is assigned to a variable declared with the let keyword, which allows its value to be changed later.

The bigBobsCustomers object holds several properties describing a customer:

'fullName': A string data type that holds the full name of the customer.

'email': A string data type that holds the customer's email address.

'address': A string data type that holds the customer's physical address.

'orderHistory': An array containing objects. Each object within this array represents a distinct order that the customer made. Every order object has three properties:

'date': The date the order was made, as a string.

'items': An array of strings wherein each string is a menu item that the customer ordered.

'total': The total cost of the order as a string.

The last line of 'l' seems to be a typo or extraneous code as it's not syntactically valid in JavaScript. It would result in a syntax error if it was attempted to be run.
 */
let bigBobsCustomers = {
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    address: '1234 Street, City, State, Country',
    orderHistory: [
        {
            date: '01-01-2021',
            items: ['Big Burger', 'French Fries'],
            total: '$15'
        },
        {
            date: '02-01-2021',
            items: ['Cheeseburger', 'Coke'],
            total: '$12'
        }
    ]
}
