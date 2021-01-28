// review Unit 5 before
// I could not get previous rows and columns to work (oldscript.js),
// I had a friend look at my code to help and they explained template literals(with guidance), to condense into simpler structure/form 
// and was able to get code color to work.
// I was out of my element but as their insight got the columns to work and color code to flow.
// Since they had helped me alot, I did not want to ask for their help with time display and internal storage.
// I was able to get the day planner set up to parameters until the final save button and internal storage
// I have a tutor appt for Friday to finish that portion.
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
       var $rowDiv = $(`<div data-time=${i} id="${i}" class="row">`);
    
    // 1st section on event Planner that shows time
    // row should start with time (hourly - 1/4 row)
    
       var $timeDiv = $('<div class="col-md-2"><p class="hour">' + displayHour(i) + '</p>');
        
    // 2nd part of planner that shows text input
    // text area to put event (span/label?/look back at hw 4)
    // (textarea in CSS)
        var $eventPlanner = $(`<div class="col-md-8"><textarea id=event${i} class="description"></textarea>`);
        
        var $buttonDiv = $(`<div class="col-md-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i></button>`);
            
            $rowDiv.append($timeDiv);
            $rowDiv.append($eventPlanner);
            $rowDiv.append($buttonDiv);

            $calendar.append($rowDiv);
        }
           
    function displayHour(hours){
        let displayHour1 = 0;
           let ampm = "";
           if (hours >= 12) {
               ampm = "pm";
            } else {
               displayHour1 = hours;
               ampm = "am";
            }
            return hours + ampm;
        }
           displayHour();
    
    // create function to link current time to time on planner
    // past hours need to (.past)
    // present hour need to (.present) 
    // future hours need to (.future)
    // used template literals to get colorCoding to work by pulling ID from eventPlanner
        function colorCoding(){
            var currentTime = new Date().getHours();
            for (var i = 9; i < 20; i++) { 
            
             if ($(`#${i}`).data("time") == currentTime){
                $(`#event${i}`).addClass( "present");
            } else if (currentTime < $(`#${i}`).data("time")) {
                $(`#event${i}`).addClass( "future");
            } else $(`#event${i}`).addClass("past");
        }
    }
    console.log(colorCoding);

    // runs colorCoding through out time frame
    setInterval(function() {
        colorCoding();
    }, 1000);

    // create function to input text and tie to internal storage   
    
    
    // var value = localStorage.getItem("key");
    // function getLocalStorage(event) {
    //     if (value) 
    //     $(`#event${key}`).text(value);
    //     console.log(value)
    // }

    $('.saveBtn').on('click', function(){
        var eventText = $(this).parent().children($eventPlanner).val();
       
        var dataEl = $(this).parent().data("time");

        localStorage.setItem(dataEl, eventText);

    })
});
       
    
 
  

