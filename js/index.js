$(document).ready( function() { 
    journals = window.app.journals;
    thePresent = new Date();
    currMonth = thePresent.getMonth();
    currYear = thePresent.getFullYear();
    months = ["January ", "February ", "March ", "April ", "May ", "June ", "July ", "August ", "September ", "October ", "November ", "December "]

    handle_calendar(currMonth, currYear);

    $(".day").click(function() {
        let modal = $("#myModal");
        modal.css("display", "block");
        let day = this.innerHTML;
        day = day.substr(25);
        let entry = journals.find((journal) => {
            let journalDate = new Date(journal.date);
            return (journalDate.getMonth() == currMonth) && (journalDate.getDate() == day) && (journalDate.getFullYear() == currYear);
        })
        console.log(entry);
        if(entry === undefined) {
            let modal = $("#myModal");
            modal.css("display", "none");
            return;
        }
        $("#header-date").html(months[currMonth] + " " + day + ", " + currYear);
        $("#entry-title").html("<strong>" + entry.title + "</strong>");
        let emotions = entry.emotions.join(', ');
        console.log(emotions);
        $("#list-emotions").html(emotions);
        $("#entry-goal").html(entry.goal);
        $("#entry-text").html(entry.entry);

        
    });

    $(".close").click(function() {
        let modal = $("#myModal");
        modal.css("display", "none");
    })
});

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

function handle_next() {
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
    header = document.getElementById("month-name");
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
    row = document.createElement("tr");
    
    sunday = document.createTextNode("Sun");
    monday = document.createTextNode("Mon");
    tuesday = document.createTextNode("Tues");
    wednesday = document.createTextNode("Wed");
    thursday = document.createTextNode("Thurs");
    friday = document.createTextNode("Fri");
    saturday = document.createTextNode("Sat");
    nameOfDay = document.createElement("td");
    nameOfDay.setAttribute("class", "name-day");
    nameOfDay.appendChild(sunday);
    row.appendChild(nameOfDay);
    nameOfDay = document.createElement("td");
    nameOfDay.setAttribute("class", "name-day");
    nameOfDay.appendChild(monday);
    row.appendChild(nameOfDay);
    nameOfDay = document.createElement("td");
    nameOfDay.setAttribute("class", "name-day");
    nameOfDay.appendChild(tuesday);
    row.appendChild(nameOfDay);
    nameOfDay = document.createElement("td");
    nameOfDay.setAttribute("class", "name-day");
    nameOfDay.appendChild(wednesday);
    row.appendChild(nameOfDay);
    nameOfDay = document.createElement("td");
    nameOfDay.setAttribute("class", "name-day");
    nameOfDay.appendChild(thursday);
    row.appendChild(nameOfDay);
    nameOfDay = document.createElement("td");
    nameOfDay.setAttribute("class", "name-day");
    nameOfDay.appendChild(friday);
    row.appendChild(nameOfDay);
    nameOfDay = document.createElement("td");
    nameOfDay.setAttribute("class", "name-day");
    nameOfDay.appendChild(saturday);
    row.appendChild(nameOfDay);
    cal.appendChild(row);

    date = 1;
    count = 0;
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
                emptyDay.setAttribute("class", "empty-day")
                row.appendChild(emptyDay);
            }
            else {
                day = document.createElement("td");
                let todaysJournal = journals.find((journal) => {
                    let journalDate = new Date(journal.date);
                    return (journalDate.getMonth() == month) && (journalDate.getDate() == date) && (journalDate.getFullYear() == year);
                })

                if(todaysJournal !== undefined) {
                    day.setAttribute("id", todaysJournal.id);
                    let span = document.createElement("span");
                    span.setAttribute("class", "dot");
                    day.appendChild(span);
                }
                if ((date === thePresent.getDate()) && (year === thePresent.getFullYear()) && (month === thePresent.getMonth() && (todaysJournal !== undefined))){
                    day.setAttribute("class", "active day has-journal"); //set ID for today's date so it can be marked with CSS
                } else if ((todaysJournal !== undefined)){
                    day.setAttribute("class", "day has-journal");
                } else if((date === thePresent.getDate()) && (year === thePresent.getFullYear()) && (month === thePresent.getMonth())) {
                    day.setAttribute("class", "active day");
                } else {
                    day.setAttribute("class", "day")
                }
            
                // day.onclick = function() { modal.style.display = "block"; }
                dayNum = document.createTextNode(date);
                day.appendChild(dayNum);
                row.appendChild(day); //add day to calendar
                date++;
            }
            count ++;
        }
        if (count % 7 != 0) {
            difference = 7 - (count % 7);
            for(k = 0; k < difference; k++) {
                emptyDay = document.createElement("td");
                blank = document.createTextNode("");
                emptyDay.appendChild(blank);
                emptyDay.setAttribute("class", "empty-day")
                row.appendChild(emptyDay);
            }
            count += difference;
        }
        cal.appendChild(row);
    }
}

function validateForm() {
    // validate title
    var title_elem = document.getElementById("title");
    var title = title_elem.value;
    if (title == "") {
        return False;
    }

    // validate mood
    var mood_elem = document.getElementById("dayMood");
    var mood = mood_elem.options[mood_elem.selectedIndex].value;
    if (!mood) {
        return False;
    }

    // validate emotions
    var items = document.getElementsByName("emotions");
    var selectedItems = ""
    for (var i = 0; i < items.length; i++) {
        if (items[i].type == "checkbox" && items[i].checked == True) {
            break;
        }
        return False;
    }

    // validate entry
    var entry_elem = document.getElementsById("thoughts");
    var entry = entry_elem.value;
    if (entry == "") {
        return False;
    }
}

