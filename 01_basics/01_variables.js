const accountId = 14453
let accountEmail = "himank@google.com"
var accPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 (not allowed)

accountEmail = "himank@gmail.com"
accPassword = "818638"
accountCity = "Panipat"

console.log(accountId)

console.table([accountId, accountEmail, accPassword,accountCity,accountState])

/*
    Prefer not to use var 
    because of issue in block scope and functional scope
*/