$("#close").on("click", function () {
  $("#nav-box").animate({ width: "hide", padingInline: "toggle" }, 1000);
  // console.log("randa");
});
$("#nav-icon").on("click", function () {
  $("#nav-box").animate({ width: "show" }, 1000);
  // console.log("randa");
});
$(".texts").on("click", function () {
  $(".para").slideToggle(1000);
});
$(".texts2").on("click", function () {
  $(".para2").slideToggle(1000);
});
$(".texts3").on("click", function () {
  $(".para3").slideToggle(1000);
});
$(".texts4").on("click", function () {
  $(".para4").slideToggle(1000);
});

$("a").on("click", function (e) {
  let targetid = e.target.getAttribute("href");
  let distanceabout = $(targetid).offset().top;
  $("html").animate({ scrollTop: distanceabout }, 3000);
});

let countdownDate = new Date("October 28, 2024 23:59:59").getTime();
console.log(countdownDate);
let daysElement = document.querySelector("#h1");
let hoursElement = document.querySelector("#h2");
let minutesElement = document.querySelector("#h3");
let secondsElement = document.querySelector("#h4");

let counter = setInterval(function () {
  let dateNow = new Date().getTime(); // now
  let differenceBetween = countdownDate - dateNow;

  let days = Math.floor(differenceBetween / (1000 * 60 * 60 * 24));
  daysElement.innerHTML = days + "D";

  let hours = Math.floor(
    (differenceBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  hoursElement.innerHTML = hours + "h";

  let minutes = Math.floor(
    (differenceBetween % (1000 * 60 * 60)) / (1000 * 60)
  );
  minutesElement.innerHTML = minutes + "m";

  let seconds = Math.floor((differenceBetween % (1000 * 60)) / 1000);
  secondsElement.innerHTML = seconds + "s";

  if (differenceBetween <= 0) {
    clearInterval(counter);
  }
}, 1000);

var maxCount = 100;
var spanCounter = document.getElementById("chars");
var limitedTextArea = document.getElementById("area");

limitedTextArea.addEventListener("input", function (e) {
  var currentLength = limitedTextArea.value.length;
  var remainingChars = maxCount - currentLength;

  if (remainingChars < 0) {
    // e.preventDefault();
    limitedTextArea.value = limitedTextArea.value.slice(0, maxCount);
    remainingChars = 0;
  }

  spanCounter.innerHTML = remainingChars;

  if (remainingChars === 0) {
    $("#chars").text("Can Not Add More Chars");
    $("#chars").css("color", "red");
  }
});
