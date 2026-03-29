// var c = 300

let a = 300


if(true){
    let a = 10
    const b = 20
    console.log("Inner", a)
    //var c = 30
}

console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const username = "himank"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

one()

if (true) {
    const username = "himank"
    if (username === "himank") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++++++++ INTERSTING +++++++++++++++++++++++++++++

console.log(addone(6))

function addone(num){
    return num+1
}

console.log(addone(6))

// console.log(addtwo(6))           (This will give error because stored in const or variable)

const addtwo = function(num){
    return num+2
}

console.log(addtwo(6))