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