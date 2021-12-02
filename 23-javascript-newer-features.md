
## DEFAULT PARAMS
```
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5, 2));
// expected output: 10

console.log(multiply(5));
// expected output: 5
```

## SPREAD
- The spread operator is denoted by three dots (…).
- The spread operator unpacks elements of iterable objects such as arrays, sets, and maps into a list.
- The rest paramter is also denoted by three dots `(…).` However, it packs the remaining arguments of a function into an array.
- The spread operator can be used to clone an iterable object or merge iterable objects into one.

```
const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined);
Code language: JavaScript (javascript)
```
Output:
```
[ 2, 4, 6, 1, 3, 5 ]
```

## REST
 - Rest parameter that has a prefix of three dots (...). 
 - A rest parameter allows you to represent an indefinite number of arguments as an array

## THE ARGUMENTS OBJECT
- Available inside every function. 
- It's an array-like object
- Has a length property
- Does not have array methods like push/pop
- Contains all the arguments passed to the function
- Not available inside of arrow functions!

## DESTRUCTURING
A short, clean syntax to 'unpack':
 - Values from arrays
 - Properties from objects
Into distinct variables.

```
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne'
};
const { name, realName } = hero;
name;     // => 'Batman',
realName; // => 'Bruce Wayne'
```