
// 1st way
// let allData=[]
// //  let promise= fetch("https://jsonplaceholder.typicode.com/posts")
//   console.log(promise)
//   promise
//   .then(response => response.json())  // Convert response to JSON
//   .then(result => {
//     allData=result
//      console.log('alldata',allData)
//   })
//   .catch(error => console.error("Error:", error));
//  console.log('alldata',allData)



// 2nd way
let alldata = []
async function getData() {
    try {
       const response = await axios.get("https://fakestoreapi.com/products");
        console.log("Data:", response.data);

        alldata = response.data
        displayProductData(alldata)
    } catch (error) {
        console.log(`this is error ${error}`)
    }
}
getData();
console.log('alldata',alldata)




function displayProductData(productdata) {
        let container = document.getElementById("container")
        productdata.forEach((product, index) => {
            let card = document.createElement('div')

            let image = document.createElement('img')
            image.src = product.image

            let title = document.createElement('h2')
            title.innerText = product.title

            let price = document.createElement('p')
            price.innerText = product.price
            let category = document.createElement('h1')
            category.innerText = product.category
            card.append(image,category, title, price)
            container.append(card)
        })
    }
