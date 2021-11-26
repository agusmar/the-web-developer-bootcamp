// Exercise 1
for (let i = 0; i < 6; i++) {
    console.log("Da ba dee da ba daa");
}

// Exercise 2
for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}

// Exercise 2
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i <= people.length - 1; i++) {
    people[i] = people[i].toUpperCase();
    console.log(people[i]);
}

// Exercise 3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numbers) {
    console.log(num * num);
}
