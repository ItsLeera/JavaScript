let user = {
    firstName : "Princess",
    lastName: "Jumbo",
    salary:"4000",
    email:"pg@gmail.com",
    password:"12345",
    depth : "3000",
    isActive:true,
    isloggedIn:true,
    skills:["HTML","CSS","AI"],
    role:{
        title:"Engineer",
        level:"Junior",
    },
    fullName: function(){
        return  this.firstName + "" + this.lastName;
    },
};
user.takehome = function(amount){
    return this.salary += amount;
}

user['name'] = "Leera";
// console.log(user);

user.gender = "Male"
// console.log(user)

delete user.gender
// console.log(user);

// console.log(user.fullName());

// console.log(user.takehome(300));
// console.log(Object.values(user)[0]);
// console.log(Object.keys(user));


// for(let key in user){
//     console.log(key, user[key]);
// }

const {email, password } = user;
// console.log(`email: ${email}, password:${password}`);