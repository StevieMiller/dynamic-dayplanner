// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = dayjs().format('[Today is] dddd[,] MMMM DD[,] YYYY');
console.log(currentDay)
$('#currentDay').text(currentDay);

$(document).ready(function() {
  console.log('ready!');
  loadTasks();
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
    // Checks condition on time
    if(currentTime < timeEl) {
      // append class of past/present/future to time blocks
      let pastTime = document.getElementById('hour');
      pastTime.classList.add('past');
      pastTime.classList.remove('present');
      pastTime.classList.remove('future');
    } else if (currentTime === timeEl) {
      let presentTime = document.getElementById('hour');
      presentTime.classList.remove('past');
      presentTime.classList.add('present');
      presentTime.classList.remove('future');
    } else if (currentTime > timeEl) {
      let futureTime = document.getElementById('hour');
      futureTime.classList.remove('past');
      futureTime.classList.remove('present');
      futureTime.classList.add('future');
    }
    }
  }

  // const currentHour = new Date().getHours();

  // for (let hour = 8; hour <= 17; hour++) {
  //   if (currentHour === hour) {
  //     const elements = document.querySelectorAll('.time-block');
  //     elements.forEach(element => element.classList.add('present'));
  //   } else if (currentHour < hour) {
  //     const elements = document.querySelectorAll('.time-block');
  //     elements.forEach(element => element.classList.add('past'));
  //   } else if (currentHour > hour) {
  //     const elements = document.querySelectorAll('.time-block');
  //     elements.forEach(element => element.classList.add('future'));
  //   } 
  // }

// Create HTML elements using jQuery
// Create a <div> with an id

    // next is to create html element using jquery
    //next is to append class to such elements
    //next is to remove classes from elements
  
// Save tasks to local storage when save button is clicked
$('.saveBtn').click(function() {
  var tasks = [];
  $('.description').each(function() {
    tasks.push($(this).val());
  });

  // Save the tasks to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
});
// Load the tasks from local storage when the page loads
function loadTasks() {
  // Get the tasks from local storage
  var tasks = JSON.parse(localStorage.getItem('tasks'));

  // Set the value of the input fields to the saved tasks
  if(tasks) {
    $('.description').each(function(index) {
      $(this).val(tasks[index]);
    });
  }
}


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
  
 
