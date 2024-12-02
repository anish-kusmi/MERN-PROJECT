// console.log("hello world from top");
// function abcd(name) {
//     console.log("hello " + name +"!");
//     return(`hello, ${name} !`);
    
// }
// abcd("ram")
// const x = abcd("ram")
// console.log(x);

// function add(x,y){
//     return x + y
// }
// const k = add(2,3)
// console.log(k);

// function mul(x,y){
//     return x * y
// }
// const k = mul(2,3)
// console.log(k);

// setTimeout(()=>{
//     console.log("hello from middle");
// },2000);


// function sum(...numbers)
// {
//     let total=0
//     for(let num of numbers)
//     {
//         total += num
//     }
//     return total
// }
// console.log(sum(1,2,3,4));

//  console.log("hello  from bottom");


//  //higher order function
//  function performOperation(x, y, operation) {
//     return operation(x, y);
// }

// const result = performOperation(10, 5, (a, b) => a * b);
// console.log(result);


//try catch 

// try {
//     let firstName= "Ronish"
//     let lastName= "paudel"
//     let fullName= firstName + lastName
//     console.log("this is full name", fullName);
    
// } catch (error) {
//     console.log("this is error",error.message);
    
    
// }
// traditional function
//  function add(x,y) {
//     return x + y
    
//  }
//  let total= add(2,1)
//  console.log(total);

 //arrow function
//  const add= ()=>{
//     return x + y
//  }
//  let arrowTotal=add(2,1)
//  console.log(arrowTotal);

//   function helloWorld() {
//     let message= "hello, world"
//     setTimeout(function()  {
//         console.log(message);
        
//     }, 2000);
    
//  }
//  helloWorld()

 //assignment
//  let name=["shyam","hari","gita","ramesh"]

// Asynchronous
// Promise,callback

// const showAlert=(type, message)=>{
//     console.log(`${type}: ${message}`);
    
// }
// showAlert("warning", "you are not a user")

// let name=["shyam","hari","gita","ramesh"]



// function fetchData(callbacks) {
//     console.log("api is listening");
//     setTimeout(() => {
//         callbacks("api sucessfully fetched")
        
//     }, 3000);
       
// }
// fetchData(function(message))
// {
//     console.log(message);
    
// }

//assignment

// const nameList = ["shyam", "hari", "gita", "ramesh"];

// function checkAuthorization(name) {
//     const result = nameList.map(item => item.toLowerCase()).includes(name.toLowerCase());
//     return result ? `${name} is authorized.` : `${name} is not authorized.`;
// }

// console.log(checkAuthorization("shyam")); 
// console.log(checkAuthorization("rohit"));  

// const authorizedUser=["Alice","Bob","Charle"]
// const checkUser=()=>{
//     const enteredName= prompt("enter your name")
//     if(authorizedUser.includes(enteredName)){
//         alert("authorizes user")
//     } else{
//         alert("unauthorized user")
//     }
// }
// checkUser()


// promise takes resolve and reject as an argument
//ki resolve hunxa ki reject hunxa duita sangai hudaina
let promise= new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("internal server error")
        resolve({
            data:{
                name:"umesh",
                email:"umesh@gmail.com"
            }

        })
        
    }, 3000);
})
promise.then((res)=>{
    console.log("response",res);
})
.catch((err)=>{
    console.log("this is error",err);
    
})
console.log(promise);




 


