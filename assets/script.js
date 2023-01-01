// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = dayjs().format('[Today is] dddd[,] MMMM DD[,] YYYY');
$('#currentDay').text(currentDay);
var currentTime = parseInt(dayjs().format('H'))
console.log('current Time', currentTime)

let hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

const mainContainer = $('#container') 


function displayHours() {

  for (let i = 0; i < hours.length; i++) {
  
    let row = $("<div class='row'>");

    let colHour = $("<div class='col-sm-2 col-md-1 py-3 hour text-center'>")

    let americanHours = hours[i] + ' AM';

    if(hours[i] >= 12){
      americanHours = hours[i] + ' PM';
      if(hours[i] >= 13){
        americanHours = hours[i] - 12 + ' PM';
      }
    }

    colHour.append(americanHours)


    let colText = $("<div class='col-8 col-md-10'>")
    
    let textArea = $("<textarea class='col-12 description' rows='3'>")
    textArea.attr('id', 'textArea'+i)


    colText.append(textArea)

    if(currentTime > hours[i]){
      textArea.addClass('past')
    }
    if(currentTime < hours[i]){
      textArea.addClass('future')
    }
    if(currentTime == hours[i]){
      textArea.addClass('present')
    }




    let colSave = $("<div class='col-2 col-md-1'>")
    let button = $("<button>")
    button.addClass("saveBtn btn fas fa-save")
    button.attr('id', 'submit'+[i])
    button.text('')
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
