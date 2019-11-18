Create a simple HTML template with some styling
On this template you need an input field, a button and a table below
Give the button some nice styling (no HTML default button!) and the text "Add to shopping list ()"
When the button is clicked a spinner icon should appear inside the button (and it should spin)
After .5 seconds the spinner should disappear again
When you click the button and the input field is empty, display an error after the previous set animation (.5s)
When you click the button and the input field is NOT empty, then add the value to a table (in a new row) (also after the animation)
After the item is added to the table, reset the field (empty it out)
In between the parentheses, put the amount of current groceries in the table (make sure it's always correct going forward in this exercise)
In the table row, put a cross icon, make it clickable, when clicked it should delete the row
Add a button below the table, it should say save
When the button is clicked, it should save the groceries list in the local storage of the browser
When you reload the page, there should be 0 difference (groceries list remembered, crosses still clickable, ...)
Every new row that's added to the table should be slightly darker than the previous one (so it kind of creates a gradient from white to grey)
When you delete a row, the background colors of the rows below should shift up in brightness (as if no difference is visible)
Add an edit button next to the delete button, when clicked, it should change the grocery cell content into an input element with the cell's content as value
When you change the value (or you don't) and press enter, then the input element should change into regular content with the update value
Add a cross next to the first input field (top of the page) when it's value is not empty, clicking this cross empties out the field
When you add a grocery item, check whether it has already been added to the table, if so, display an error about it and don't add it
When you type clear in the first input box and press enter (not when you click the button!), it should clear out the entire table
When you type randomize and click the button (not when you press enter), you should randomize all the groceries in the table
When you remove a row in the table by clicking the cross, then animate the row out before actually deleting it
When you press the delete key and you're hovering over one of the rows, then delete it as you would when the cross would've been pressed
Add a delete button next to the add button, when you click it, it should search the table for a grocery with the name of the input field's value and if it finds it, delete it, otherwise show an error
Add a title to your page (that shows up in the current tab): The impossible game!
Add a button next to the save button, that says Go do groceries, when clicked a browsernotification popup should tell you to have fun at the store, also delete entire content of the table
Create a button in the top right of the table header, with a plus in there
When you click the button toggle between a plus and minus icon
When the icon is minus, the table should be visible, when it's plus it should be invisible
Animate this change when you click the button!
