const name = "himank"
const repo = 50

console.log(name + repo + "value") //NOT RECOMMENDED

console.log(`My name is ${name} and my repo count is ${repo}`)

const game = new String('hitesh')

console.log(game[0])
console.log(game.__proto__)

console.log(game.length)
console.log(game.toUpperCase())

console.log(game.charAt(2))
console.log(game.indexOf('t'))

const newgame = game.substring(0,4)
console.log(newgame)

const anothergame = game.slice(-5,4)        // start indexing -1 from last
console.log(anothergame)

const s1 = "    himank   "
console.log(s1)
console.log(s1.trim())

const url = "https://himank.com/himank%20bareja"

console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))

const s2 = "himank-singh-bareja"
console.log(s2.split('-'))