///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home 
    page of the restaurant's website.
*/


//////////////////PROBLEM 1////////////////////
/* 
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says: 
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the 
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

//CODE HERE
/**
 * a constant value greetUser is declared as an arrow function. The function is assigned a single parameter (username).

Inside the arrow function, a string is returned using template literals. Template literals are a way to allow embedded expressions and variables inside a string. They are enclosed by back-ticks (`), not quotes.

The ${username} inside the back-ticks is a placeholder that gets replaced by the value of the username parameter. In the greetUser function, it will be replaced by whatever argument is passed when calling this function.

The final line console.log(greetUser('Andrew')); is simply executing or calling the greetUser function with the string 'Andrew' as the username argument. As the greetUser function returns a string, this call will return 'Welcome back, Andrew'.

The output of this code to the console will be: Welcome back, Andrew.∑
 */
const greetUser = (username) => {
    return `Welcome back, ${username}`;
};
console.log(greetUser('Andrew'));


//////////////////PROBLEM 2////////////////////
/* 
    Below is an array of zip codes that are in
    the restaurant's delivery zone. 

    Write a function called `canWeDeliver` that
    takes in one argument, `zipCode`.

    If the zip code passed in is in the array,
    return a string letting the user know they
    are eligible for delivery. If they are not, 
    return a string letting them know that. 

    For example:
    canWeDeliver(84606) 
        // `Sorry, we can't deliver to that address`
    canWeDeliver(85205) 
        // `You're in our delivery zone!`
*/

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]

//CODE HERE
/**
 * const canWeDeliver = (zipCode) => { - This line declares a constant variable canWeDeliver and assigns a function to it. The function accepts one parameter, zipCode.

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]; - Inside the function, a constant array deliveryAreaZipCodes is defined. This array contains the zip codes that the restaurant can deliver to.

if (deliveryAreaZipCodes.includes(zipCode)) { - The function then checks if the provided zip code is included in the deliveryAreaZipCodes array using the includes() method. This method returns a boolean: true if the array contains the provided zip code, and false otherwise.

return "You're in our delivery zone!"; - If the includes() method returns true, meaning the zip code is in the delivery zone, a string is returned to let the user know they're in the delivery zone.

return "Sorry, we can't deliver to that address"; - If the includes() method returns false (meaning the zip code is not in the delivery zone), a different message is returned to let the user know delivery is not possible to their area.

console.log(canWeDeliver(85213)); and console.log(canWeDeliver(83301)); are calls to the canWeDeliver function, passing in zip codes 85213 and 83301. The resulting message (either "You're in our delivery zone!" or "Sorry, we can't deliver to that address") will be output to the console.
 */
const canWeDeliver = (zipCode) => {
    const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]; // if the array is declared within the function, it changes the scope. 
    if (deliveryAreaZipCodes.includes(zipCode)) {
        return "You're in our delivery zone!";
    } else {
        return "Sorry, we can't deliver to that address";
    }
};
console.log(canWeDeliver(85213));
console.log(canWeDeliver(83301));
/* 
    Problem 2 Continued

    Now you're going to rewrite your function.

    If you wrote `canWeDeliver` using a loop of
    some kind, write a new function (`canWeDeliverTwo`)
    below, using the `includes` array method. 
    Look it up on MDN if you're not sure how to use 
    it. 

    If you already used the `includes` method, 
    write a new function using some sort of 
    loop (for loop, higher order array method).
    Name your new function `canWeDeliverTwo`.
*/

// CODE HERE
/**
 * The JavaScript function canWeDeliverTwo(zipCode) uses a parameter called zipCode to check whether delivery is possible to a particular zip code. Here's a step-by-step explanation:

First, const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]; defines a constant array that contains the zip codes where delivery is possible.

Next, the function starts a for loop that will iterate through each zip code in the deliveryAreaZipCodes array. The starting index (i) is 0, and it increments by 1 (i++) until it reaches the last index of the array (i < deliveryAreaZipCodes.length).

Inside the for loop, there's an if statement that checks if the current zipCode provided as an argument to the function matches the current zip code in the deliveryAreaZipCodes array (deliveryAreaZipCodes[i] === zipCode).

If there's a match, the function immediately returns the string "You're in our delivery zone!". This stops the function and no further code is executed.

If the entire for loop completes without a match (meaning the input zip code is not in the deliveryAreaZipCodes array), the function then returns "Sorry, we can't deliver to that address".

In summary, the function canWeDeliverTwo(zipCode) checks whether a specific zip code is within a delivery area, and then delivers an appropriate message based on whether the zip code is found in the delivery area list or not.
 */
