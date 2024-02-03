/*console.log('Welcome To JS');
console.log('Welcome To C++');
console.log('Welcome To C');
console.log('Welcome To JS, My Fav Lang');


window.alert("Welcome To JS")


Commenting in JS

This code is for refrence purposes






Variables --> Variable is container for storing data. 

a variable behaves as if it was the value that it contains.

Two Steps 

1. declaration  (var, let, const)

let a; 

2. assignment (= assignment)

a = 12;

let a = 12 --> declaration +  assignment

let age = 10;

Datatypes

Numbers

String 

Boolean 



let firstName = "Java Student";

let age = 21;

let student = true;

age = age + 1;


console.log("Hello", firstName);
console.log("you are", age, "years old");
console.log("Enrolled: ", student);



document.getElementById("p1").innerHTML = "Hello Students " + firstName; 

document.getElementById("p2").innerHTML = "Hello Students, " + "your age, " + age;

document.getElementById("p3").innerHTML = "Hello Students, " + "your are enrolled:-  " + student;




let students = 20;

students = students + 2;
students = students - 2;
students = students * 2;
students = students / 2;

students += 2 --> augmented assignment operator

students -= 2;
students *= 2;
students /= 2;

console.log(students);

*/


// How to accept user input

// Window prompt alert

// let username = window.prompt("What is your name");

// console.log(username);

// let username;

// document.getElementById("myButton").onclick = 

//  function() {

//     username = document.getElementById("myText").value;

//     console.log(username)

//     document.getElementById("myLabel").innerHTML = "Hello " + username;

// }

// let age = window.prompt("How old are you!");

// console.log(typeof age);

// age = Number(age);

// console.log(typeof age);

// age += 3;



// console.log("Happy birthday", age, "years old");

// let x; 
// let y;
// let z;


// x = Number("food");
// y = String(3.14);
// z = Boolean("briyani");

// console.log(x, typeof x);

// console.log(y, typeof y);

// console.log(z, typeof z);

// const PI = 3.14159;

// let radius;

// let circumference;

// radius = window.prompt("Enter the radius of a circle:- ");

// radius = Number(radius);


// //PI =455.6;

// circumference = 2 * PI * radius;

// console.log("The Circumference is:- ", circumference);

// let x = 2;

// let y = 5;

// let z = 9;

// let max;

// let min;

//x = Math.round(x);

// x = Math.floor(x); // up

// x = Math.ceil(x); // down

//x = Math.pow(5, 3)

//x = Math.sqrt(x)

// max = Math.max(x,y,z);

// min = Math.min(x,y,z);

// console.log(max);

// console.log(min);

// let a;

// let b;

// let c;

// a = window.prompt("Enter side A")
// a = Number(a);

// b = window.prompt("Enter side B")
// b = Number(b);


// c = Math.sqrt(Math.pow(a,2) + Math.pow(b, 2));

// console.log("Side c is:- ", c);

// document.getElementById("submitButton").onclick = function() {

//     a = document.getElementById("aTextBox").value;
//     a = Number(a);
    
//     b = document.getElementById("bTextBox").value;
//     b = Number(b);
    
    
//     c = Math.sqrt(Math.pow(a,2) + Math.pow(b, 2));

//     document.getElementById("cLabel").innerHTML = "Side C: " + c;

// }



// let userName = "S Students";

// let phoneNumber = "12345-123-45";


// console.log(userName.length);

// let firstLetter = userName.charAt(0);

// console.log(firstLetter);

// console.log(userName.indexOf("u"));

// console.log(userName.lastIndexOf("u"));

// console.log(userName);

// userName = userName.trim();

// userName = userName.toUpperCase();

// userName = userName.toLowerCase();

// phoneNumber = phoneNumber.replaceAll("-", "/");

// console.log(phoneNumber);




// let fullName = "Java Student";

// let firstName;

// let lastName;

// firstName = fullName.slice(0,10);

// lastName = fullName.slice(10);

// lastName = fullName.slice(fullName.indexOf(" ") + 1);

