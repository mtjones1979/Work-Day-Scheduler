// review Unit 5 before
$(document).ready(function() {   
// need date and current time to show up and connect
    // to #currentDay - look up create element in jquery
    var presentTime = moment().format('MMMM Do YYYY, h:mm a');
    let $currentDay = $("#currentDay");
    $currentDay.text(presentTime);
    console.log(currentDay);


    var $calendar = $(".container");
    // build rows and columns in jquery not javascript - 
   // need enough rows for set time of working hours

       for (let i = 9; i < 18; i++) {
    
    // 1st section on event Planner that shows time
    // row should start with time (hourly - 1/4 row)
    // set time frame on calendar also .time-block

    // I spent lots of time writing out element creation like last homework and it did not look right nor work
    // found on jquery about adding all together - works and looks better
       var $rowDiv = $(`<div data-time=${i} id="${i}" class="row">`);
    
       
       var $timeDiv = $('<div class="col-md-2"><p class="hour">' + getAMPM(i) + '</p>');
        // 2nd part of planner that shows text input
        // text area to put event (span/label?/look back at hw 4)
        // (textarea in CSS)
        var $eventPlanner = $(`<div class="col-md-8"><textarea id=text${i} class="description"></textarea>`);
        
        var $buttonDiv = $(`<div class="col-md-2"><button class="saveBtn" id=${i}><i class="fas fa-save saveBtn"></i></button>`);
            
            $rowDiv.append($timeDiv);
            $rowDiv.append($eventPlanner);
            $rowDiv.append($buttonDiv);

            $calendar.append($rowDiv);
            // localStorage(i);
        }
            // var timeBlock = $eventPlanner;
            // var time = parseInt(moment().format("HH"));
            //   $.each(timeBlock, function (i, hours){
            //       var selectedText = parseInt($(this).attr("id"));
            //     //   var time = moment().format("HH");
            //       if (selectedText > time) {
            //           $(this).addClass("future")
            //       } else if (selectedText === time){
            //           $(this).addClass("present")
            //       } else {
            //           $(this).addClass("past");
            //       };
            //     //   $("#" + selectedText).val(localStorage.getItem(selectedText))
            //   });
            // console.log(timeBlock)
     
    
        
      
        // function to show time in 1st row
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
        // function setBlockColor(){
        //   timeBlocks.forEach(function (block, i){
        //     currentId = block.attr("data-hour");
        //     var timeBlocks = block.find(".time-block");

        //     if (currentId < presentTime) {
        //         timeBlocks.addClass("past");
        //     } else if (currentId > presentTime){
        //         timeBlocks.addClass("future");
        //     } else if (currentId === presentTime){
        //         timeBlocks.addClass("present");
        //     }
        //   });
        // if i 
        function colorCoding(){
            var currentTime = new Date().getHours();
            for (var i = 9; i < 18; i++) { 
            
             if ($(`#${i}`).data("time") == currentTime){
                $(`#text${i}`).addClass( "present");
            } else if (currentTime < $(`#${i}`).data("time")) {
                $(`#text${i}`).addClass( "future");
            } else $(`#text${i}`).addClass("past");
        }
    }
    console.log(colorCoding);
    setInterval(function() {
        colorCoding();
    }, 1000);
        
    var saveBtn = $('.saveBtn');
saveBtn.on('click', function(){
    let eventId = $(this).attr('id');
    let eventText = $(this).parent().siblings().children('.description').val();
    localStorage.setItem(eventId, eventText);
    });

});
       
       console.log(saveBtn)
    
 // create function to input text and tie to internal storage
    console.log(this);

