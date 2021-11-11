# CSS basic box model

When laying out a document, the **browser's** rendering engine **represents** each **element as a rectangular box** according to the standard CSS basic box model. 

#### For this boxes, CSS determines:
* size
* position
* properties (color, background, border size, etc.)

Every box is composed of **four parts** (or areas), **defined by** their respective **edges**: 
* the content edge
* padding edge
* border edge
* and margin edge

### Content area
The content area, bounded by the content edge, contains the "real" content of the element, such as text, an image, or a video player.

The content area's size can be explicitly defined with:
* width, 
* min-width
* max-width 
* height
* min-height
* max-height

### Padding area
The padding area is between the border and the content (it's inside the box)
The thickness of the padding is determined by:
* padding-top 
* padding-right 
* padding-bottom
* padding-left

### Border Properties

* BORDER-WIDTH
    * Controls the thickness of the border.
* BORDER-COLOR
    * Controls the...color of the border
* BORDER-STYLE
    * Controls the line style - dashed, solid, etc.

## Display property
* Inline elements fit in alongside other elements
* Block level elements take up a whole "block" of space.

### INLINE
Width & Height are ignored. Margin & padding push elements away horizontally but not vertically.

### BLOCK
Block elements break the flow of a document. Width, Height, Margin, & Padding are respected.

### INLINE-BLOCK
Behaved like an inline element except Width, Height, Margin, & Padding are respected

## EM
With font-size, 1em equals the font-size of the parent.  
2em's is twice the font-size of the parent, etc.

## REM
Relative to the root html element's font-size. Often easier to work with.
If the root font-size is 20px, 1 rem is always 20px, 2rem is always 40px, etc