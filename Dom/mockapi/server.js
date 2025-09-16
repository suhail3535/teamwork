
// <-----------get Data from json server(Get Method)----------->
let url = "http://localhost:8080/students"

async function fetchData() {
    try {
        let responce = await axios.get(url)  ////fetch data from json server or api(db.json)
        displayProductData(responce.data)
    } catch (error) {
        console.log(error)
    }
}
fetchData()


// <----------------------Post Method--------------------->

let userForm = document.getElementById("userForm")
userForm.addEventListener("submit", function (e) {
    e.preventDefault()  //prevent form from submitting
    let username = document.getElementById("name").value
    let userage = document.getElementById("age").value
    addUser(username, userage)
    alert('students details submitted')
})


function addUser(name, age) {
    try {
        let responce = axios.post('http://localhost:8080/students', {
            name: name,
            age: age
        })
    } catch (error) {
        console.log(error)
    }

}
// <------------------Delete Method------------>

function deleteUser(id) {
    try {
        let response = axios.delete(`http://localhost:8080/students/${id}`)
    } catch (error) {
        console.log(error)
    }
}


// <-----------------Display Data------------->

function displayProductData(productdata) {
    let container = document.getElementById("container")
    productdata.forEach((product, index) => {
        let card = document.createElement('div')



        let name = document.createElement('h6')
        name.innerText = product.name


        let id = document.createElement('h2')
        id.innerText = product.id

        let age = document.createElement('p')
        age.innerText = product.age

        let button = document.createElement('button')
        button.innerText = "Delete"
        button.addEventListener("click", (e) => {
            deleteUser(product.id)
            alert('user deleted')
        })

        card.append(id, name, age, button)
        container.append(card)
    })
}
