// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = dayjs().format('[Today is] dddd[,] MMMM DD[,] YYYY');
$('#currentDay').text(currentDay);
var currentTime = parseInt(dayjs().format('H'))
  // console.log('current Time', currentTime)

let hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

const mainContainer = $('#container') 

// Function that adds html elements dynamically
function displayHours() {

  // Loops through hours 
  for (let i = 0; i < hours.length; i++) {
  // Adds <div> with class of 'row'
    let row = $("<div class='row'>");
  // Defines the column that the hour is displayed in
    let colHour = $("<div class='col-sm-2 col-md-1 py-3 hour text-center'>")
  // 
    let clockHours = hours[i] + ' AM';
  // Checks time to convert to 12-hour clock time
    if(hours[i] >= 12){
      clockHours = hours[i] + ' PM';
      if(hours[i] >= 13){
        clockHours = hours[i] - 12 + ' PM';
      }
    }
  // Appends hours to page
    colHour.append(clockHours)

    // Defines user text input area
    let colText = $("<div class='col-8 col-md-10'>")
    
    let textArea = $("<textarea class='col-12 description time-block' rows='3'>")
    textArea.attr('id', 'textArea'+i)


    colText.append(textArea)
  // Checks for time and applies past/present/future accordingly 
  // If current time is greater than the hours index, apply past class
    if(currentTime > hours[i]){
      textArea.addClass('past')
  // If current time is less than the hours index, apply future class
    }
    if(currentTime < hours[i]){
      textArea.addClass('future')
  // If current time is equal to the hours index, apply present class
    }
    if(currentTime == hours[i]){
      textArea.addClass('present')
    }



// Adds save button
    let colSave = $("<div class='col-2 col-md-1'>")
    let button = $("<button>")
    button.addClass("saveBtn btn fas fa-save")
    button.attr('id', 'submit'+[i])
    colSave.append(button)


    
    mainContainer.append(row.append(colHour, colText, colSave))

  }
// Function that saves tasks to local storage
  $('.saveBtn').click(function() {
    console.log('click');
    var tasks = [];
    $('.description').each(function() {
      tasks.push($(this).val());
    });
  
    // Save the tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
  // Load the tasks from local storage when the page loads
    var tasks = JSON.parse(localStorage.getItem('tasks'));
  
    // Set the value of the input fields to the saved tasks
    if(tasks) {
      $('.description').each(function(index) {
        $(this).val(tasks[index]);
      });
    }
  }



displayHours();
