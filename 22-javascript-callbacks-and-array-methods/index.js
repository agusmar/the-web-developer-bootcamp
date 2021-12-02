// Exercise 1
const fullNames = [
    { first: "Albus", last: "Dumbledore" },
    { first: "Hermione", last: "Granger" },
    { first: "Ron", last: "Weasley" },
    { first: "Rubeus", last: "Hagrid" },
    { first: "Minerva", last: "McGonagall" },
    { first: "Severus", last: "Snape" },
];

const firstNames = fullNames.map(function (fullnames) {
    return fullnames.first;
});

// Exercise 2
const greet = (name) => {
    return `Hey ${name}!`;
};

greet("Hagrid");
