# Boolean Logic
## MAKING DECISIONS WITH JAVASCRIPT

Comparisons



`>`	**greater than**	
`x > 8`	*false*	

`<`	**less than**	
`x < 8`	*true*

`>=`	**greater than or equal to**	
`x >= 8`	*false*	

`<=`	**less than or equal to**
`x <= 8`	*true*

`==`	**equal to**	
`x == 8`	*false*	
`x == 5`	*true*	
`x == "5"`	*true*

`!=`	**not equal**	
`x != 8`	*true*	

`!==`	**not equal value or not equal type**	
`x !== 5`	*false*	

`x !== "5"`	*true*	
`x !== 8`	*true*

`===`	**strict equality**	
`x === 5`	*true*	
`x === "5"`	*false*	

`!==`	**strict non-equality**	
`3 !== "3"`; *true*


## console.log()
The `console.log()` method outputs a message to the web console. 
The message may be a single string, or it may be any one or more JavaScript objects.


## Running JavaScript From A Script!
We need to link the JS Script on an HTML file, its better to do it at the end of the file so the website can load first (faster for the user to see it)


# Conditional statements

## If Statements
This condition is simply anything that evaluates to true or false.
**Only runs code if given condition is true**

## Else-If
The if statement executes a statement if a specified condition is truthy. 
If the condition is falsy, another statement can be executed.

## Else
Always comes on the end.

```
if (condition1)
  statement1
else if (condition2)
  statement2
else if (condition3)
  statement3
...
else
  statementN
```

```
if (x > 50) {
  /* do something */
} else if (x > 5) {
  /* do something */
} else {
  /* do something */
}
```

## Truth-y & False-y Values
In JavaScript, a **truthy** value is a value that is considered true when encountered in a Boolean context.
**All values are truthy unless they are defined as falsy** (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).

## Logical AND
Both sides must be true, for the entire thing to be true

## Logical OR
If one side is true, the entire thing is true

## Logical NOT
!expression returns true if expression is false
