function updateClock() {
  let now = moment();
  let hours = now.format("hh");
  let minutes = now.format("mm");
  let seconds = now.format("ss");
  let ampm = now.format("A");
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  document.getElementById("ampm").textContent = ampm;
}
updateClock();
setInterval(updateClock, 1000);
