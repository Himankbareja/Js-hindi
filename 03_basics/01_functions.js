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