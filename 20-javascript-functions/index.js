// Exercise 1
function printHeart() {
    console.log("<3");
}

printHeart();

// Exercise 2
function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}

rant("I hate beets");

// Exercise 3
function isSnakeEyes(num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}

isSnakeEyes(1, 1);

// Exercise 4
function multiply(x, y) {
    return x * y;
}

multiply(2, 3);
multiply(9, 9);
multiply(5, 4);

// Exercise 5
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    } else {
        return false;
    }
}

isShortsWeather(80);

// Exercise 6
function lastElement(array) {
    if (array.length !== 0) {
        return array.slice(-1)[0];
    } else {
        return null;
    }
}

// Exercise 7
function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

// Exercise 8
function sumArray(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

sumArray([1, 2, 3]);

// Exercise 9
const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

function returnDay(num) {
    if (num < 1 || num > 7) {
        return null;
    } else {
        return week[num - 1];
    }
}

returnDay(1);
//Monday
