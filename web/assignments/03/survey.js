function submitForm() {
  // TODO: create the function
}

function setup() {
  // Instantiate a slider
  var mySlider = $("input.slider").slider();

  // Call a method on the slider
  var value = mySlider.slider('getValue');

  // For non-getter methods, you can chain together commands
  mySlider
    .slider('setValue', 5)
    .slider('setValue', 7);
}
