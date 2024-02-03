////////////////////////////////////////////////////
///////////////////EMPLOYEES.JS/////////////////////
////////////////////////////////////////////////////
/*
    In this file, you'll be writing classes to 
    store information about restaurant employees.
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create a new class called `Employee`.
    Make sure to call your constructor, and 
    require these 2 parameters: name, shifts.

    Create a method on the class called 
    `getSchedule` that prints a string:
    [NAME] works on [SHIFTS]
    Where NAME and SHIFTS reference the values
    stored on the object.
*/

//CODE HERE
/**
 * This code defines a class named Employee.

In JavaScript, a class is a type of function, but instead of using the keyword function, you use the keyword class, and the properties are assigned inside a constructor() method.

Specifically for this Employee class, it has two properties: name and shifts, which are set through parameters passed to its constructor method. The constructor method is a special method for creating and initializing an object created within a class.

There is one method getSchedule(). This method returns a string that tells when an employee (with this.name) works (this.shifts).
 */
class Employee {
    constructor(name, shifts) {
        this.name = name;
        this.shifts = shifts;
    }

    getSchedule() {
        return `${this.name} works on ${this.shifts}`;
    }
}

/*
    Create a new instance of your class.
    Save it to a variable called `empOne`.

    You can use this sample data or make
    up your own:
    name: Jess
    shifts: weekday mornings, weekday afternoons
*/

//CODE HERE
/**
 * This piece of code is creating an instance of the Employee class.

The new keyword is used in JavaScript to create a new instance of a class or a constructor.

In this case, new Employee('Jess', 'weekday mornings, weekday afternoons') is creating a new Employee object, and passing two arguments to the constructor method: 'Jess' and 'weekday mornings, weekday afternoons'.

The constructor inside the Employee class takes these arguments and uses them to set the name and shifts properties of the new object.

Finally let empOne = ... is storing this new object in a variable called empOne. So, empOne is an object, an instance of the Employee, with the name of 'Jess' and shifts of 'weekday mornings, weekday afternoons'.
 */
let empOne = new Employee('Jess', 'weekday mornings, weekday afternoons');
/*
    Call the `getSchedule` method on the
    `empOne` object.
*/

//CODE HERE
/**
 * This line of code is logging the result of the method getSchedule() called on the empOne object.

The console.log() function in JavaScript is used to print any kind of variables defined before it on the console (the terminal).

It can print any type of variables like strings, numbers, arrays, objects, etc. Here, it's being used to print the return result of empOne.getSchedule().

The empOne.getSchedule() part specifically is calling the getSchedule() method on the object empOne.

Because empOne is an instance of the Employee class, it has access to this method, which returns a string formatted with the name and shifts properties of empOne.

So, for instance, if empOne has a name of 'Jess' and shifts of 'weekday mornings, weekday afternoons', empOne.getSchedule() will return "Jess works on weekday mornings, weekday afternoons", which then gets logged to the console.
 */
console.log(empOne.getSchedule());

/*
    Make a copy of the empOne object
    using the spread operator.
    Save it to a variable called `empTwo`.

    Change the name of `empTwo` to 'Nick'.

    Hint: you can do this inline with the 
    spread operator or reassign it using 
    dot or bracket notation.
*/

//CODE HERE
/**
 * The code is creating a new object empTwo that is a shallow copy of empOne, and then changing the name property of empTwo.

javascript
Copy code
Insert code
let empTwo = {...empOne};
This line creates a new object empTwo by copying the properties of empOne object using the spread operator {...empOne}. This is a standard way to make a shallow copy of an object in JavaScript.

What shallow copy means here is that if properties of empOne are primitive types (like Number, String, Boolean, null, undefined), changes in empTwo won’t affect empOne and vice versa.

javascript
Copy code
Insert code
empTwo.name = 'Nick';
This line is reassigning the value of the name property of the empTwo object to 'Nick'. Remember, this change won't affect the name property of the empOne object.
 */
let empTwo = {...empOne};
empTwo.name = 'Nick';

