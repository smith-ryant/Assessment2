/////////////////////////////////////////////////
///////////////////ORDERS.JS/////////////////////
/////////////////////////////////////////////////
/*
    In this file, you'll be writing a class
    to make tickets from order information.
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create a new class called `Ticket`.
    Make sure to call your constructor, and 
    require these 3 parameters: items, orderTime, 
    customerId. Additionally, set up a property
    called `status` that always has an initial
    value of 'queued'.

    Create a method on the class called `updateStatus`.
    The method should have one parameter, `newStatus`,
    which will be a string.

    Inside the method, set the value of `this.status`
    to be the new status that was sent in. Then
    console.log something like: 
    'The order for customer [CUSTOMERID] is
    now [STATUS].'
    Where CUSTOMERID and STATUS reference the values
    stored on the object.
*/

//CODE HERE
/**
 * This code creates a Ticket class used for order management in a restaurant.

Here's a breakdown of how each part of this code works:

class Ticket: This defines a class named Ticket. Classes are blueprints for creating objects. They define what properties and methods an object should have.

constructor(items, orderTime, customerId): The constructor method initializes new objects created from the Ticket class. When a new Ticket object is created, the constructor method is automatically called with the arguments that are passed in. In this case, the Ticket objects are initialized with items, orderTime, and customerId properties.

this.items = items; this.orderTime = orderTime; this.customerId = customerId;: These lines initialize the properties of the object. this refers to the object being created, items, orderTime, and customerId are the parameters used to pass values for these properties during the object creation.

this.status = 'queued';: This line sets a property status of the Ticket object and defaults it to 'queued'. This property will represent the status of the order.

updateStatus(newStatus): This is a method within the Ticket class that is meant to update the status property of the Ticket object. It takes one parameter newStatus which is the updated status of the ticket.

this.status = newStatus;: This line updates the status property of the Ticket object.

console.log(The order for customer ${this.customerId} is now ${this.status}.);: This line logs a string to the console that displays the customer ID and the recently updated status of the ticket. The ${variable} syntax is used to insert the values of variables into the string.

When you create an instance of the Ticket class and call updateStatus method on it, it will update the status and print a message with the customer's id and their order's current status.
 */
class Ticket {
  constructor(items, orderTime, customerId) {
      this.items = items;
      this.orderTime = orderTime;
      this.customerId = customerId;
      this.status = 'queued';
  }

  updateStatus(newStatus) {
      this.status = newStatus;
      console.log(`The order for customer ${this.customerId} is now ${this.status}.`);
  }
}
/*
    Create a new instance of your class.
    Save it to a variable called `firstTicket`.

    You can use this sample data or make
    up your own:
    food ordered: pizza, bread, and soda
    ordered at: 7:03 PM
    customer: 575
*/

//CODE HERE
/**
 * This line of code creates a new instance of the Ticket class - effectively creating a new "ticket".

let firstTicket: Creates a new variable named firstTicket to hold our new Ticket object.

new Ticket(['pizza', 'bread', 'soda'], '7:03 PM', 575);: Calls the Ticket class constructor, creating a new Ticket object.

['pizza', 'bread', 'soda']: This is the array of items for the order. It's passed as the first argument to the Ticket constructor.

'7:03 PM': This is the orderTime. It's passed as the second argument to the Ticket constructor.

575: This represents the customerId. It's passed as the third argument to the Ticket constructor.

The resulting firstTicket object has all these properties: items, orderTime, customerId, and a status of 'queued' by default.

At any point after this, you can use firstTicket.updateStatus(status) to change the status of this ticket where status is the new status you want to set.
 */
let firstTicket = new Ticket(['pizza', 'bread', 'soda'], '7:03 PM', 575);

/*
    Call the `updateStatus` method on
    `firstTicket` passing in the string
    'cooking'
*/

//CODE HERE
/**
 * This line of code is calling the updateStatus method on the firstTicket object.

firstTicket: This is the object that we created earlier from the Ticket class.

.updateStatus('cooking'): This is calling the updateStatus method, which is likely a method within the Ticket class definition, on the firstTicket object.

'cooking': This is the argument that we're passing to the updateStatus method. In this case, we're passing in the string 'cooking'. This argument may be used in the updateStatus method to update the status of the firstTicket object from its initial default status to 'cooking'.
So, the overall effect of this line of code is to update the status of firstTicket to indicate that cooking is in progress.
 */
firstTicket.updateStatus('cooking');
////////////////////////////////////
//EXTRA CREDIT BELOW!!!!!