// firstName = fullName.slice(0, fullName.indexOf(" "));

// console.log(firstName);

// console.log(lastName);

// let userName = "java";

// let letter = userName.charAt(0).toUpperCase();

// console.log(letter);

// let age =29;


// if(age>=65) {

//     console.log("You are a senior citizen");
 
//  } else if(age>=18) {

//    console.log("you are an adult!");

// } else if(age<=0) {

//    console.log("You haven't been born yet");

// }  else {

//     console.log("you are a child!");

// }


// let online = false;

// if(online) {

//   console.log("You are online");

// } else {

//     console.log("You are offline");

// }

// document.getElementById("myButton").onclick = function() {

//     const myCheckBox = document.getElementById("myCheckBox");

//     const visaBtn = document.getElementById("visaBtn");

//     const mastercardBtn = document.getElementById("mastercardBtn");

//     const rupayBtn = document.getElementById("rupayBtn");

//    if(myCheckBox.checked) {

//         console.log("You are subscribed");

//    } else {

//     console.log("You are  NOT subscribed");

//    } 

//    if(visaBtn.checked) {

//     console.log("You are Paying with VISA");
     
//    } else if(mastercardBtn.checked) {

//     console.log("You are Paying with Mastercard");
     
//    } else if(rupayBtn.checked) {

//     console.log("You are Paying with Rupay");
     
//    } else {
 
//     console.log("You must select a payment type!");
    
//    }

// }

// let grade = 59;

// switch(true) {

//    case grade>=90:

//          console.log("You did great");

//          break;
  
//     case grade>=80:

//           console.log("You did Good");

//           break;

//      case grade>=70:

//           console.log("You did Okay!");

//           break;

//      case grade>=60:

//           console.log("You passed... barely!!");

//           break;

//       case grade < 60:

//           console.log("You failed");

//           break;

//       default:

//           console.log(grade, "is not a letter grade!")
      

// }
// let temp1 = 15;

// if(temp1 > 0) {
 
//       console.log("its warm outside");

// } else {

//      console.log("its cold outside");

// }


// let temp2 = 15;

// let sunny = false;

// if(!(sunny)) {

//      console.log("It sunny outside");

// } else {
 
//      console.log("It cloudy outside");

// }

//    
// if(!(temp2 > 0)) {
 
//       console.log("its cold outside");

// } else {

//      console.log("its warm outside");

// }

//  we are checking to see, our temp is not greater than 0



// if(temp <= 0 || temp >= 30) {

//    console.log("The weather is bad");

// } else {

//      console.log("The weather is good");

// }


// let i = 10;   // initialization , i = 1, i = 2, i = 3, i = 4, i = 5

// while(i>0) {  // condition 

//    console.log(i);  // execute the code 

//    i = i  - 1;  // iteration
     
// }
//    1          2    4
// for(let i = 1; i<=10; i++) { // i = 4, i =3, i =2, i=1, i = 0

// //3rd 

//    if(i == 9) {

//       continue;

//    }
   
//    document.write(i, "<br>");

// }

/*
 
  task1:- 

  1
  2
  1
  2
  1
  2
  1
  2
  1

  task2

  i
  i
  i
  i
  i
  2
  2
  2
  2
  2
  task3
  1
  1
  1
  1
  1
  1
  1
  1
  1
  1
  task4 
  1
  1
  1
  1
  222222
 */

// Nested Loop :- a loop inside of another loop 



// for(let i = 1; i<=3; i+=1) {// i =1,2,3,4 

//    for(let j = 1; j<=i; j+=1) { //j=1,2,3,4

//       document.write(1, " ", 2, " ");

//   }

//    document.write("<br>");

// }

// let symbol = window.prompt("Symbol to use");

// let rows = window.prompt("Enter the rows");

// let colums = window.prompt("Enter the colums");

// for(let i = 1; i<=rows; i+=1) {// i =1,2,3,4 

//    for(let j= 1; j<=colums; j+=1) { //j=1,2,3,4

