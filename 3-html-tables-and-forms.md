# Table

The `<table>` HTML element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.

#### Simple table example
```<table>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```

# Form

* The form element "represents a document section containing **interactive controls for submitting information*.**"
* The action attribute specifies WHERE the form data should be sent.
* The method attribute specifies which HTTP method should be used.

## Input

* The input element is used to create a variety of different **form controls**.
* We have **20+ possible types** of inputs, ranging from date pickers to checkboxes.
* The **type** attribute alters the input's **behavior and appearance**.

## Label

* HTML label acts as a caption for a specified element.
* It is very convenient to use HTML label for `<input>` elements. It increases the clickable area, as clicking the label activates the input as well.
* An `input` element can also be nested inside the HTML label tag.

To associate the `<label>` with an `<input>` element, you need to give the `<input>` an id attribute. The `<label>` then needs a `for` attribute whose value is the same as the input's id.

## Button

The `<button>` HTML element represents a clickable button, used to submit forms or anywhere in a document for accessible, standard button functionality.

### type
The default behavior of the button possible values are:

* **submit**: The button submits the form data to the server. This is the default if the attribute is not specified for buttons associated with a `<form>`, or if the attribute is an empty or invalid value.
* **reset:** The button resets all the controls to their initial values, like `<input type="reset">`. (This behavior tends to annoy users.)
* **button:** The button has no default behavior, and does nothing when pressed by default. It can have client-side scripts listen to the element's events, which are triggered when the events occur.

**formaction**
The URL that processes the information submitted by the button. Overrides the action attribute of the button's form owner. Does nothing if there is no form owner.

#### checkbox
`<input>` elements of type `checkbox` are rendered by default as boxes that are checked (ticked) when activated.

```Note: Radio buttons are similar to checkboxes, but with an important distinction — radio buttons are grouped into a set in which only one radio button can be selected at a time, whereas checkboxes allow you to turn single values on and off. 
```

#### Required
The Boolean required attribute, if present, indicates that the user must specify a value for the input before the owning form can be submitted.
