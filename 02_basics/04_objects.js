//const Tinderuser = new Object()

const Tinderuser = {}

Tinderuser.id = "123abc"
Tinderuser.name = "Himank"
Tinderuser.isLoggeIn = false

console.log(Tinderuser)

const user = {
    email : "himank@gmail.com",
    fullname : {
        username : {
            firstname : "Himank",
            lastname : "Bareja"
        }
    }
}

console.log(user.fullname.username.firstname)

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}
const obj3 = {5 : "e" , 5 : "f"}

const obj4 = Object.assign({},obj1,obj2,obj3)       // If not given {} then it will copy all values in obj1 
console.log(obj4)

const obj5 = {...obj1 ,...obj2 ,...obj3}
console.log(obj5)

const users = [
    {

    },
    {

    }
]

// users[0].email

console.log(Object.keys(Tinderuser))
console.log(Object.values(Tinderuser))
console.log(Object.entries(Tinderuser))

console.log(Tinderuser.hasOwnProperty('id'))


const course = {
    coursename : "JS in Hindi",
    price : "Rs199",
    courseInstructor : "hitesh"
}

// course.courseInstructor

const {courseInstructor : instructor} = course

//console.log(courseInstructor)
console.log(instructor)