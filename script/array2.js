// let students=[
//     {name:"ramesh,hasPaidStatus:false"},
//     {name:"anish,hasPaidStatus:true"},
//     {name:"nabin,hasPaidStatus:false"}
// ]
// students.forEach(student=>{
//     if(student.hasPaidStatus || student.hasScholorship)
//     {
//         console.log(`${student.name};can give exam`);
//     }
//     else{
//         console.log(`${student.name}cannot give exam`);

//     }
// })

let cardItems=[
    {
        name: "rohan",
        products:[
            {  title: "laptop",price:20 },
            { title: "mobile",price:10 },
            {title: "tab",price:15 },
                 
        ]
    },
    {
        name: "ronsiha",
        products:[
            {  title: "clothes",price:30 },
            { title: "bag",price:30 },
            { title: "shoe",price: 40 },
        ]
    }
]
cardItems.map((prod)=>{
    let total= prod.products.reduce((sum,product) => sum+ product.price,0)
    console.log(`${prod.name} spends ${total}`);
})




let fruits= [
    {
        name: "orange",
        scientificName:"xyz",
        prices:[
            {country: "Nepal", price:20,},
            {country:"india", price:30 },
            {country:"Australia", price:2},
            {country:"USA", price: 1}   
        ]
    }
]
let orangePrices = fruits[0].prices.map(priceInfo => {

    // return `Price of orange in ${priceInfo.country}: ${priceInfo.price}`;

     console.log(`Price of orange in ${priceInfo.country}: ${priceInfo.price}`);

});
// console.log(orangePrices);

