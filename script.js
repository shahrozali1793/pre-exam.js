//variable
var a = "shahroz"
var b = 5
console.log(a+b);


var eq1 = 500;
var eq2 = 4;
console.log(eq1>eq2);


var total = 2+2;
console.log("total is =", total);


var c = "shahroz"
var d = 8
console.log(c+d);
console.log(b+d);
console.log(a+c);

console.log(typeof b+d);

var data = 3==2
console.log(data)
//______________________________________________________________________________

// show result outer screen
document.write(b+eq2)
//_______________________________________________________________________________

//AND OPERATOR // OR OPERTAOR

// var userEnteredValue =+ prompt("Enter a number")
// var a = 4<5 && 6>7(
// console.log("result is" , a)

// var userEnteredValue1 =+ prompt("enter a number")
// var b =  4<5 || 6>7
// console.log("result is" , b)



// var userEnteredValue =+ prompt("Enter a number");
// // var userEnteredValueConverted2 =  Number(userEnteredValue)
// // console.log("userEntesdfredValue", typeof userEnteredValue, userEnteredValue);
// var a = 2 < 5 && 10 > 3;

// // console.log("andResult", a)
// // 2
// var userEnteredValue1 =+ prompt("Enter a number1");
// var b = userEnteredValue1 + userEnteredValue < 5 || (2 > 3 && a);

// console.log("oRResult", b)
//_______________________________________________________________________________

let element = document.getElementById("first")
let element1 = document.getElementsByClassName("name")

console.log(element1)
// ______________________________________________________________________________

//PARSEINT & PARSEFLOAT
var user = 5;
var user1 = 5.34543554;
var user2 = parseInt(user+user1)
console.log(user2);


var user = 5;
var user1 = 5.34543554;
var user2 = parseFloat(user+user1)
console.log(user2);
//_______________________________________________________________________________

//Objects
var Bike ={
    name:"Honda",
    color: "red", 
    EngineNo:123438790,
    body: function(iron){
    console.log(iron + this.name)
    }
} 
Bike.body("hello")
console.log(Bike.name);

//______________________________________________________________________________
// if condition
var statment = "true";

 if (5<10) {
    console.log("Result is",statment)
 }

// var statment1 =+ prompt("Enter a number");
// if (statment1==10) {
//   console.log("number is equal to 10")  
// } 
//________________________________________________________________________
// Question1
// Write a program that prompts the user to enter a
//  number and checks if it is positive number. 
// Display the result in an alert box.
// var userCheck =+ prompt("Enter a Number");
// var number = parseFloat(userCheck);
// if (number>0) {(
//     alert("the number is positive.")
// }else{
//     alert("the number is not positive.")
// } 
//_________________________________________________________________________
 // Question2
// Write a program that prompts the user to enter two
//  numbers and checks if
//  they are equal. Display the result in an alert box.
// var checks =+ prompt("Enter a first number")
// var checks1=+ prompt("Enter a second number")
// if (checks==checks1) {
//     alert("the number is equal.")
// } else {
//     alert("the number is not equal.")
// }
//_________________________________________________________________________

// write a js program, that check user input number is even or odd?

// function evenOdd() {
//     var userNumber =+ prompt("Enter the number.")
//     userNumber = parseInt("userNumber.")
//     if (userNumber % 2 ==0) {
//         console.log("the number is even.")
//     }else{
//         console.log("the number is odd.")
//     }
// }
// evenOdd()
//_______________________________________________________________________

//Array
var months = ["january","februery","march",]

  // months.push("april");    //Add value on last
  // months.shift();          // Remove 1st value
  // months.unshift("april"); //Add value on 1st
  // months.splice(0, 1, "june");  // Remove and replace values
  // months.pop();     //Remove value on last
  // months.length      //Tells the quantity of values //don't use bracket()
  // months.slice(0, 2); //provide a new coppy of array
//var newArr = months.slice(0, 2)

//console.log(months)
//console.log(newArr)

//  var students = ["ali", "farhan", "shahroz", "null", "haider"]
// for (var index = 0; index < students.length; index++) {
//     const student = students[index];
//     console.log("student", student)
// }
//______________________________________________________________________________

// write a js program, that input name from user, and check is it exits in array or not?
// var names = ["John", "Mary", "David", "Sarah", "Michael"];

// var inputName = prompt("Enter a name:");

// if (names) {
//   alert("The name exists in the array.");
// } else {
//   alert("The name does not exist in the array.");
// }
