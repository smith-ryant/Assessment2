///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/

/**
 * Destructuring in JavaScript is a JavaScript expression that allows us to extract data from arrays, objects, maps, and sets — which we assign to variables. The destructuring assignment uses similar kind of syntax, but on the left-hand side of the assignment to define what elements to unpack from the source variables.

There are two types of destructuring: Object destructuring and Array destructuring.

Object Destructuring: Object destructuring allows you to create new variables using an object property as a value. For example:

const user = { name: 'John Doe', age: 22 };
const { name, age } = user;
console.log(name); // Output: "John Doe"
console.log(age); // Output: 22
In the above lines, the name and age variables are created and assigned the values of the corresponding properties from the user object.

Array Destructuring: Similarly, array destructuring allows you to create new variables using an array item as a value. For example:

let myArray = [1, 2, 3, 4];
let [first, second, , fourth] = myArray;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(fourth); // Output: 4

 */
//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
/**
 * This line of code creates a variable called pizza and assigns an object to it. The object is defined using curly braces {} and contains six properties: name, price, category, popularity, rating, and tags.

Each property has a value assigned using a colon :.

name - This property holds a string value, "Pepperoni Pizza", which is the name of the pizza.
price - This property holds a numeric value, 15, indicating the price of the pizza.
category - This property holds a string value, "entree", indicating the category of the food item.
popularity - This property holds a numeric value, 1, which could potentially be used to rank the pizza against other pizzas or food items in terms of popularity.
rating - This property holds a numeric value, 4.5, indicating the average rating the pizza has received from customers.
tags - This property holds an array of strings. The array ['gluten-free', 'kids'] contains tags that give more information about the pizza, such as it is suitable for people on a gluten-free diet or it's popular amongst kids.
All these properties are separated by commas and enclosed in curly brackets, following the standard syntax for creating JavaScript objects. This object can then be used in a program to represent a pizza, enabling the programmer to manipulate the information through the properties of the object. For example, changing the price, adding tags, upticking popularity or updating the rating based on customer reviews.

This object represents a pizza with specific characteristics. It gives us information about the name of the pizza, its price, category it belongs to, its popularity ranking, average customer rating, and any related tags like 'gluten-free or 'kids'.
 */
let pizza = {
    name: "Pepperoni Pizza",
    price: 15,
    category: "entree",
    popularity: 1,
    rating: 4.5,
    tags: ['gluten-free', 'kids']
};


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
/**
 * The line console.log(pizza.popularity); is logging the value of the popularity property from the pizza object in JavaScript.

Here, pizza is expected to be an Object and popularity is supposed to be a property of that object. The value of pizza.popularity will be printed to the console.

This line of code will fail if pizza is not an object or if popularity is not a property of pizza, as it will be attempting to access a property that does not exist, which will throw an error or print undefined to the console.
 */
console.log(pizza.popularity);

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
/**
 * The JavaScript syntax console.log(pizza.tags[1]); is designed to log the second item in the array 'tags' inside the object 'pizza'.

Here's an explanation of how this works:

pizza is an object. Within this object, we expect to see a property tags.
tags is assumed to be an array within the pizza object.
[1] represents the index in the tags array that you want to access. JavaScript array indices start at 0, so tags[1] represents the second element in the array.
console.log is a JavaScript function to print data to the console. It's used for debugging purposes and writes a message to a logging console, which is useful for diagnosing problems.
So, this line of code will print the second tag from the 'tags' array inside 'pizza' to the console. If there's no 'tags' array in 'pizza' or if there's no second item in the 'tags' array, it will print 'undefined' to the console.
 */
console.log(pizza.tags[1]);

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
/**
 * The line const { price } = pizza; is using the destructuring assignment syntax to extract the price property from the pizza object. Instead of accessing the property with pizza.price, you can extract the value directly into a variable named price.

const is a keyword that declares a block-scoped variable, which means the variable's value cannot be changed. It's often used when you expect the variable not to be reassigned.

Then, console.log(price); is logging the value of the price variable to the console.

So, it assumes pizza is an object that has a price property. The price property's value is then extracted into a new constant price, and that value is subsequently output to the console. If pizza does not have a price property, it will print undefined to the console.
 */
