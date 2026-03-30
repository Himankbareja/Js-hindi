const user = {
    username : "himank",
    price : 199,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}

user.welcomeMessage()
user.username = "hitesh"
user.welcomeMessage()

console.log(this)

function chai(){
    let username = "himank"
    // console.log(this.username)      // It will show undefined because this works in object mot function
}

chai()

const chai2 = function () {
    let username = "hitesh"
    console.log(this.username);
}

chai2()

const chai3 = () => {
    let username = "himank"
    console.log(this)
}

chai3()

/* const addtwo = (num1,num2) => {
    return num1 + num2
} */

// const addtwo = (num1,num2) => num1+num2

// const addtwo = (num1,num2) => (num1 + num2) 

const addtwo = (num1,num2) => ({username : "himank"})       // In case of returning object in one line use ()

console.log(addtwo(3,4))


