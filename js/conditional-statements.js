// Conditional Statements in JavaScript
// if 
// else if
// else


// let a=20;
// let b=30;

// if(a>b){
//     console.log("A is greater than B");
// }else{
//     console.log("B is greater than A");
// }    

// Question:1 Based on the marks, determine the grade

// marks=below 33% it will fail
// marks=above 33 and below 45 the grade will be D
// marks = above 45 and below 60 the grade will be C
// marks = above 60 and below 75 the grade will be B
// marks = above 75 the grade will be A


// function checkGrade(marks) {
// if (marks < 33) {
//         console.log("Fail");
//     } else if (marks >= 33 && marks < 45) {
//         console.log("Grade D");
//     } else if (marks >= 45 && marks < 60) {
//         console.log("Grade C");
//     } else if (marks >= 60 && marks < 75) {
//         console.log("Grade B");
//     } else if (marks >= 75) {
//         console.log("Grade A");
//     }
// }

// checkGrade(32);
// checkGrade(33);
// checkGrade(50);
// checkGrade(65);
// checkGrade(75);
// checkGrade(80);


// ===================Switch case===================
// Write a program that checks a person’s age and prints:

// "Child" if age is less than 13

// "Teenager" if age is between 13 and 19

// "Adult" if age is between 20 and 59

// "Senior Citizen" if age is 60 or above


// let day = 2;
// switch (day) {
//   case 1: console.log("Monday"); break;
//   case 2: console.log("Tuesday"); break;
//   default: console.log("Other day");
// }


let day=2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
        break;
      
}