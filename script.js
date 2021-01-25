// review Unit 5 before
// create function to input text and tie to internal storage
function getLocalStorage(key){
    let value = localStorage.getItem(key);
    if(value){
        $('#text${i}').text(value);
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
    $calendar.empty();

    // build rows and columns in jquery not javascript - 
   // need enough rows for set time of working hours
   
       for (let i = 9; i < 18; i++) {
            // let index = hour - 9;
    // 1st section on event Planner that shows time
    // row should start with time (hourly - 1/4 row)
    // set time frame on calendar also .time-block

    // I spent lots of time writing out elements creation like last homework
    // found on jquery about adding all together - works better 
       var $rowDiv = $('<div data-time=${i} id="${i}" class="row">');
    //    $rowDiv.addClass("row");
    //    $rowDiv.attr(");
    //    $rowDiv.attr("hour-index", i);
       
       var $timeDiv = $('<div class="col-md-2"><p class="hour">' + formatAMPM(i) + '</p>');
    //    $timeDiv.addClass('col-md-2');
    //    $timeDiv.attr("class", "time-block");

    //    var $timeBlock = $("<span>")
    //    $timeBlock.attr("class", "time-block");

    //    let displayHour = 0;
    //    let ampm = "";
    //    if (i > 12) {
    //        displayHour = i - 12;
    //        ampm = "pm";
    //     } else {
    //        displayHour = i;
    //         ampm = "am";
            
        // }
        // $timeBlock.text("${displayHour} ${ampm}");

        // $rowDiv.append($timeDiv);
        // $timeDiv.append($timeBlock);
  
        
        
        // 2nd part of planner that shows text input
        // text area to put event (span/label?/look back at hw 4)
        // (textarea in CSS)
        var $eventPlanner = $('<div class="col-md-8 past"><textarea id=text${i} class="description"></textarea>');

        // $eventPlanner.attr("class", "input-{index}");
        // // $eventPlanner.attr("hour-index", index);
        // $eventPlanner.attr("type", "text");
        // // $eventPlanner.attr("id", "textarea");

        // // $eventPlanner.val(planText[index]);
        // console.log($eventPlanner);
        // var $inputDiv = $("<div>");
        // $inputDiv.addClass("col-md-9");
        // $inputDiv.attr("id", "textarea")
        
        // $rowDiv.append($inputDiv);
        // $inputDiv.append($eventPlanner);
        

    // button (.saveBtn, .saveBtn i: hover to click on to save content - 
    
        // var saveBtn = ""
        var $buttonDiv = $('<div class="col-md-2"><button class="saveBtn" id=${i}><i class="fas fa-save"></i>');
        // var $buttonDiv = $('<div>');
        // $buttonDiv.addClass("col-md-1");
        // $buttonDiv.addClass("saveBtn", i);
        // var $saveBtn = $("<i>");
        // // $saveBtn.attr("class", "${index}");
        // // $saveBtn.attr("saveBtn", i);
        // $saveBtn.attr("class", "fas fa-save saveBtn text-center");

        // $rowDiv.append($buttonDiv);
        // $buttonDiv.append($saveBtn);

    //     // $updateRowColor($rowDiv, hour);
    //     $calendar.append($rowDiv);
    // console.log($rowDiv);
            $rowDiv.append($timeDiv);
            $rowDiv.append($eventPlanner);
            $rowDiv.append($buttonDiv);

            $(".container").append($rowDiv);
            getLocalStorage(i);
    }

    function formatAMPM(hours){
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        return hours + ampm;
    }
    formatAMPM();
    // create function to link current time to time on planner
    // past hours need to (.past)
    // present hour need to (.present) 
    // future hours need to (.future)

});
