// Exercise 1
function isEven(num) {
    if (num % 2 == 0) {
        console.log("even");
    }
}

// Exercise 2
function getColor(phrase) {
    if (phrase == "stop") {
        console.log("red");
    } else if (phrase == "slow") {
        console.log("yellow");
    } else if (phrase == "go") {
        console.log("green");
    } else {
        console.log("purple");
    }
}

// Exercise 3
const num = 102;

if (num <= 100) {
    if (num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if (num % 2 === 0) {
            console.log("YOU GOT ME!");
        }
    }
}

// Exercise 4
const mystery = "Piano7";
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
    console.log("YOU GOT IT!!!");
}
