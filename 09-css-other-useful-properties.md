## Opacity
The degree to which content behind an element is hidden, and is the opposite of transparency.

`<alpha-value>`
A `<number>` in the range 0.0 to 1.0, inclusive, or a `<percentage>` in the range 0% to 100%, inclusive, representing the opacity of the channel

#### Value	
0 `->` The element is fully transparent (that is, invisible).
Any `<number>` strictly between 0 and 1 `->` The element is translucent (that is, content behind the element can be seen).
1 (default value) `->` The element is fully opaque (visually solid).


## Transparency 
If you do not want to apply opacity to child elements, like in our example above, use RGBA color value with an alpha channel (RGBA) - which specifies the opacity for a color.

An RGBA color value is specified with: rgba(red, green, blue, alpha). The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (fully opaque).
```
div {
  background: rgba(76, 175, 80, 0.3) /* Green background with 30% opacity */
}
```

# Position

Sets how an element is positioned in a document. 
The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.

Values
#### Static
The element is **positioned according** to the **normal flow** of the document.  (default value).

#### Relative
The element is **positioned according** to the **normal flow** of the document, and then **offset relative to itself based on the values of top, right, bottom, and left.** 
The offset does not affect the position of any other elements; thus, the space given for the element in the page layout is the same as if position were static.


#### Absolute
The element is **removed from the normal document flow**, and no space is created for the element in the page layout. It is** positioned relative to its closest positioned ancestor**, if any; otherwise, it is placed relative to the initial containing block. Its **final position is determined by the values of top, right, bottom, and left**.

#### Fixed
The element is **removed from the normal document flow**, and no space is created for the element in the page layout. It is **positioned relative to the initial containing block established by the viewport**, except when one of its ancestors has a transform, perspective, or filter property set to something other than none in which case that ancestor behaves as the containing block. **Its final position is determined by the values of top, right, bottom, and left.**

#### Sticky
The element is **positioned according to the normal flow of the document**, and **then offset relative to its nearest scrolling ancestor and containing block** (nearest block-level ancestor), including table-related elements, based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements.

## Transition

Transitions enable you to define the transition between two states of an element. Different states may be defined using pseudo-classes like :hover or :active or dynamically set using JavaScript.

- transition-delay
- transition-duration
- transition-property
- transition-timing-function  
    * lets you establish an acceleration curve so that the speed of the transition can vary over its duration.

## Transforms
Defines how elements styled with CSS can be transformed in two-dimensional or three-dimensional space.