// review Unit 5 before
// commented out my previous try at the scheduler lay out - could not get it 
// to work and found a different way but wanted to make sure you saw my progress


$(document).ready(function() {
   
    // need date and current time to show up and connect
    // to #currentDay - look up create element in jquery
    // function init(){
    var presentTime = moment().format('MMMM Do YYYY, h:mm a');
    let $currentDay = $("#currentDay");
    $currentDay.text(presentTime);
    console.log(currentDay);
    // }
    var $calendar = $(".container");
    $calendar.empty();
    
    // build rows and columns in jquery not javascript - 
   // need enough rows for set time of working hours
   
       for (let i = 9; i < 18; i++) {
    
    // 1st section on event Planner that shows time
    // row should start with time (hourly - 1/4 row)
    // set time frame on calendar also .time-block

    
       var $rowDiv = $('<div data-time=${i} id="${i}" class="row">');
        // $rowDiv.addClass("row");
        // $rowDiv.attr(");
        // $rowDiv.attr("hour-index", i);
       
       var $timeDiv = $('<div class="col-md-2"><p class="hour">' + getAMPM(i) + '</p>');
        // $timeDiv.addClass('col-md-2');
        // $timeDiv.attr("class", "time-block");
        // var $timeBlock = $("<span>")
        // $timeBlock.attr("class", "time-block");
        // $timeBlock.text("${displayHour} ${ampm}");
        // $rowDiv.append($timeDiv);
        // $timeDiv.append($timeBlock);
  
        
        
        // 2nd part of planner that shows text input
        // text area to put event (span/label?/look back at hw 4)
        // (textarea in CSS)
        var $eventPlanner = $('<div class="col-md-9 past"><textarea id=text${i} class="description"></textarea>');

        // $eventPlanner.attr("class", "input-{index}");
        // $eventPlanner.attr("hour-index", index);
        // $eventPlanner.attr("type", "text");
        // $eventPlanner.attr("id", "textarea");
        // $eventPlanner.val(planText[index]);
        // console.log($eventPlanner);
        // var $inputDiv = $("<div>");
        // $inputDiv.addClass("col-md-9");
        // $inputDiv.attr("id", "textarea")
        // $rowDiv.append($inputDiv);
        // $inputDiv.append($eventPlanner);
        
        var $buttonDiv = $('<div class="col-md-1"><button class="saveBtn" id=${i}><i class="fas fa-save"></i>');
        // var $buttonDiv = $('<div>');
        // $buttonDiv.addClass("col-md-1");
        // $buttonDiv.addClass("saveBtn", i);
        // var $saveBtn = $("<i>");
        // $saveBtn.attr("class", "${index}");
        // $saveBtn.attr("saveBtn", i);
        // $saveBtn.attr("class", "fas fa-save saveBtn");
        // $rowDiv.append($buttonDiv);
        // $buttonDiv.append($saveBtn);
        // $updateRowColor($rowDiv, hour);
        // $calendar.append($rowDiv);
  
            $rowDiv.append($timeDiv);
            $rowDiv.append($eventPlanner);
            $rowDiv.append($buttonDiv);

            $calendar.append($rowDiv);
            timeBlocks.push($rowDiv);
    

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
    // create function to link current time to time on planner
    // past hours need to (.past)
    // present hour need to (.present) 
    // future hours need to (.future)
});