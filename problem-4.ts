// const user:{
//     name:string,
//     email?:string
// } = {
//     name:"Asif",
//     email:""
// }
// console.log(`Name: ${user.name}, Email: ${user.email || "Not provided"}`)


type User = {
    name:string;
    email?:string;
};
const showuserInfo = (user:User):string=>{

    return `Name: ${user.name}, Email: ${user.email || "Not Provided"}`

};
 const user:User = {
    name:"Asif",
    email:""
}
console.log(showuserInfo(user))

