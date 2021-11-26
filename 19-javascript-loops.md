# Loops 

Loops allow us to repeat code
- "Print 'hello' 10 times
- Sum all numbers in an array

There are multiple types:
- for loop
- while loop
- for...of loop
- for...in loop

## For Loop Syntax

for ([initialExpression]; [condition]; [incrementExpression])

The example below:
- starts at 1
- stop at 10
- add 1 each time

```
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
```

The example below:
- Start i at 50
- Subtract 10 each iteration
- Keep going as long as i >= 0

```
for (let i = 50; i >= 0; i-= 10) {
  console.log(i);
}
```


To loop over an array, start at index 0 and continue looping to until last index (length-1)

```
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]

for (let i = 0; i <= people.length -1; i++) {
console.log(people[i])
}
```

## Nested Loops

```
let str = 'LOL'
for (let i = 0; i <= 6; i++) {
    console.log("Outer:", i);
    for (let j = 0; j < str.length; j++) {
        console.log("    Inner:", str[j]);
    }
}
```

## While loops
While loops continue running as long as the test condition is true
**Break** stops de loop
```
while (condition)
  statement
```

```
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

## For...of
The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects

```
for (variable of iterable) {
  statement
}
```

**variable**
On each iteration a value of a different property is assigned to variable. variable may be declared with const, let, or var.

**iterable**
Object whose iterable properties are iterated.

```
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```