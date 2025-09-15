
// <-----------get Data from json server----------->
let url = "http://localhost:8080/students"

async function fetchData() {
    try {
        let responce = await axios.get(url)
        displayProductData(responce.data)
    } catch (error) {
        console.log(error)
    }
}
fetchData()

// <-----------------Display Data------------->

function displayProductData(productdata) {
    let container = document.getElementById("container")
    productdata.forEach((product, index) => {
        let card = document.createElement('div')



        let name = document.createElement('h6')
        name.innerText = product.name

        let age = document.createElement('p')
        age.innerText = product.age

        card.append(name, age)
        container.append(card)
    })
}
