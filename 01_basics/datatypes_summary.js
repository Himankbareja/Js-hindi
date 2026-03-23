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

    /*     Arrays  =>       object
       Function  =>  function
       Object  =>       object */