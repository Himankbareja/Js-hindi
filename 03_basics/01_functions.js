function myname(){
    console.log("H")
    console.log("I")
    console.log("M")
    console.log("A")
    console.log("N")
    console.log("K")
}

myname()


/* function adding(num1,num2){
    console.log(num1+num2)
}
 */

function adding(num1,num2){
    return num1+num2
}
const result = adding(3,"4")

console.log("Result : " , result)

function loginmsg(username = "Sam"){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginmsg("Himank"))         // If username not written then by default take Sam

function calccartprice(num1,...num){        // If only give num the print first element
    return num                              // Therefore use ... -> rest operator
}

console.log(calccartprice(200,400,600));

const user = {
    username : "himank",
    price : 199
}

function handleobj(obj){
    console.log(`Username is ${obj.username} and price is ${obj.price}`)
}

// handleobj(user)
handleobj({
    username : "Sam",
    price : 100
})

const arr = [200,400,100,600]

function returnsecondvalue(num){
    return num[1]
}

console.log(returnsecondvalue(arr))

console.log(returnsecondvalue([800,700,300]))