///////////////////////////////////////
//////////TECH STACK RESEARCH//////////
///////////////////////////////////////
/**
WHAT IS A TECH STACK
A tech stack, also known as a technology stack, is a combination of software applications, frameworks, and programming languages that work together to create a web or mobile application. These components collectively comprise the front-end, the user-facing side, and the back-end, the server-side. A classic example of a tech stack is the LAMP stack which consists of Linux (operating system), Apache (web server), MySQL (database), and PHP (programming language). Other popular tech stacks include MEAN (MongoDB, Express.js, AngularJS, Node.js), MERN (MongoDB, Express.js, React, Node.js), and Django stack (Python, Django, Mysql Postgres or SQLite). The choice of a tech stack is a crucial aspect of a project as it impacts the application's functionality, scalability, and performance.

WHY DO STACKS MATTER
Tech stacks are crucial to the development and operation of applications as they define how the application is built, how it functions, and how it can be maintained and scaled in the future. The choice of technologies impacts the product's performance, scalability, security, and development speed. A well-chosen tech stack can facilitate a smooth development process, easy maintenance, and efficient scaling as the product grows. Moreover, it can determine how easy it is to hire new developers and how cost-effective the development process will be, as different technologies come with varying degrees of resource availability and cost. Therefore, a thoughtful selection of tech stack is critical to the overall success of an application.

NETFLIX
Netflix is a globally renowned streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more, accessed by members through internet-connected devices. Founded in 1997 by Reed Hastings and Marc Randolph as a DVD-by-mail service, Netflix has evolved into a dominant player in the digital streaming industry, pioneering the subscription-based, ad-free, on-demand viewing of a vast library of films and television series including those produced in-house. As of 2022, Netflix has over 200 million paid subscriptions worldwide, from various countries and territories. Netflix's transformative role in entertainment extends to its pioneering algorithms for content recommendations based on a user's viewing history.

NETFLIX'S TECH STACK
Netflix's tech stack is a complex and multidimensional infrastructure designed to support its global streaming service. For front-end development, Javascript and ReactJS are used, leveraging Node.js for server-side rendering. On the back-end, Netflix extensively uses Java, and to handle data, they employ a mix of databases including MySQL, Apache Cassandra, and Amazon DynamoDB. Their microservices architecture runs on Amazon Web Services (AWS), availing of multiple AWS services including EC2, S3, and AWS Lambda. For quick data processing and analytics, Netflix uses Apache Kafka, Apache Flink, and Spark. All these technologies, along with Netflix's proprietary software like the Simian Army for testing and Spinnaker for continuous delivery, create a robust, scalable, and highly functional tech stack.

SPOTIFY
Spotify is a leading digital music streaming service that provides millions of users access to songs from artists all around the world. Founded in 2006 in Sweden, Spotify allows users to browse by parameters such as artist, album, or genre, and can create and share playlists. Spotify has both a free ad-supported tier and a premium tier, which offers ad-free listening and other additional features. It works across several devices including computers, smartphones, smart TVs, and speakers. As of 2022, Spotify boasts over 380 million users, including 172 million subscribers for the premium service, making it one of the largest and most influential music streaming platforms globally.

SPOTIFY'S TECH STACK
Spotify's tech stack is a combination of carefully chosen languages, tools, and frameworks facilitating their music streaming service. They use Python, Java, and JavaScript as primary coding languages. Backend services primarily rely on Java, while Python stands important for data analysis. JavaScript, along with React, is used for front-end development. Spotify's infrastructure is heavily dependent on Google Cloud Storage for storing files, and Bigtable is used as a NoSQL database system. For real-time data processing, they use Apache Beam, Pub/Sub for messaging, and Scio as a Scala API for Apache Beam. Docker is used extensively for containerization, and its orchestration is managed by Kubernetes. Their tech stack is completed with other tools for logging, monitoring, visualization, and site reliability, emphasizing their commitment to a reliable, efficient service.

SALESFORCE
Salesforce, founded in 1999, is a cloud-based software company that provides customer relationship management (CRM) service and enterprise applications focused on customer service, marketing automation, analytics, and application development. Salesforce's services allow businesses to use cloud technology to better connect with customers, partners, and potential clients by bringing companies and customers together. It's customizable and can cater to various business needs, allowing users to track customer interactions, sales, and more. As of 2022, Salesforce has become an integral part of many businesses across various industries, offering various cloud-based applications for businesses to manage sales, customer service, marketing seamlessly, and more.

SALESFORCE'S TECH STACK
Salesforce's tech stack is built around its proprietary technology, Apex, a Java-like programming language for building applications on the Salesforce.com platform. The front-end is orchestrated by Visualforce to design user interfaces in conjunction with Apex. Salesforce Lightning, a component-based framework, is used for the application development in the Salesforce platform. The database system used is an enterprise-level, robust Oracle Database. They also use proprietary search technology SOSL (Salesforce Object Search Language) for text searches and SOQL (Salesforce Object Query Language) for database queries. The general application build process is supported by technologies like Git and Jenkins for version control and continuous integration, respectively. Salesforce also makes use of Aura, a UI framework for developing dynamic web apps for mobile and desktop devices. Other tools in their suite include Heroku for app deployment, AWS for storage, and Ruby for scripting and automation.
*/