"use strict";
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
setInterval(() => {
  let currentTime = new Date(); // Will get the current date and time
  // Will get the hours, minutes and seconds from the current time and display them in the respective elements
  hrs.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  // The above line checks if the hours are less than 10, if yes it adds a "0" before the hours to maintain the format of HH:MM:SS
  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  // The above line checks if the minutes are less than 10, if yes it adds a "0" before the minutes to maintain the format of HH:MM:SS
  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
  // The above line checks if the seconds are less than 10, if yes it adds a "0" before the seconds to maintain the format of HH:MM:SS
}, 1000);
// Will call the function every 1000 milliseconds (1 second)
