// var modal = document.getElementById('myModal'); // Get the modal
// var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
//}


//Global variables
thePresent = new Date();
currMonth = thePresent.getMonth();
currYear = thePresent.getFullYear();
months = ["Jan. ", "Feb. ", "Mar. ", "April ", "May ", "June ", "July ", "Aug. ", "Sep. ", "Oct. ", "Nov. ", "Dec. "]

function handle_prev(){
    //change year
    if(currMonth === 0){
        currYear = currYear - 1; //go back a year if on month 0 (January)
    }

    //change month
    if(currMonth === 0){
        currMonth = 11 //go to month 11 (December) if on month 0 (January)
    }
    else{
        currMonth = currMonth - 1; //go back a month
    }

    handle_calendar(currMonth, currYear);
}

function handle_next(){
    //change year
    if(currMonth === 11){
        currYear = currYear + 1; //go forward a year if on month 11 (December)
    }

    //change month
    if(currMonth === 11){
        currMonth = 0 //go to month 0 (January) if on month 11 (December )
    }
    else{
        currMonth = currMonth + 1; //go forward a month
    }

    handle_calendar(currMonth, currYear);
}

function handle_calendar(month, year) {
    //disply the month and year above calendar
    header = document.getElementById("cal-header");
    header.innerHTML = months[month] + year;

    //clear calendar initially
    cal = document.getElementById("calendar");
    cal.innerHTML = "";
    
    //get number of days in the month
    monthStart = new Date(year, month, 1); //ex) month = 0, Jan 1
    monthEnd = new Date(year, month + 1, 1); //ex) month = 1, Feb 1
    monthLength =  Math.round((monthEnd - monthStart) / (1000 * 60 * 60 * 24)); //convert from milliseconds to day

    //get the 1st day of the mongth as a weekday number 0-6 
    firstWeekday = (new Date(year, month)).getDay(); 

    date = 1;
    for (i = 0; i < 6; i++) {
        row = document.createElement("tr"); //create a row for a week of the calendar
        for (j = 0; j < 7; j++) {           //create a column for a day of the week
            if (date > monthLength){
                break;                      //stop generating days when limit is reached
            }
            //fill the first row with empty nodes until you reach the first day of the month
            else if (i === 0 && j < firstWeekday) {
                emptyDay = document.createElement("td");
                blank = document.createTextNode("");
                emptyDay.appendChild(blank);
                row.appendChild(emptyDay);
            }
            else {
                day = document.createElement("td");
                if ((date === thePresent.getDate()) && (year === thePresent.getFullYear()) && (month === thePresent.getMonth())){
                    day.setAttribute("id", "today"); //set ID for today's date so it can be marked with CSS
                }
                // day.onclick = function() { modal.style.display = "block"; }
                dayNum = document.createTextNode(date);
                day.appendChild(dayNum);
                row.appendChild(day); //add day to calendar
                date++;
            }
        }
        cal.appendChild(row);
    }
}

handle_calendar(currMonth, currYear);

// Integrate this code with calendar
// $(document).ready( function() { 
//     $("li").click(function() {
//         let modal = $("#myModal");
//         modal.css("display", "block");
//         let day = this.innerHTML;
//         $("#header-date").html("February " + day + ", 2019");
//         console.log(day);
//     });

//     $(".close").click(function() {
//         let modal = $("#myModal");
//         modal.css("display", "none");
//     })
// })