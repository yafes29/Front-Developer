// map()

// const myArray = [1,2,3,4,5];

// const newArray =myArray.map((v)=>v)

// console.log(newArray);


const products = [{
    name :"computer",
    price : 100,
    amount:10,
},

{
    name:"table",
    price:50,
    amount:15
},

{
    name :"pencil",
    price:10,
    amount:50
}
];

const newProduct = products.map((v)=> ({
   name : v.name,
    totalValue : v.price * v.amount, 
}));

console.log(newProduct);



