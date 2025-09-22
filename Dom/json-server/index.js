
async function getData() {
    try {
        const response = await axios.get("http://localhost:3000/users");
        console.log("Data:", response.data);


        displayProductData(response.data)
    } catch (error) {
        console.log(`this is error ${error}`)
    }
}
getData();


// <--------------Post data----------->
document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop page reload
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (name && age) {
    addUser(name, age);
    document.getElementById("userForm").reset(); // Clear form
  }
});

 function addUser(name, age) {
  axios.post("http://localhost:3000/users", {
      name: name,
      age: age
    })
    .then(response => {
      console.log("User Added:", response.data);
      alert("User added successfully!");
      getData()
    })
    .catch(error => {
      console.error("Error:", error);
    });
}




function displayProductData(productdata) {
    let container = document.getElementById("container")
    productdata.forEach((product, index) => {
        let card = document.createElement('div')



        let name = document.createElement('h2')
        name.innerText = product.name

        let age = document.createElement('p')
        age.innerText = product.age

        card.append(name, age)
        container.append(card)
    })
}





// <-----------------------postData-------------------->

let form = document.getElementById("userForm")
form.addEventListener('submit',function(e){
    e.preventDefault()
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    if(name && age){
        addUser(name,age)
        form.reset()
    }else{
        alert("Please fill all the fields")
    }
})



function addUser(name, age) {
    axios.post("http://localhost:8080/students", {
            name: name,
            age: age
        })
    .then(response => {
      console.log("User Added:", response.data);
      alert("User added successfully!");
   
    })
    .catch(error => {
      console.error("Error:", error);
    });
}

function deleteUser(id){
    axios.delete(`http://localhost:8080/students/${id}`)
    .then(response => { 
        console.log("User Deleted:", response.data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
}
