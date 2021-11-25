# ARRAYS 

Arrays are ordered collections of values.
Examples:
- List of comments on IG post
- Collection of levels in a game
- Songs in a playlist

`let fruits = ['Apple', 'Banana']`
Every array has a lenght

**Arrays are indexed**
Each element has a corresponding index 
(counting starts at 0)

## ARRAY METHODS
- push() 
    add to end
- pop() 
    remove from end
- shift() 
    remove from start
- unshift()  
    add to start

- concat()
    is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
- includes() 
    determines whether an array includes a certain value among its entries, returning true or false as appropriate.
- reverse() 
    reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
- indexOf()
    returns the first index at which a given element can be found in the array, or -1 if it is not present.
- slice()
    returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
- splice()
    changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
- sort()
    the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

## Arrays + Const
What CONST cares about is that the **variable itself is not reassigned**.
What you store in a variable is not the content, it is a **reference**.