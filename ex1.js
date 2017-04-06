//Write a jQuery statement that selects all <h2> tags
$("h2")

//Write a jQuery statement that selects the tag with ID="first"
$("#first")

//Using jQuery, create a click event on a button with ID of 'hidediv' that will hide a div tag with an ID of 'hideme'.
//(For reference, jQuery has a .hide() method)
$("#hidediv").click(function() {
  .hide("hideme");
});

//Using jQuery, create a mouseover event on all H1 tags that writes the message 'MouseOver on H1' using console.log().
$( "h1" ).mouseover(function() {
  console.log( "MouseOver on h1" );
});

//Create a jQuery statement that causes anchor to disappear when clicked.
//The anchor tags are each contained within a p tag and all p tags are contained in a div
$("p").click(function(){
    $("p").hide(1000);
});
//Write a jQuery statement that adds a button control with an ID of 'SubmitMe'
//and displays the text 'Login' to a paragraph control that uses a class of 'highlight'.
$("div").append("<button>Click me!</button>").text("Login");

//Write a jQuery statement that displays nothing more than a label control containing 'Update Unsuccessful!' within a div with an ID of 'message'.
//For a bigger challenge, make the text display in red.


//Write a jQuery statement to set a text box with an ID of 'userid' to the value of 'gwashington'.

//Write a jQuery statement to set the selected value of a listbox with the ID of 'states' to the item with the value of 'NY'. Make sure the cause the event to fire.

//Write a jQuery statement to set the value of a label control with the class of 'alert' to the value of 'Emergency Failure!!!'.
