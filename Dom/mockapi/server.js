let url = "http://localhost:8080/students"
let userId = null;
// <-----------Get Data from json server(Get Method)----------->
async function fetchData() {
    try {
        let response = await axios.get(url) // fetch data from json server or api(db.json)
        displayProductData(response.data)
    } catch (error) {
        console.log(error)
    }
}
fetchData()


// <----------------------Post Method--------------------->
let userForm = document.getElementById("userForm")
userForm.addEventListener("submit", async function (e) {
    e.preventDefault()  // prevent form from submitting
    let username = document.getElementById("name").value
    let userage = document.getElementById("age").value
    

    if (userId) {
        await EditUser(userId, username, userage)
        alert("Student details updated")
       userId = null;
} else {
        // add new user
        await addUser(username, userage)
        alert('Student details submitted')

        userForm.reset() // clear form
        fetchData() // refresh list
    }


})

async function addUser(name, age) {
    try {
        await axios.post(url, {
            name: name,
            age: age
        })
    } catch (error) {
        console.log(error)
    }
}


////////patch method or edit//////////  
async function EditUser(id, name, age) {
    try {
        await axios.put(`${url}/${id}`, {
            name: name,
            age: age
        })

    } catch (error) {
        console.log(error)
    }
}


// <------------------Delete Method------------>
async function deleteUser(id) {
    try {
        await axios.delete(`${url}/${id}`)
        fetchData()
    } catch (error) {
        console.log(error)
    }
}


// <-----------------Display Data------------->
function displayProductData(productdata) {
    let container = document.getElementById("container")
    container.innerHTML = ""  // clear old data
    productdata.forEach((product) => {
        let card = document.createElement('div')

        let name = document.createElement('h6')
        name.innerText = product.name

        let id = document.createElement('h2')
        id.innerText = product.id

        let age = document.createElement('p')
        age.innerText = product.age

        // Delete Button
        let deleteBtn = document.createElement('button')
        deleteBtn.innerText = "Delete"
        deleteBtn.addEventListener("click", () => {
            deleteUser(product.id)
            alert('User deleted')
        })

        // Delete Button
        let editBtn = document.createElement('button')
        editBtn.innerText = "Edit"
        editBtn.addEventListener("click", () => {
            document.getElementById("name").value = product.name
            document.getElementById("age").value = product.age
           userId = product.id;

        })
        card.append(id, name, age, deleteBtn, editBtn)
        container.append(card)
    })
}
