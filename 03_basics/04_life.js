// Immediately Invoked Function Expression (IIFE)
// Mostly used to avoid unnecessary pollution of global scopes


/* function chai(){
    console.log("DB CONNECTED")
}

chai() */

(function chai(){
    console.log("DB CONNECTED")         // Main catch is ()()
})();                                   // use ; must to end this function otherwise new function will show error



((name) => {
    console.log(`DB CONNECTED , ${name}`)
})("himank")