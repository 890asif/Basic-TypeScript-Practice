
// const returnresult = (userName:string) =>{
//     if(userName === "undefined"){
//         return "Guest"
//     }
// }
// const userName = "undefined";
// console.log(returnresult(userName))


const username:string | undefined = undefined;

const result = username ?? "Guest";

console.log(result)