// review Unit 5 before
// I could not get previous rows and columns to work (oldscript.js), I had a friend look at my code and they mentioned
// template literals and was able to get the code to flow. I was out of my element but as thier
// insight got the columns to work - I kept using to finish - still took me 10 hours.
function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        $(`#text${key}`).text(value);
    }
}
$(document).ready(function() {   
// need date and current time to show up and connect
// to #currentDay - look up create element in jquery
    var presentTime = moment().format('MMMM Do YYYY, h:mm a');
    let $currentDay = $("#currentDay");
    $currentDay.text(presentTime);
    console.log(currentDay);


    var $calendar = $(".container");
    
   // need enough rows for set time of working hours
    for (let i = 9; i < 20; i++) {

    // build rows and columns in jquery not javascript - 
    // I spent lots of time writing out element creation like last homework and it did not look right nor work
    // found on jquery after a friend mentioned "template literals"and it all came together, found out using ` allows i to be called through out code
       var $rowDiv = $(`<div data-time=${i} id="${i}" class="row">`);
    
    // 1st section on event Planner that shows time
    // row should start with time (hourly - 1/4 row)
    // set time frame on calendar also .time-block
       var $timeDiv = $('<div class="col-md-2"><p class="hour">' + getAMPM(i) + '</p>');
        
    // 2nd part of planner that shows text input
    // text area to put event (span/label?/look back at hw 4)
    // (textarea in CSS)
        var $eventPlanner = $(`<div class="col-md-8"><textarea id=text${i} class="description"></textarea>`);
        
        var $buttonDiv = $(`<div class="col-md-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`);
            
            $rowDiv.append($timeDiv);
            $rowDiv.append($eventPlanner);
            $rowDiv.append($buttonDiv);

            $calendar.append($rowDiv);
        getLocalStorage(i);
        }
    // function to show time in 1st column
        function getAMPM(hours){
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12;
            return hours + ampm;
    }
    getAMPM();
    // create function to link current time to time on planner
    // past hours need to (.past)
    // present hour need to (.present) 
    // future hours need to (.future)
    // used template literals to get colorCoding to work by pulling ID from eventPlanner
        function colorCoding(){
            var currentTime = new Date().getHours();
            for (var i = 9; i < 20; i++) { 
            
             if ($(`#${i}`).data("time") == currentTime){
                $(`#text${i}`).addClass( "present");
            } else if (currentTime < $(`#${i}`).data("time")) {
                $(`#text${i}`).addClass( "future");
            } else $(`#text${i}`).addClass("past");
        }
    }
    console.log(colorCoding);

    // runs colorCoding through out time frame
    setInterval(function() {
        colorCoding();
    }, 1000);

    // create function to input text and tie to internal storage   
    var saveButton = $('.saveBtn');
    saveButton.on('click', function(){
        let eventId = $(this).attr('id');
        let eventText = $(this).parent().siblings().children('.description').val();
        getLocalStorage.setItem(eventId, eventText);
        });
     console.log(getLocalStorage)
   
});
       
    
 
  

