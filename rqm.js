
function displayDate() {
  var current_day = new Date();
  var days_of_week = ["Sunday","Monday","Tuesday",
                    "Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date-text").innerHTML = days_of_week[current_day.getDay()]+" ~ "+[current_day.getMonth()+1]
                                                    +"|"+current_day.getDate()+"|"+current_day.getFullYear();
}

function displayTime() {
    var current_day = new Date();
    var hour = current_day.getHours();
    var min = current_day.getMinutes();
    var sec = current_day.getSeconds();
    hour = (hour > 12)?hour-12:hour;
    hour = (hour==0)?12:hour;
    min = (min <10)?("0"+min):min;
    document.getElementById("time-text").innerHTML = hour+":"+min+":"+sec;
    setTimeout(function(){displayTime();}, 1000);
}
