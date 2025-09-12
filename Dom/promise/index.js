// let promise = new Promise((resolve, reject) => {
//     let pass = false;//// its truty value

//     if (pass) {
//         resolve("You are Passed")
//     } else {
//         reject("You are fail")
//     }


// })

// promise.then((result)=>{
// console.log(result)
// })
// .catch((error)=>{
// console.log(error)
// })


let pizzaOrder = new Promise((resolve, reject) => {
  console.log("Ordering pizza... 🍕");///immidetly
  
  setTimeout(() => {
    let isDelivered = true;
    
    if (isDelivered) {
      resolve("Pizza delivered! 🍕✅");
    } else {
      reject("Pizza not delivered! ❌");
    }
  }, 2000);
  console.log('waiting for order')
});

pizzaOrder
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
