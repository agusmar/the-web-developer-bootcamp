# Javascript basics

## Primitive types

Primitive types are just types in general are a concept across any programming language.
There are these basic building blocks, basic types of information that we can store.
- numbers
- string
- booleans
- null 
- undefined

In the console we can play around with code and try.

## JavaScript Numbers
- JS has one number type
- Positive numbers
- Negatives numbers
- Whole numbers (integers)
- Decimal numbers

### Math operations
- Addition
- Substraction
- Multiplication
- Division
- Modulo 

### WTF is NaN
NaN is a *numeric value* that represents something that is not a number 



## Variables & Let
VARIABLES ARE LIKE LABELS FOR VALUES
- We can store a value and give it a name so that we can:
- Refer back to it later
- Use that value to do...stuff
- Or change it later one

### BASIC SYNTAX
`let someName = value;`
`let year = 1985;`

## Updating Variables
This does not change the value stored in hens
```let hens = 4;
hens - 1;
```
This does
```hens = hens - 1;
hens
```

## Const & Var
`const` works just like `let`, except you *CANNOT* change the value

*VAR*
THE OLD VARIABLE KEYWORD
BEFORE LET & CONST, VAR WAS THE ONLY WAY OF DECLARING VARIABLES. 
THESE DAYS, THERE ISN'T REALLY A REASON TO USE IT.

## Booleans
Booleans are very simple. 
You have two possible options: true or false.
In JavaScript, Boolean is used as a function to get the value of a variable, object, conditions, expressions, etc. in terms of true or false

## Variable Naming and Conventions

- Variable names cannot contain spaces.
- Variable names must begin with a letter, an underscore (_) or a dollar sign ($).
- Variable names can only contain letters, numbers, underscores, or dollar signs.
- Variable names are case-sensitive.
- Certain words (reserved words) may not be used as variable names, because they have other meanings within JavaScript. 

- Don’t use names that are too short. Simple one-letter names or names that don’t make sense are not a good option when naming variables.

- Use more than one word to name your variable. This will ensure your variable name is precise.

- When using more than one word in your variable names, always put the adjective to the left. For example, this is correct: var greenGrass.

- Pick a style for names with more than one word, and stick to it. The two most common ways to join words to create a name are camelCase and using an underscore (_). JavaScript is flexible — either method works.