console.log("working");

var bars = document.querySelector("#bars");
// console.log(bars);
var cross = document.querySelector("#cross");
console.log(document.querySelector("nav"));

bars.addEventListener("click", () => {
    // console.log("click");
    document.querySelector("#navlinks").style.display = "block";
});

cross.addEventListener("click", () => {
    console.log("click");
    document.querySelector("#navlinks").style.display = "none";
});

// copyright date

var date = new Date();
var year = date.getFullYear();
console.log(year);
document.querySelector("#date").innerHTML = year;