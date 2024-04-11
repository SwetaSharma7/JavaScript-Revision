const cart = ["shoes", "shirt", "kurta"];

const promise = createOrder(cart);

promise.then(function(orderId){
    console.log(orderId);
})
.then(function(){
    proceedToPayment(orderId)
})
.catch(function(err){
    console.log(err.message);
})

function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
        }
        const orderId = "12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            }, 1000);
        }
    });

    return pr;


function validateCart(cart){
    return true;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("payment Successful");
    })
}

}
