// Primitive

// 7 types -> String , Number, Boolean, Null, undefined, symbol, bigint

const score = 100
const scorevalue = 100.3


const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id)

console.log(Id === anotherId)

const bignum = 38629872987983n              // Big int

// Referenece (Non - Primitive)

// Array , Objects , Functions

const name = ["ram", "raj", "raghav"];

let myobj = {
    name : "Himank",
    age : 21
}

const myfunc = function(){
    console.log("Hello World");
}

/*  Arrays  =>       object
    Function  =>  function
    Object  =>       object 
*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(Non-Primitive)

let myname = "hitesh"

let myothername  = myname;
myothername = "chai"

console.log(myname)
console.log(myothername)

let user1 = {
    email : "user1@gmail.com",
    upi : "user@ybl"
}

let user2 = user1

user2.email = "himank@gmail.com"

console.log(user1.email)
console.log(user2.email)