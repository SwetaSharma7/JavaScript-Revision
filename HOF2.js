 const arr = [5, 1, 3, 2, 6]

//  map
 function double(x) {
    return x*2;
 }

 function triple(x){
    return x*3;
 }


 console.log(arr.map(double));
 console.log(arr.map(triple));

 function isOdd(x){
    return x%2 !== 0;
 }
console.log(arr.map(isOdd));
//  [ true, true, true, false, false ]  ---output


//  filter
function isOdd(x){
    return x%2 !== 0;
 }
console.log(arr.filter(isOdd));


// reduce
console.log("---------------reduce-------------")
function finSum(arr){
    let sum = 0;
    for(let i =0; i< arr.length; i++){
        sum = sum+arr[i];
    }
    return sum;
}
console.log(finSum(arr));

function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(max(arr)); // Output: 6


const output = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0);
console.log(output);

const max2 = arr.reduce(function(acc, curr){
    if(curr > acc){
        acc = curr;
    }
    return acc;
}, 0)
console.log(max2);
