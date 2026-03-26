let mydate = new Date()

console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(typeof mydate)


//let date2 = new Date(2026,0,26)
//let date2 = new Date(2026,1,26,5,3)
let date2 = new Date("2026-01-26")
console.log(date2.toLocaleString())


let mytimestamp = Date.now()

console.log(mytimestamp)
console.log(date2.getTime())
console.log(Math.floor(Date.now()/1000))

let newdate = new Date()
console.log(newdate)
console.log(newdate.getMonth())         // 0 - based indexing
console.log(newdate.getDay())

newdate.toLocaleString('default',{
    weekday : "long"
})