type User = {
    name:string
    age:number
    email:string
    skills:string[]
    active: boolean
};

const user:User = {
    name : "Asif",
    age: 21,
    email: "asif62n@gmail.com",
    skills: ["HTML", " CSS", " Typescript"],
    active: true,
};
console.log(`Name: ${user.name}`)
console.log(`Age: ${user.age}`)
console.log(`Email: ${user.email}`)
console.log(`Skills: ${user.skills}`)
console.log(`Active: ${user.active}`)

