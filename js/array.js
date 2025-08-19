let arr2=["a", "b", "c", "d", "e"];
let fruits = ["apple", "banana", "mango"];

// console.log(arr[0]); // 1
// console.log(arr2[2]); // "c"
// console.log(arr2[1]); // "c"
fruits.push("orange"); 
// push methosd example
// arr.push(6);
// console.log(fruits); // ["apple", "banana", "mango", "orange"]
// console.log(arr); // [1, 2, 3, 4, 5, 6]
// pop method example
// arr.pop(); // removes the last element
// console.log(arr); // [1, 2, 3, 4, 5]

// unshift method example
// arr.unshift(8); // adds an element at the beginning
// console.log(arr); // [8, 1, 2, 3, 4, 5]

// shift method example
// arr.shift(); // removes the first element
// console.log(arr); // [1, 2, 3, 4, 5


// indexof method example
// console.log(arr.indexOf(3)); // 2


// includes method example
// console.log(arr.includes(14)); // true

// foreach method example
// let arr=[1, 2, 3, 4, 5];

// arr.forEach((item, index) => {
//     console.log(item*2);
// })

// map method example
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((item, index) => {
//     return item * 3;
// });

// console.log(newArr); // [2, 4, 6, 8, 10]
// console.log(arr); // [1, 2, 3, 4, 5]


// filter method example
// let arr = [1, 2, 3, 4, 5];
let arr=["mohan", "sita", "ram", "shyam", "gita"];
let newArr = arr.filter((item, index) => {
    return item !="gita" && item !="ram"; 
});
console.log(newArr); // [3, 4, 5]