// singleton
// Object.create


// Object literals 


const mysym = Symbol("key1")

const Jsuser = {
    name : "Himank",
    "full name" : "Himank Bareja",
    [mysym] : "key2",               // Symbol syntax in square bracket
    age : 20 ,
    location : "Panipat",
    email : "himank@google.com",
    isLoggedIn : false,
    lastLoggedindays : ["Monday", " Saturday"]
}

console.log(Jsuser.email)
//console.log(Jsuser[email])        Wrong because email is string and specify that no need to do that in object key
console.log(Jsuser["email"])
console.log(Jsuser["full name"])        // Will not be able to do that in dot format thats why this also imp

console.log(Jsuser[mysym])          // Only format for symbol is square bracket


Jsuser.email = "himank@gmail.com"
//Object.freeze(Jsuser)             No changes in object after this
Jsuser.email = "himank@chatgpt.com"
console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello JS user")
}

Jsuser.greeting2 = function(){
    console.log(`Hello JS user , ${this.name}`)             // IMP
}

console.log(Jsuser.greeting())
console.log(Jsuser.greeting2())