//      document.getElementById("myRectangle").innerHTML += symbol;

//   }

//    document.getElementById("myRectangle").innerHTML += "<br>"

// }


// Functions :- Define code once, and use it for many times, 
// To perform some code, call the function name
// let userName = "Aslam";
// let age = 20;
// happyBirthday();
// happyBirthday();
// happyBirthday();
// function happyBirthday() {
// console.log("Happy birthday to you");
// console.log("Happy birthday to you");
// console.log("Happy birthday dear you ", userName);
// console.log("Happy birthday to you");
// console.log("You are", age, "years old");
// }

// let userName = "Ganesh";

// let items = 3;

// let total = 75;

// console.log("Hello", userName);

// console.log("You Have", items, "items in your cart");

// console.log("Your total is $", total);

// console.log(`Hello ${userName} `);

// console.log(`You have ${items} items in your cart`);

// console.log(`Your total is $${total}`);

// let text = `Hello ${userName}

// You have ${items} items in your cart

// Your total is $${total}`;

// console.log(text);

// let fruits = ["apple", "Grape", "Banana"];

// fruits[0] = "coconut";

// fruits.push("lemon"); // it will add an element

// fruits.pop(); // removes last element

// fruits.unshift("mango"); // add element to beginning

// fruits.shift(); // it will remove the 1st element

// let length = fruits.length;

// let index = fruits.indexOf("kiwi")

// console.log(length);

// console.log(index);

// console.log(fruits);

let prices = [10, 20, 30, 40];

//                   4
// for(let i = 0; i < prices.length; i+=1) {// i=4

//    console.log(prices[i]);

//    i+=1; // 3

// }

//              3
// for(let i = prices.length-1; i>=0; i-=1) {// i=-1

//   console.log(prices[i]);

// }


// for upstatement


// for(let price of prices) {

//   console.log(price);

// }

// let fruits = ["banana", "apple", "orange", "mango"];

// // fruits = fruits.sort();

// fruits = fruits.sort().reverse();

// for(let fruit of fruits) {

//    console.log(fruit);

// }

// 2D Array = An array which is made up of an arrays


// let fruits =     ["bananas", "apples", "oranges"];
// let vegetables = ["carrots", "onions", "potatoes"];
// let meat =       ["eggs", "chicken", "fish"];


// let groceryList = [fruits, vegetables, meat];

// groceryList[0][1] = "mangoes";

// for(let list of groceryList) {

//    for(let food of list) {

//      console.log(food);

//    }

// let numbers = [1,2,3,4,5,6,7,8,9];

// let maximum = Math.max(...numbers);

// console.log(maximum);

// const array1 = [1, 2, 3];

// const array2 = [4, 5, 6];

// const mergedArray = [
//       ...array1, 
//       ...array2
// ];

// console.log(mergedArray);


// function sum(...numbers) {

//    console.log(numbers);

// }


// sum(1,2,3,4,5,6,7);


// let total = sum(2,3);

// displayConsole(total);

// displayDOM(total);

// function sum(x, y) {

//     let result = x + y;

//     return result;

// }


// sum(2,3, displayConsole);

// function sum(x, y, callBack) {

//     let result = x + y;
 
//     callBack(result);
    
// }



// function displayConsole(output) {

//    console.log("The result is:-", output);

// }

// function displayDOM(output) {

//    document.getElementById("myLabel").innerHTML = output;

// }

// let students = ["ganesh", "aslam", "john"];

// students.forEach(capitalize);

// students.forEach(print);

// function capitalize(element, index, array) {

//    array[index] = element[0].toUpperCase() + element.substring(1); 

// }

// function print(element) {

//    console.log(element);

// }



// let numbers = [1, 2, 3, 4, 5];

// let squares = numbers.map(sqaure);
// let cubes = numbers.map(cube);

// squares.forEach(print);
// cubes.forEach(print);


// function sqaure(element) {

//   return Math.pow(element, 2);

// }

// function cube(element) {

//    return Math.pow(element, 3);

