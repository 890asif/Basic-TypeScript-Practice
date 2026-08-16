
// const isEven = (num: number): boolean=>{

//    return num % 2 === 0;  
// }
// const num: number = 8;
// console.log(isEven(num))


type Num = {
    num: number;
}

const isEven = (num:Num): boolean=>{

        return num.num % 2 === 0;
}
const number:Num = {
    num: 8
}
console.log(isEven(number))