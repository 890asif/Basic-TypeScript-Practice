// primitive type 
// const productDetails =(name:string, price:number, isAvailable:boolean):string =>{

//     return `${name} cost ${price} and is available: ${isAvailable}`
// }

// console.log(productDetails("Laptop", 45000, true))



//non primitive type
const productDetails = (product:{name:string, price:number, isAvailable:boolean})=>{

    const {name, price, isAvailable} = product;

    return `${name} cost ${price} and is available: ${isAvailable}`

}
const product:{name:string;
    price:number;
    isAvailable: boolean;
} = {
    name: "Laptop",
    price: 45000,
    isAvailable: true
}
console.log(productDetails(product))