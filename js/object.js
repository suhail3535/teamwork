// Object
// let obj = { a: 1, b: 2, c: 3 };
// let mohan={name:"mohan",age:22,city:"bangalore"};
// console.log("obj--",obj)
// console.log('mohan---',mohan)
// console.log("Object.keys(obj)--",Object.values(obj))


let person = {
name:"John",
age:30,
city:"New York"
}
// console.log("person--",person)
// 1- How to Access values form object

// console.log("person.name--",person.name)//////dot notation
// console.log("person['age']--",person['age']) ////bracket notation

// 2- How to add new key value pair to object
person.country="USA"  //dot notation
person.name="mohan"  //updating existing key value pair
// Important Notes:-
// If the key is Not present inside object it will add new key value pair
// if the key is already present inside object it will update the value of that key
// console.log("person--",person)

// how to delete key value pair from object
// delete person.city

// how to loop through object
for (let suhail in person) {
    console.log(suhail, person[suhail]);
}

