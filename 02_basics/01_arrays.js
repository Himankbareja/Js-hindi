const arr = [1,2,5,6,8]         // We can add different datatypes in one array

const arr2 = new Array(3,5,6,8)
console.log(arr)
console.log(arr2[1])

arr.push(6)
arr.push(7)
arr.pop()

arr.unshift(9)          // push and pop forward
arr.shift()
console.log(arr)

console.log(arr.includes(17))
console.log(arr.includes(8))
console.log(arr.indexOf(5))

const newarr = arr.join()           // Converts array to string

console.log(newarr)      
console.log(typeof newarr)   


console.log("A ", arr)

const new1 = arr.slice(1,3)
console.log(new1)

console.log("B ", arr)

const new2 = arr.splice(1,4)
console.log(new2)

console.log("C ", arr)

/* Differnce between slice and splice is that 
splice includes the last index alement given 
in input  and also remove those elements in original array*/