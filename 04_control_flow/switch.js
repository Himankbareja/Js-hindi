// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");               // If break not written the all statement after it will be executed except default even if condition doesn't match
        // break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}