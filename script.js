// review Unit 5 before
$(document).ready(function() {
   
    // need date and current time to show up and connect
    // to #currentDay - look up create element in jquery
     
    var presentTime = moment().format('MMMM Do YYYY, h:mm a');
    let $currentDay = $("#currentDay");
    $currentDay.text(presentTime);
    console.log(currentDay);

    
   // build rows and columns in jquery not javascript
    // row should start with time (hourly - 1/4 row)
    // set time frame on calendar also .timeblock

    // text area to put event (span/label?/look back at hw 4)
    // (textarea in CSS)

    // button (.saveBtn, .saveBtn i: hover to click on to save content - 

    
    // create function to input text and tie to internal storage

    // create function to link current time to time on planner
    // past hours need to (.past)
    // present hour need to (.present) 
    // future hours need to (.future)

    
    // $("#first-number, #second-number, #operator, #result").empty();
});
