

var now = moment();


var displayTime = document.querySelector("#currentDay");

var currentTime = moment();

displayTime.textContent = currentTime.format("moment().format(MMMM Do YYYY");

$(".saveBtn").on("click", function() {
    
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    
    localStorage.setItem(time , value );
});

 


$("#9am-row .description").val(localStorage.getItem("9am-row"));

$("#10am-row .description").val(localStorage.getItem("#10am-row"));

 $("#11am-row .description").val(localStorage.getItem("11am-row"));

 $("#12pm-row .description").val(localStorage.getItem("12pm-row" ));

 $("#1pm-row .description").val(localStorage.getItem("1pm-row" ));

 $("#2pm-row .description").val(localStorage.getItem("2pm-row" ));

 $("#3pm-row .description").val(localStorage.getItem("3pm-row" ));

 $("#4pm-row .description").val(localStorage.getItem("4pm-row"));

 $("#5pm-row .description").val(localStorage.getItem("5pm-row"));

 

var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour1 = 13;
var hour2 = 14;
var hour3 = 15;
var hour4 = 16;
var hour5 = 17;

var currentHour = moment().format('L');

function updateBackground() {
    var
        hr = (new Date()).getHours(),
        body = document.body,
        bstyle = body.style,
        
    if (hr < 10) {
        bstyle.backgroundColor = "yellow";
        bstyle.color = "black";
        
    } else if (hr < 20) {
        bstyle.backgroundColor = "green";
        bstyle.color = "white";
        
    } else {
        bstyle.backgroundColor = "black";
        bstyle.color = "white";
        
    }
}

setInterval(updateBackground, 1000 * 60);
updateBackground();
if (currentHour < hour9) {
    $("#9am-text").addClass("future");
} else if (currentHour > hour9) {
    $("#9am-text").addClass("past");
} else if (currentHour = hour9) {
    $("#9am-text").addClass("present");
}


if (currentHour < hour10) {
    $("#10am-text").addClass("future");
} else if (currentHour > hour10) {
    $("#10am-text").addClass("past");
} else if (currentHour = hour10) {
    $("#10am-text").addClass("present");
}


if (currentHour < hour11) {
    $("#11am-text").addClass("future");
} else if (currentHour > hour11) {
    $("#11am-text").addClass("past");
} else if (currentHour = hour11) {
    $("#11am-text").addClass("present");
}


if (currentHour < hour12) {
    $("#12pm-text").addClass("future");
} else if (currentHour > hour12) {
    $("#12pm-text").addClass("past");
} else if (currentHour = hour12) {
    $("#12pm-text").addClass("present");
}


if (currentHour < hour1) {
    $("#1pm-text").addClass("future");
} else if (currentHour > hour1) {
    $("#1pm-text").addClass("past");
} else if (currentHour = hour1) {
    $("#1pm-text").addClass("present");
}


if (currentHour < hour2) {
    $("#2pm-text").addClass("future");
} else if (currentHour > hour2) {
    $("#2pm-text").addClass("past");
} else if (currentHour = hour2) {
    $("#2pm-text").addClass("present");
}


if (currentHour < hour3) {
    $("#3pm-text").addClass("future");
} else if (currentHour > hour3) {
    $("#3pm-text").addClass("past");
} else if (currentHour = hour3) {
    $("#3pm-text").addClass("present");
}


if (currentHour < hour4) {
    $("#4pm-text").addClass("future");
} else if (currentHour > hour4) {
    $("#4pm-text").addClass("past");
} else if (currentHour = hour4) {
    $("#4pm-text").addClass("present");
}


if (currentHour < hour5) {
    $("#5pm-text").addClass("future");
} else if (currentHour > hour5) {
    $("#5pm-text").addClass("past");
} else if (currentHour = hour5) {
    $("#5pm-text").addClass("present");
}
