const cart = ["shoes", "shirt", "kurta"];

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    // Pass orderId explicitly to the next then block
    return proceedToPayment(orderId); // Call proceedToPayment function with orderId
  })
  .then(function (result) {
    console.log(result); // Log the result of payment
  })
  .catch(function (err) {
    console.log(err.message);
  });

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 1000);
    }
  });

  function validateCart(cart) {
    return true;
  }
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    // Simulate payment processing
    setTimeout(function () {
      resolve("payment Successful");
    }, 1000);
  });
}