// }

// function print(element) {

//  console.log(element);

// }

// greeting();

// function greeting() {

//   console.log("Hello Students");

// }

// const greeting = function() {

//   console.log("Hello Students");

// }

// let count = 0;

// document.getElementById("increaseBtn").onclick = function() {

//      count+=1;

//     document.getElementById("myLabel").innerHTML = count;

// }

// document.getElementById("decreaseBtn").onclick = function()  {

//   count-=1;

//   document.getElementById("myLabel").innerHTML = count;

// }

// function increaseCount() {

//   count+=1;

//   document.getElementById("myLabel").innerHTML = count;

// }

// function decreaseCount() {

  // count-=1;

  // document.getElementById("myLabel").innerHTML = count;

// }

// greeting();



// const greeting1 = function(userName) {

//      console.log(`hello ${userName}`);
   
// }

// const greeting2 = (userName) => console.log(`hello ${userName}`);


// greeting2("StudentsList2");

// const percent = function(x, y) {

//   return x / y * 100;

// }

// const percent = (x, y) => x / y * 100;

// console.log(`${percent(90, 100)}%`);

// let userName = "Student1"

// let userInbox = 5;

// login();

// function login() {

//   displayUserName();
//   displayInbox();

//   function displayUserName() {

//     console.log(`Welcome ${userName}`);
 
//  }

//  function displayInbox() {

//   console.log(`You have ${userInbox} new messages`);

// }

// }


// const store= new Map([ 

//   ["NonFictionbook", 50],
//   ["Pen", 20],
//   ["Marker", 15],
//   ["Pencil", 8]

// ]);

// let shoppingCart = 0;

// shoppingCart += store.get("Pen");
// shoppingCart += store.get("Pencil");
// shoppingCart += store.get("NonFictionbook");

// store.set("LaptopStand", 250);
// store.delete("LaptopStand");


// console.log(store.has("Pen"));

// console.log(store.size);

// console.log(shoppingCart);

// store.forEach((value, key) => console.log(`${key} ₹${value}`));


// const car1 = {

//   model:"Nexon",
//   color:"red",
//   year:2023,

//   drive : function() {
 
//     console.log(`You drive the ${this.model}`);

//   },
  
//   brake : function() {
 
//     console.log("You step on the brakes");

//   }

// }


// const car2 = {

//   model:"Altroz",
//   color:"White",
//   year:2024,

//   drive : function() {
 
//     console.log(`You drive the ${this.model}`);

//   },
  
//   brake : function() {
 
//     console.log("You step on the brakes");

//   }

// }


// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// car1.brake();
// car1.drive();


// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);

// car2.brake();
// car2.drive();

// class Player {

//   score = 0;

//   pause() {

//     console.log("You Paused the Game");

//   }

//   exit() {

//     console.log("You exited the game");

//   }

// }

// const player1 = new Player();
// const player2 = new Player();
// const player3 = new Player();
// const player4 = new Player();


// player1.score += 1;

// console.log(player1.score);

// player1.pause();
// player1.exit();





// player2.score += 5;

// console.log(player2.score);

// player2.pause();
// player2.exit();



// class Student {

//    constructor(name,age,grade) {

//       this.name = name;
//       this.age = age;
//       this.grade = grade;

//    }

//    study() {
 
//      console.log(`${this.name} is studying`);

//    }

// }

// const student1 = new Student("Ganesh", 20, 3.5);

// const student2 = new Student("Aslam", 21, 4.5);

// const student3 = new Student("John", 22, 4.7);



// console.log(student1.name);
// console.log(student1.grade);
// console.log(student1.age);

// student1.study();

// console.log(student2.name);
// console.log(student2.grade);
// console.log(student2.age);

// student2.study();

// console.log(student3.name);
// console.log(student3.grade);
// console.log(student3.age);

// student3.study();



// class Animals {

//   alive = true;
  
//   eat() {

//     console.log(`This ${this.name} is eating`);
 
//     }
 
//     sleep() {
 
