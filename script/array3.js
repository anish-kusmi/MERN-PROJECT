let cart=[
    {
        price:200,
        qty: 3
    },
    {
        price:300,
        qty: 3
    },
    {
        price:100,
        qty: 3
    }
]
const total= cart.slice(0,2).reduce((acc,curr)=> acc + curr.price * curr.qty , 0)
console.log("this is out total", total);
let items= cart.slice(0,2)
console.log(items);

let course=[
    {
        class:"mern",
        completeStatus: true
    },
    {
        class:"python",
        completeStatus: false
    },
    {
        class:"ui/ux",
        completeStatus: true
    },
    {
        class:"php",
        completeStatus: false
    }
]
let completed=[]
let inComplete=[]
for (let index = 0; index < course.length; index++) {
    const element = course[index];
    if(element.completeStatus){
        completed.push(element)
    }
    else{
        inComplete.push(element)
    }

    
}
console.log(completed);
console.log(inComplete);


//filter and find 

let number=[1,2,3,4,5,6,7]
const filteredNumber=number.filter(function(num){
    return num> 4
})
console.log(filteredNumber);



let number1=[1,2,3,4,5,6,7]
const foundNumber=number1.find(function(num){
    return num> 4
})
console.log(foundNumber);

//Assignment
let countries=[
    {name:"nepal",code:"Np"},
    {name:"india",code:"In"},
    {name:"australia",code:"Au"},
    {name:"japan",code:"jp"}
]

// function getCountryCode(countryName) {
//     const country = countries.find(c => c.name.toLowerCase() === countryName.toLowerCase().trim());
//     if (country) {
//         return `Country Code for ${country.name} is: ${country.code}`;
//     } else {
//         return `Country ${countryName} not found in the list.`;
//     }
// }


// console.log(getCountryCode("Nepal")); 
// console.log(getCountryCode("India")); 
// console.log(getCountryCode("australia"));
// console.log(getCountryCode("japan"));

//sir ko method 
 findCountry=(c)=>{
    let country= countries.find(country=>country.name===c)
    return country ? country.code: " country not match"
 }
 let x = findCountry("japan")
 console.log(x);
//slice 
 let sentence = "he/is/a/good/boy"
 let wordSeparator= sentence.split("/")
 console.log(wordSeparator);
 console.log(wordSeparator.length);

 //pull & pop
 let num=[1,2,3,4]
 let newNum = num.push(5)
 console.log(num);
 let removeNum = num.pop()
 console.log(num);
 
 // assignment (shift & unshift) method of Array and(includes)method & (charAt)as well

 //Animate CSS package herne

 //spread operator
 let num1=[1,2,3]
 let num2=[...num1, 5, 6, 7, 8]
 console.log(num2);

 //parse=>object lai json string ma convert garxa  and 
 //stringify=>json string lai object ma covert garxa
 
 const jsonString='{"name":"alisha","age":20}'
 const jsonObject= JSON.parse(jsonString)
 console.log(jsonObject.name);

 const jsonObject1= {"name":"alisha","age":20}
 const jsonString1= JSON.stringify(jsonObject1)
 console.log(jsonString1);


//map function 
 let numbers=[1,2,3,4]
 let double= numbers.map((num)=>{
    return num*2
 })
 console.log(double);
 


 
 

