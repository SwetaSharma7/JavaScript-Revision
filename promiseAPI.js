const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 Success");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2 Fail");
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 Success");
  }, 1000);
});

// Promise.all([p1, p2, p3])
//   .then((results) => {
//     console.log(results); // This will log ["p1 Success", "p2 Success", "p3 Success"]
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.error(err));

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));


  const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p4 Fail");
    }, 3000);
  });
  
  const p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p5 Fail");
    }, 2000);
  });
  
  const p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("p6 Fail");
    }, 1000);
  });

  Promise.any([p4, p5, p6])
  .then((res) => {
    console.log(res);
  })
  .catch(err => console.error(err));
