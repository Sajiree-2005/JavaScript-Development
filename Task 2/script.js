"use strict";
function appendValue(value) {
  // Append the clicked button's value to the display
  document.getElementById("display").value += value;
}
function clearDisplay() {
  // Clear the display when the "C" button is clicked
  document.getElementById("display").value = "";
}
function deleteLast() {
  // Remove the last character from the display when the "DEL" button is clicked
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
function calculate() {
  // Evaluate the expression in the display when the "=" button is clicked
  let display = document.getElementById("display");
  try {
    display.value = new Function("return " + display.value)();
  } catch {
    display.value = "Error";
  }
}
