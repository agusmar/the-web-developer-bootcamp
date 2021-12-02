// Exercise 1
const square = function (num) {
    return num * num;
};

square(4);

// Exercise 2
const square2 = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    },
};

// Exercise 3
const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg(eggCount) {
        this.eggCount++;
        return "EGG";
    },
};
