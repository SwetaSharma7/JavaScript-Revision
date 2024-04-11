// callback function -- 

setTimeout(function () {
    console.log("timer")
}, 4000)

function x(y){
    console.log("x")
    y();
}
x(function y(){
    console.log("function called y")
});
