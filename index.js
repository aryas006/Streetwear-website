function displaySelectedOption() {
  var selectElement = document.getElementById("size");
  var selectedOption = selectElement.options[selectElement.selectedIndex].value;
}

var t = 0;

function displayNumber() {
  t = t + 1;
  var ele = document.getElementsByClassName("number-cart")[0]; // Access the first element with the class "number-cart"
  ele.innerText = t;// Declare and initialize the variable t to 0
  // Increment t by 1
  // Assign the value of t to the inner text of the element
}
