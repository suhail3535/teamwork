let data = {
  "array": [
    { "name": "mohan", "age": 22, "city": "bangalore" },
    { "name": "suhail", "age": 23, "city": "mumbai" },
    { "name": "raju", "age": 24, "city": "delhi" },
    { "name": "sonu", "age": 25, "city": "chennai" }
  ]
}



let allData=data.array

let result=allData.filter((user)=>user.name!=="sonu")
console.log("result--", result);



