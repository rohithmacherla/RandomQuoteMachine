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
    sec = (sec<10)?("0"+sec):sec;
    document.getElementById("time-text").innerHTML = hour+":"+min+":"+sec;
    setTimeout(function(){displayTime();}, 1000);
}

var list = [
"\"Whatever you are, be a good one.\"<br>-Abraham Lincoln",
"\"If you dream it, you can do it.\"<br>-Walt Disney",
"\"Never, never, never give up.\"<br>-Winston Churchill",
"\"Don’t wait. The time will never be just right.\"<br>-Napoleon Hill",
"\"If not us, who? If not now, when?\"<br>-John F. Kennedy",
"\"Everything you can imagine is real.\"<br>-Pablo Picasso",
"\"I can, therefore I am.\"<br>-Simone Weil",
"\"Remember no one can make you feel inferior without your consent.\"<br>-Eleanor Roosevelt",
"\"Turn your wounds into wisdom.\"<br>-Oprah Winfrey",
"\"Wherever you go, go with all your heart.\"<br>-Confucius",
"\"Do what you can, with what you have, where you are.\"<br>-Theodore Roosevelt",
"\"Hope is a waking dream.\"<br>-Aristotle",
"\"Action is the foundational key to all success.\"<br>-Pablo Picasso",
"\"Do one thing every day that scares you.\"<br>-Eleanor Roosevelt",
"\"Life is trying things to see if they work.\"<br>-Ray Bradbury",
"\"Don’t regret the past, just learn from it.\"<br>-Ben Ipock",
"\"Live what you love.\"<br>-Jo Deurbrouck",
"\"The power of imagination makes us infinite.\"<br>-John Muir",
"\"May you live every day of your life.\"<br>May you live every day of your life.",
"\"Eighty percent of success is showing up.\"<br>-Woody Allen",
"\"To be the best, you must be able to handle the worst.\"<br>-Wilson Kanadi",

];
function displayQuote() {
    var index = Math.floor(Math.random() * list.length);
    document.getElementById("quote-text").innerHTML = list[index];
}

