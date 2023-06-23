let button = document.getElementById("myButton");
let holdStartTime;
let speedmph = document.getElementById("speedmph");
let speedfps = document.getElementById("speedfps");
let timeheld = document.getElementById("holdtime");


button.addEventListener("mousedown", function() {
  holdStartTime = Date.now();
});

button.addEventListener("mouseup", function() {
    let holdTime = Date.now() - holdStartTime;
    console.log("Button held down for " + holdTime/1000 + " seconds");
    console.log("FPS: " + 40/(holdTime/1000));
    console.log("MPH: " + (40/(holdTime/1000))*0.681818);
    speedmph.innerHTML = ((40/(holdTime/1000))*0.681818).toFixed(2) + " MPH";
    speedfps.innerHTML = (40/(holdTime/1000)).toFixed(2) + " FPS";
    timeheld.innerHTML = (holdTime/1000).toFixed(2) + " Seconds";
});