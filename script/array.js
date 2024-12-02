let numbers=[1,2,3,4,5]
console.log(numbers);
//for loop
//for each 
//map

for(let i=0; i<10;i++)
{
    console.log(i);
}

let realNumber=[1,2,3,4,5,6,7,8,9,10]
let evenNumber=[]
let oddNumber=[]
realNumber.map((number)=>{
    if(number%2==0){
        evenNumber.push(number)
    } else {
        oddNumber.push(number)
    }
})
console.log("this is even number",evenNumber);
console.log("this is odd number",oddNumber);
//Ternary operator

const age=15
let canVote=(age>18? "can vote":"cannot vote")
console.log(canVote);
