
// Get the root element
var r = document.querySelector(':root');

// Create a function for getting a variable value
function myColor_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  alert("The value of --primary is: " + rs.getPropertyValue('--primary'));
}

// Create a function for setting a variable value
function myColor_set(e) {
    e.preventDefault();
  // Set the value of variable --primary to another value (in this case "lightblue")
  var newColor=e.target.value;
  r.style.setProperty('--primary',newColor );
}
