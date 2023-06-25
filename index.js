let button = document.getElementById("myButton");
let holdStartTime;
let speedmph = document.getElementById("speedmph");
let speedfps = document.getElementById("speedfps");
let timeheld = document.getElementById("holdtime");


button.addEventListener("touchstart", function() {
  holdStartTime = Date.now();
});

button.addEventListener("touchend", function() {
    let holdTime = Date.now() - holdStartTime;
    console.log("Button held down for " + holdTime/1000 + " seconds");
    console.log("FPS: " + 40/(holdTime/1000));
    console.log("MPH: " + (40/(holdTime/1000))*0.681818);
    speedmph.innerHTML = ((40/(holdTime/1000))*0.681818).toFixed(2) + " mph";
    speedfps.innerHTML = (40/(holdTime/1000)).toFixed(2) + " Feet per Second";
    timeheld.innerHTML = "Held for " + (holdTime/1000).toFixed(2) + " Seconds";
});

function increaseStrike() {
  var strike = document.getElementById("strikes");
  var strikeCount = parseInt(strike.innerHTML);
  strikeCount++;
  strike.innerHTML = strikeCount;
}
function decreaseStrike() {
  var strike = document.getElementById("strikes");
  var strikeCount = parseInt(strike.innerHTML);
  if (strikeCount > 0) {
      strikeCount--;
  }
  strike.innerHTML = strikeCount;
}
function increaseBalls() {
  var ball = document.getElementById("balls");
  var ballCount = parseInt(ball.innerHTML);
  ballCount++;
  ball.innerHTML = ballCount;
}
function decreaseBalls() {
  var ball = document.getElementById("balls");
  var ballCount = parseInt(ball.innerHTML);
  if (ballCount > 0) {
      ballCount--;
  }
  ball.innerHTML = ballCount;
}