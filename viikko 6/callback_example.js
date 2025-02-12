
//1.
setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");

//2.
setTimeout(function(){
    console.log("Demonstrating the callbacks");
},2000);

console.log("The application is started");

//3.
setTimeout(()=>{
    console.log("Demonstrating the callbacks");
},2000);

console.log("The application is started");