const { price } = pizza;
console.log(price);
/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
/**
 * const { category } = pizza;: This line uses object destructuring to extract the category property from the pizza object. It essentially creates a new constant variable named category, and assigns it the value of the category property from the pizza object. If the pizza object does not contain a category property, category would be equal to undefined.

console.log(category);: This line prints the value of the category variable to the console. If pizza had a category property, it would output the value of that property. If not, it would print undefined, representing the absence of that property.

This code will fail if pizza is not previously defined, or is not an object.
 */
const { category } = pizza;
console.log(category);


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
/**
 * This JavaScript code is about creating an array of pizza objects. Each pizza object simulates a menu item in a pizza restaurant with several properties like name, price, category, popularity, rating, and tags. Then, these pizza objects are pushed into pizzaArray.

Here's a breakdown of what each line of this code does:

let pizzaArray = []; declares an empty array which will hold all the pizza objects.

The next lines starting from let sausagePizza= declare a series of pizza objects (sausagePizza, chickenPizza, veggiePizza, seafoodPizza, and cheesePizza). Each of these pizza objects is an object literal with properties representing different aspects of a pizza:

name: The name of the pizza.
price: The price of the pizza.
category: The category of the pizza (all are "entree" in this case).
popularity: A number representing the pizza's popularity.
rating: A number representing the pizza's rating (on a scale of 1-5).
tags: An array of strings that describe certain characteristics of the pizza.
pizzaArray.push(<pizza>); is used after each pizza object is declared, this line pushes the created pizza object to the pizzaArray.

After the execution of this code, pizzaArray will contain five objects, each representing a different pizza.

The code does not perform any function calls or operations. It just creates the data structure, which can then be used in the later portions of the program (not shown in the provided code). The pizzas in pizzaArray can be accessed by their index position (0-4) for further operations or displayed to the user as part of a menu, for example.
 */
let pizzaArray = [];
let sausagePizza = {
    name: 'Sausage Pizza',
    price: 17,
    category: 'entre',
    popularity: 4,
    rating: 4.5,
    tags: ['mushrooms', 'cheese', 'thin-crust']
};
pizzaArray.push(sausagePizza);

let chickenPizza = {
    name: "Chicken Pizza",
    price: 20,
    category: "entree",
    popularity: 5,
    rating: 4.7,
    tags: ['cheese', 'chicken']
  };
  pizzaArray.push(chickenPizza);

  let veggiePizza = {
    name: "Veggie Pizza",
    price: 15,
    category: "entree",
    popularity: 3,
    rating: 4.1,
    tags: ['olives', 'cheese', 'capsicum']
  };
  pizzaArray.push(veggiePizza);
  
  let seafoodPizza = {
    name: "Seafood Pizza",
    price: 22,
    category: "entree",
    popularity: 2,
    rating: 4.9,
    tags: ['seafood', 'cheese']
  };
  pizzaArray.push(seafoodPizza);
  
  let cheesePizza = {
    name: "Cheese Pizza",
    price: 18,
    category: "entree",
    popularity: 5,
    rating: 4.3,
    tags: ['cheese']
  };
  pizzaArray.push(cheesePizza);

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

// const filteredFood = foodArr.filter(/* CALLBACK HERE */)
/**
 * The given JavaScript code loops through the pizzaArray and prints the name of each pizza.

Here's a detailed explanation:

for(let i = 0; i < pizzaArray.length; i++): This is a typical 'for' loop in JavaScript. It starts by declaring a local variable i and initializing it to 0. As long as i is less than the length of pizzaArray, the loop will continue to run. Each time the loop runs, i is incremented by 1 (i++).

pizzaArray.length: This part of the code retrieves the number of elements in the pizzaArray or the number of pizza objects within the array.

console.log(pizzaArray[i].name);: This line outputs the name of the pizza object located at the i-th index of the pizzaArray. pizzaArray[i] selects the i-th pizza object in the array, and .name gets the 'name' property of the selected pizza object. So, for each iteration of the loop, the name of each pizza is printed to the console.

Essentially, what this script does is it goes through every single pizza object in the array and displays their names, one at a time.
 */
for(let i = 0; i < pizzaArray.length; i++) {
    console.log(pizzaArray[i].name);
}