const users = [
    {firstName: "sweta", lastName: "sharma", age: 23},
    {firstName: "ashu", lastName: "raj", age: 19},
    {firstName: "ssaumya", lastName: "sharma", age: 22},
    {firstName: "saumya", lastName: "sharma", age: 22},
    {firstName: "ssamm", lastName: "sharma", age: 32}
];

const output = users.map((x) => x.firstName + " " + x.lastName);
console.log(output);

const outputAge = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age]++;
    }else{
        acc[curr.age] = 1;
    }
    return acc;
}, {})

console.log(outputAge);

const lessAge = users.filter((x) => x.age < 30).map((x) => x.firstName)
console.log(lessAge);

// usinf reduce
const ageLessThan30 = users.reduce(function(acc, curr){
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
}, [])
console.log(ageLessThan30);