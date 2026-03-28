const arr1 = [2,4,6]
const arr2 = [1,3,5]

/* arr1.push(arr2)              This change has been in arr 1 itself
console.log(arr1)
console.log(arr1[3][1]) */

const arr3 = arr1.concat(arr2)
console.log(arr3)

const arr4 = [...arr1,...arr2]      // Returns a new array
console.log(arr4)

const arr5 = [2,5,4,[4,5],[2,[4,[6,9]]]]
const arr6 = arr5.flat(Infinity)
console.log(arr6)

console.log(Array.isArray("Himank"))
console.log(Array.from("Himank"))
console.log(Array.from({name : "Himank"}))      // Gives empty array , specify whether array of key or values

let score1 = 100
let score2 = 200
let score3 = 400

console.log(Array.of(score1,score2,score3))