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
for(let i = 1; i<=10; i++) { // i = 4, i =3, i =2, i=1, i = 0

//3rd 

   if(i == 9) {

      continue;

   }
   
   document.write(i, "<br>");

}

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













