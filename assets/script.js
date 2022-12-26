// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
  console.log('ready!');

// array storing the hours
  let hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

// for loop checks for the hours and index
  for (let i = 0; i < hours.length; i++) {
    const element = hours[i];
    console.log('hour-' + element )
    var currentTime = dayjs().format('H')
    console.log(currentTime)

    if(currentTime < element){
      // append class of past to time block
      let pastTime = document.getElementById("hour");
      pastTime.classList.add("past");
    } else if (currentTime === element) {
      let presentTime = document.getElementById("hour");
      presentTime.classList.add("present");
    } else if (currentTime > element) {
      let futureTime = document.getElementById("hour");
      futureTime.classList.add("future");
    }

    }

    //next is to check condition on time
    // next is to create html element using jquery
    //next is to append class to such elements
    //next is to remove classes from elements
    



  const textAreaValue = document.getElementById('textArea')
  
  function saveData() {
    // var description = $('.description').val();
    // localStorage.setItem('description', description);

    var description = $('#description').val();
    localStorage.setItem('description', description)
    console.log(description)


  }
  // WHEN save button is clicked
  var saveBtn = $('.saveBtn');
  saveBtn.on('click', saveData)


  // THEN description input is saved to local storage
    // The child element of the div id="hour-9" is the <textarea>
    // should I add an id of description? Or do I have to use #hour-9?
    // If I add id="description", I can grab the <textarea>
  var childOne = document.querySelector('#description') 
  // console.log(childOne)
    // If I traverse up the DOM, I can grab the parent element
  var parent = childOne.parentElement
  // console.log(parent)

  // THIS WORKS
  // var description grabs input from <textarea> and stores in local storage
  var storedData = localStorage.getItem('description');
  console.log('stored data',storedData)
  // writes storedData to page
  textAreaValue.textContent = storedData

  // THIS DOESN'T
  // This code uses #hour-9 as key but doesn't store the value input from <textarea>
  // I think I need to drill down to the <textarea> to grab the user input
  
  // WHEN time moves past a time slot
    // Use dayjs to create a function that checks for the time 
  // THEN the color of the slot changes
    // Use parent/child DOM traversal to add/remove classes and styling to/from the time slots
    // Add function(s) that apply/remove CSS styling
    // Use if/else statement to compare time-block hour to current hour
  });
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
   var currentDay = dayjs().format('MM-DD-YYYY');
   console.log(currentDay)
   $('#currentDay').text(currentDay);
 });
  
 
