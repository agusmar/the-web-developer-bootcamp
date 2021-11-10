# CSS selectors

In CSS, selectors are used to **target** the HTML elements on our web pages that we want to **style**. 

 A CSS selector is the first part of a CSS Rule
 * A CSS rule is a grouping of one or more CSS properties which are to be applied to one or more target HTML elements. 
 * A CSS rule consists of a CSS selector and a set of CSS properties. 

## Descendent selector
Represented by a single space ( ) character — combines two selectors such that elements matched by the second selector are selected if they have an ancestor

```/* List items that are descendants of the "my-things" list */
ul.my-things li {
  margin: 2em;
}
```

## Adjacent & direct descendent selectors
The **adjacent** sibling combinator (+) separates two selectors and matches the second element only if it immediately follows the first element, and both are children of the same parent element.
```
/* Paragraphs that come immediately after any image */
img + p {
  font-weight: bold;
}
```
The **direct** descendent of an elemtent (not common)
```div > li {
    color: white;
}
```

## Atribute selector


## Pseudo classes
A CSS pseudo-class is a **keyword** added to a selector that **specifies a special state** of the selected element(s). 
For example
* `:hover`
* `:visited`
* `:checked`

## Pseudo elements
A CSS pseudo-element is a **keyword** added to a selector that lets you **style a specific part** of the selected element(s). For example, `::first-line` can be used to change the font of the first line of a paragraph.
```
/* The first line of every <p> element. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

## CSS Cascade
The **order** your styles are declared in and linked to **matters**

## Specificity
* How the browser decides which rules to apply when multiple rules could apply to the same element.
* It is a measure of how specific a given selector is. 
* The more specific selector "wins"
* It only applies when there's a conflict
https://specificity.keegan.st/

## Inline styles & important
Override the styles and this are the highest in specificity

