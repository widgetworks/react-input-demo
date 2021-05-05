# Functional component

Write a functional component that wraps a text input element.
  - the text input should not commit the user's input value immediately (i.e. the outside value should not change as the user types)
  - instead, it should commit the value when the user presses enter or leaves the input field
  - if the user presses the escape key then we should rollback to the last "committed" value (i.e. the last value that was in the field before the most recent edits were made).


## Live example for reference

For a live example of this editing behaviour, please see this calculator:
https://wm.widgetworks.com.au/widget/bimade/live

All of the numeric inputs (property value, loan amount, loan term, interest rate) use this behaviour.