const canWeDeliverTwo = (zipCode) => {
    const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206];
    for (let i = 0; i < deliveryAreaZipCodes.length; i++) {
        if (deliveryAreaZipCodes[i] === zipCode) {
            return "You're in our delivery zone!";
        }
    }
    return "Sorry, we can't deliver to that address";
};
console.log(canWeDeliverTwo(85204));
console.log(canWeDeliverTwo(83301));
//////////////////PROBLEM 3////////////////////
/* 
    Below is an array of objects that have some
    information about a couple of deals that are
    available at the restaurant currently. 

    You are going to access the object's properties 
    and change some values. Don't edit the array 
    directly, let's use the `replace` method.

    Read on for more instructions.
*/

const deals = [
    {
        title: '15% Off!', 
        desc: 'Applied to your entire order when you spend $30 or more'
    }, 
    {
        title: 'Free Kids Meal with 2 Regular Entrees', 
        desc: '   This deal lasts until the end of March! '
    }
]

/*
    The owner has decided to take the 15% off
    deal down to 10%.

    Reassign the value of the first deal's title
    to be itself, but use the `replace` method
    to replace the 15 with a 10.
*/

//CODE HERE
/**
 * The line of code deals[0].title = deals[0].title.replace('15', '10'); modifies the 'title' property of the first object in the 'deals' array. Here's a breakdown:

deals[0]: This accesses the first object in the 'deals' array. In JavaScript, arrays are zero-indexed, meaning that the first element is accessed with the index 0.

.title: This part accesses the 'title' property of the selected object. Combining this with deals[0] we get deals[0].title, which represents the 'title' property of the first object in the 'deals' array. For the given array, this would originally return '15% Off!'.

deals[0].title.replace('15', '10'): The replace function is a built-in JavaScript string method that replaces some specified text with some other text. Here, it replaces '15' with '10' in the string '15% Off!'. This results in the string '10% Off!'.

deals[0].title = ...: This takes the result of deals[0].title.replace('15', '10') and reassigns it to deals[0].title. This modifies the original 'title' property of the first object in the 'deals' array and changes it from '15% Off!' to '10% Off!'.

Note that this line of code changes the original 'deals' array. If you wanted to make this change without modifying the original array, then you would have to create a copy of the object or the array first.
 */
// Reassign the value of the first deal's title
deals[0].title = deals[0].title.replace('15', '10');

console.log(deals[0]);
/**
 * deals[0].title.replace('15', '10'); - This line changes the first deal's title. It replaces '15' with '10'. deals[0] accesses the first deal in the deals array, and .title accesses the title of that deal.
 */
/*
    The restaurant is going to continue its
    family deal for another month. 

    Reassign the value of the second deal's desc
    to be itself, but use the `replace` method
    to replace the word March with April.

    You should also make sure that there is no
    whitespace in this string, since it seems
    to be displaying wrong on the live site.
*/

//CODE HERE
/**
 * The line of code deals[1].desc = deals[1].desc.replace('March', 'April').trim(); modifies the 'desc' property of the second object in the 'deals' array. Here's a breakdown:

deals[1]: This accesses the second object in the 'deals' array. In JavaScript, arrays are zero-indexed, meaning that the index 1 corresponds to the second item in the array.

.desc: This accesses the 'desc' property of the selected object. So deals[1].desc refers to the description of the second deal.

deals[1].desc.replace('March', 'April'): The replace() function is a built-in JavaScript string method which changes a specified text with another text. In this context, it replaces the word 'March' with 'April' in the description string of the second deal.

.trim(): The trim() function is another built-in JavaScript string method that removes any leading or trailing white spaces from the string.

deals[1].desc = ...: This will reassign the result from deals[1].desc.replace('March', 'April').trim() back to deals[1].desc. This modifies the original 'desc' property of the second deal in the 'deals' array, replacing 'March' with 'April' and removing leading or trailing white spaces.

In summary, this line of code updates the description of the second deal, replacing 'March' with 'April' and ensuring there are no extra spaces at the start or end.
 */
// Reassign the value of the second deal's desc
deals[1].desc = deals[1].desc.replace('March', 'April').trim();

console.log(deals[1]);
/**
 * deals[1].desc.replace('March', 'April').trim(); - This line changes the description of the second deal. It replaces 'March' with 'April' and removes any leading or trailing white space with the trim() method. deals[1] accesses the second deal of the deals array, and .desc accesses the description of that deal.
 */