## Introducing Strings
Strings are another primitive type in JavaScript.  
They represent text, and must be wrapped in quotes.
The String object is used to represent and manipulate a sequence of characters.

## Indices & Length
Each character has a corresponding index (a positional number)
```
C   H   I   C   K  E   N
0   1   2   3   4  5   6
```

## String Methods
METHODS ARE BUILT-IN ACTIONS WE CAN PERFORM WITH INDIVIDUAL STRINGS

- Searching within a string
- Replacing part of a string
- Changing the casing of a string

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

A method is just an action with a name that we can call upon, in this case a string.

## String Methods With Arguments
`thing.method(arg)`

Some methods accept arguments that modify their behavior. Think of them as inputs that we can pass in.

We pass these arguments inside of the parentheses

1. The `indexOf()` method **returns the index** within the calling String object of the **first occurrence of the specified value**, starting the search at fromIndex. Returns -1 if the value is not found.

2. The `slice()` method **extracts a section** of a string and **returns** it as a **new string**, without modifying the original string.

#### Parameters
##### beginIndex
The zero-based index at which to begin extraction.
##### endIndex Optional
The zero-based index before which to end extraction. The character at this index will not be included.

3. The `replace()` method returns a new string with some or all matches of a pattern replaced by a replacement.

4. The `repeat()` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together

## String Template Literals 
Template literals are literals delimited with backticks (`), allowing embedded expressions called substitutions.

## Undefined & Null
- Null
    - "Intentional absence of any value"
    - Must be assigned
- Undefined
    - Variables that do not have an assigned value are undefined

##  & The Math Object

### Math Object
Contains properties and methods for mathematical constants and functions

### Random Numbers
Math.random() gives us a random decimal between 0 and 1 (non-inclusive)