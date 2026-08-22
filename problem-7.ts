type Num = number[];
const arrayMerge = (arr1:Num, arr2:Num):number[]=>{

    return [...arr1, ...arr2];

}
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arrayMerge(arr1, arr2))