//      console.log(`This ${this.name} is sleeping`);
 
//     }

// }



// class Rabbit extends Animals{

//    name = 'rabbit'

//    run() {

//     console.log(`This ${this.name} is running`);

//    }

// }


// class Fish extends Animals {

//   name = 'fish'

//   swim() {

//     console.log(`This ${this.name} is swiming`);

//   }

// }

// class Parrot extends Animals {

//   name = 'parrot'

//   fly() {

//     console.log(`This ${this.name} is flying`);

//   }

// }




// const rabbit = new Rabbit();


// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.run();
// rabbit.sleep();

// const fish = new Fish();

// console.log(fish.alive);
// fish.eat();
// fish.swim();
// fish.sleep();


// const parrot = new Parrot();
// console.log(parrot.alive);
// parrot.eat();
// parrot.fly();
// parrot.sleep();



// class Car {

//     constructor(model, year, color) {

//         this.model = model;
//         this.year = year;
//         this.color = color;

//     }

//     drive() {

//       console.log(`You drive the ${this.model}`);

//     }

// }


// const car1 = new Car("Nexon", 2023, "red");

// const car2 = new Car("Seltos", 2024, "blue");

// const car3 = new Car("Carnival", 2022, "black");


// changeColor(car1, "Silver");
// displayInfo(car1);

// changeColor(car2, "Gold");
// displayInfo(car2);

// changeColor(car3, "White");
// displayInfo(car3);

// function displayInfo(car) {

//   console.log(car.model);
//   console.log(car.year);
//   console.log(car.color);

// }

// function changeColor(car, color) {

//   car.color = color;

// }


// class Car {

//   constructor(model, year, color) {

//       this.model = model;
//       this.year = year;
//       this.color = color;

//   }

//   drive() {

//     console.log(`You drive the ${this.model}`);

//   }

// }

// const car1 = new Car("Nexon", 2023, "red");

// const car2 = new Car("Seltos", 2024, "blue");

// const car3 = new Car("Carnival", 2022, "black");

// const cars = [car1, car2, car3];

// console.log(cars[0].color);
// console.log(cars[0].model);
// console.log(cars[1].model);
// console.log(cars[2].model);
// console.log(cars[0].year);

// cars[0].drive();
// cars[1].drive();
// cars[2].drive();


// const promise = new Promise(

//   (resolve, reject) => {

//     let fileLoaded = false;

//     if(fileLoaded) {

//       resolve("File Loaded Successfully");

//     } else {
  
//        reject("File Not Loaded");

//     }

//   }
// );

// promise.then(
//   value => {
//     console.log(value);
//   })

//   .catch(error => console.log(error));



// const element = document.getElementById("myButton");

// const element = document.body;

// element.onload = doSomeWork;

// element.onclick = doSomeWork;

// const element = document.getElementById("myText");

// element.onchange = doSomeWork; 

// const element = document.getElementById("myDiv");

// element.onmouseover = doSomeWork;

// element.onmouseout = doSomeMoreWork;

// element.onmousedown = 

// element.onmouseup = 





// function doSomeWork() {

//   // alert("You did some work");
//   element.style.backgroundColor = "red";

// }


// function doSomeMoreWork() {

//   element.style.backgroundColor = "tomato";

// }


// const innerDiv = document.getElementById("innerDiv");

// innerDiv.addEventListener("mouseover", changeRed);

// innerDiv.addEventListener("mouseout", changeGreen);

// function changeRed() {

//    innerDiv.style.backgroundColor = "red";

// }

// function changeGreen() {

//   innerDiv.style.backgroundColor = "green";

// }

// document.cookie = "firstName=Ganesh; expires=Sun, 1 February 2024 12:00:00 UTC; path=/;";

// document.cookie = "firstName=Ganesh; expires=Sun, 1 February 2024 12:00:00 UTC; path=/;";

// document.cookie = "firstName=Ganesh; expires=Sun, 1 February 2024 12:00:00 UTC; path=/;";

// console.log(document.cookie);

























































































































