//////////////////PROBLEM 2////////////////////
/*  
    Write a class called Manager that *extends* 
    the Employee class. In the constructor, 
    make sure you require all of the parameters 
    from the Employee class as well as 1 
    new one: employees, which will be an array of 
    employees that report to this manager. 
    (Hint: don't forget to call the super function)

    Create a method called `getEmployees` that
    console.logs a string:
    [NAME] manages [EMPLOYEES]
    Where NAME and EMPLOYEES reference the values
    stored on the object.

    Create a second method called `addEmployee`
    that takes in one argument, `emp`, which
    should be a string of an employee name.
    The function should push the name into 
    the employees array. 
*/

//CODE HERE
/**
 * This block of code declares a JavaScript class named Manager which extends the Employee class (assuming it is already declared somewhere in your code base).

extends keyword is used to create a subclass or child class
Here's a breakdown of how this code works:

constructor(name, shifts, employees): The constructor method is a special method for creating and initializing an object created with a class. Here it takes three parameters.
name: Name of the Manager.
shifts: Shift timings of the Manager.
employees: An array of direct reportees employees under the manager.
super(name, shifts);: 'super' keyword is used to call the constructor of the parent class. In this context, it's passing name and shifts to the parent Employee class constructor for initialization.

this.employees = employees;: this keyword refers to the instance of the class (or the object). Here, this line sets the employees property of the Manager object to the employees parameter passed into the constructor.

getEmployees(): A method that logs the string containing the name of the manager and the employee names under his management to the console.

addEmployee(emp): This adds a new employee to the manager's employee list. It accepts one parameter emp, which is the name of the employee to be added.

The push() function, which is an array function in JavaScript, is used to insert the new employee into the employees array.
 */
class Manager extends Employee {
    constructor(name, shifts, employees) {
      super(name, shifts);
      this.employees = employees;
    }
  
    getEmployees() {
      console.log(this.name + " manages " + this.employees);
    }
  
    addEmployee(emp) {
      this.employees.push(emp);
    }
  }

/*
    Create a new instance of your class.
    Save it to a variable called `manager`.

    You can use this sample data or make
    up your own:
    name: Winston
    shifts: weekday mornings, weekday afternoons
    employees: Cece and Schmidt
*/

//CODE HERE
/**
 * The code you provided creates a new Manager object. here is a detailed explanation of each part:

let manager = new Manager(...);: Here, let is a keyword in JavaScript that is used to declare a variable named manager. new is another keyword used to create an instance of a JavaScript class. Manager is the class being instantiated.

'Winston': This is the first argument passed to the Manager constructor, which represents the manager's name.

'weekday mornings, weekday afternoons': This is the second argument passed to the Manager constructor. It represents the shifts that the manager is assigned to.

['Cece', 'Schmidt']: This is the third argument passed to the Manager constructor. It is an array containing names of employees that the manager is initially in charge of.

Thus, this code creates a new Manager object with the name 'Winston', shifts 'weekday mornings, weekday afternoons', and initially manages two employees, 'Cece' and 'Schmidt'. The new Manager object is stored in the variable called manager.
 */
let manager = new Manager(
    'Winston', 
    'weekday mornings, weekday afternoons', 
    ['Cece', 'Schmidt']
);
/*
    Call the `getEmployees` method on the
    `manager` object.  
*/

//CODE HERE

manager.getEmployees();
/*
    Call the `addEmployee` method on the 
    `manager` object passing in the string 
    'Coach' or whatever name you'd like.
*/

//CODE HERE 

manager.addEmployee('Coach');
/*
    Call the `getEmployees` method on the
    `manager` object again to confirm 
    that an employee was added.
*/

//CODE HERE

manager.getEmployees();

/**
 * The general theme of the highlighted code is the use and manipulation of JavaScript classes and objects. Specifically, it involves creating and modifying an instance of the Manager class, which extends the Employee class. The Manager class methods allow you to list the employees being managed, and add new employees to that list. The code demonstrates creating a new Manager, adding an employee to their supervision, and confirming the addition by listing the manager's employees.
 */