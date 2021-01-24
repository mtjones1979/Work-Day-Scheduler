// review Unit 5 before
$(document).ready(function() {
   
    // need date and current time to show up and connect
    // to #currentDay - look up create element in jquery
     
    var presentTime = moment().format('MMMM Do YYYY, h:mm a');
    let $currentDay = $("#currentDay");
    $currentDay.text(presentTime);
    console.log(currentDay);


    // create function to input text and tie to internal storage
//     var storedEvents = JSON.parse(localStorage.getItems("storedEvents"));
//     if (storedEvents !== null) {
//        planText = storedEvents;
//    }  
    
    
    var $calendar = $(".container");
    $calendar.empty();

    
   // build rows and columns in jquery not javascript - 
   // need enough rows for set time of working hours
   
   for (var hour = 9; hour <= 17; hour ++) {
       var index = hour - 9;
    // 1st section on event Planner that shows time
    // row should start with time (hourly - 1/4 row)
    // set time frame on calendar also .time-block

       var $rowDiv = $("<div>");
       $rowDiv.addClass("row");
       $rowDiv.addClass(".row");
       $rowDiv.attr("hour-index", hour);
       
       var $timeDiv = $("<div>");
       $timeDiv.addClass('col-md-2');

       var $timeBlock = $("<span>")
       $timeBlock.attr("class", "time-block");

       let displayHour = 0;
       let ampm = "";
       if (hour > 12) {
           displayHour = hour - 12;
           ampm = "pm";
        } else {
           displayHour = hour;
           ampm = "am";
        }
        $timeBlock.text("{displayHour} + {ampm}");

        $rowDiv.append($timeDiv);
        $timeDiv.append($timeBlock);
  
        
        
        // 2nd part of planner that shows text input
        // text area to put event (span/label?/look back at hw 4)
        // (textarea in CSS)
        var $eventPlanner = $("<input>");

        $eventPlanner.attr("class", "description-${index}");
        $eventPlanner.attr("hour-index", index);
        $eventPlanner.attr("type", "text");
        $eventPlanner.attr("id", "textarea");

        // $eventPlanner.val(planText[index]);

        var $inputDiv = $("<div>");
        $inputDiv.addClass("col-md-9");

        $rowDiv.append($inputDiv);
        $inputDiv.append($eventPlanner);

    // button (.saveBtn, .saveBtn i: hover to click on to save content - 
    // <i class="fas fa-save"></i>
        // var saveBtn = ""
        var $buttonDiv = $("<div>");
        $buttonDiv.addClass("col-md-1");

        var $saveBtn = $("<i>");
        $saveBtn.attr("class", "saveid-${index}");
        $saveBtn.attr("save-id", index);
        $saveBtn.attr("class", "fas fa-save saveBtn");

        $rowDiv.append($buttonDiv);
        $buttonDiv.append($saveBtn);

        // $updateRowColor($rowDiv, hour);
        $calendar.append($rowDiv);
    console.log($rowDiv);
    };
    // create function to link current time to time on planner
    // past hours need to (.past)
    // present hour need to (.present) 
    // future hours need to (.future)

    
    // $("#first-number, #second-number, #operator, #result").empty();
 });
