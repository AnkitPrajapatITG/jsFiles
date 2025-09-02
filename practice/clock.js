
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = " PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = " AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm;

    // Displaying the time
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}

showTime();

document.querySelector("#greet").innerHTML = greet();

function greet() {
    const date = new Date().getHours();
    console.log(date)
    console.log(date)

    if (date >= 1 && date <= 11) {
        return "Good Morning ☀️🌻";
    }
    if (date >= 12 && date <= 16) {
        return "Good Afternoon 🌞🍃";
    }
    if (date >= 17 && date < 20) {
        return "Good Evening 🌅🌙";
    }
    else return "Good Night Go Home🌙💫";
    
}


function getDay(){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];

return day;
}

document.querySelector("#day").innerHTML = getDay();

