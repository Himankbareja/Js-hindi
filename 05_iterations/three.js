// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num)
}

const greetings = "Hello World!"

for(const greet of greetings){
    console.log(greet)
}



// MAP

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map)

for(const [key,value] of map){              //Only for map not for object this [x,y]
    console.log(key, ":-", value)
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {           // Not for object
//     console.log(key, ':-', value);
    
// }