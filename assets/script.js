// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = dayjs().format('MM-DD-YYYY');
console.log(currentDay)
$('#currentDay').text(currentDay);

$(document).ready(function() {
  console.log('ready!');
  updateColor();
})
// array storing the hours
let hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

function updateColor() {
// for loop checks for the hours and index
  for (let i = 0; i < hours.length; i++) {
    const timeEl = hours[i];
    console.log('hour-' + timeEl )
    var currentTime = dayjs().format('H')
    console.log(currentTime)
    if (currentTime < timeEl) {

    }
  }}
// Create HTML elements using jQuery
// Create a <div> with an id

    //next is to check condition on time
    // next is to create html element using jquery
    //next is to append class to such elements
    //next is to remove classes from elements
    
  const textAreaValue = document.querySelectorAll('.description')
  
  function saveData() {
    var description = $('.description').val();
    localStorage.setItem('.description', description)
    console.log(description)
  }
  // WHEN save button is clicked
  var saveBtn = $('.saveBtn');
  saveBtn.on('click', saveData)

  // var description grabs input from <textarea> and stores in local storage
  var storedData = localStorage.getItem('.description');
  console.log('stored data',storedData)
  // writes storedData to page
  textAreaValue.textContent = storedData

 $(function () {
   
   // TODO: Add a listener for click events on the save button. This code should
   // use the id in the containing time-block as a key to save the user input in
   // local storage. HINT: What does `this` reference in the click listener
   // function? How can DOM traversal be used to get the "hour-x" id of the
   // time-block containing the button that was clicked? How might the id be
   // useful when saving the description in local storage?
   //
   // TODO: Add code to apply the past, present, or future class to each time
   // block by comparing the id to the current hour. HINTS: How can the id
   // attribute of each time-block be used to conditionally add or remove the
   // past, present, and future classes? How can Day.js be used to get the
   // current hour in 24-hour time?
  
   //
   // TODO: Add code to get any user input that was saved in localStorage and set
   // the values of the corresponding textarea elements. HINT: How can the id
   // attribute of each time-block be used to do this?
   //
   // TODO: Add code to display the current date in the header of the page.

 });
  
 
