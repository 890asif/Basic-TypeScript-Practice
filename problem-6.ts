type Num = number [];
const countSum = (arr:Num):number=>{
    const total = arr.reduce((number, total)=>{
        return  total + number;
    },0)

     return total;

}
const arr:Num = [1, 2, 3, 4];
console.log(countSum(arr))