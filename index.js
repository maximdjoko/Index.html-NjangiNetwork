console.log("working");

var bars = document.querySelector("#bars");
// console.log(bars);
var cross = document.querySelector("#cross");
var signup = document.querySelector(".loginBtn button.signup");
var login = document.querySelector(".loginBtn button.login");
// console.log(signinSignup);


console.log(document.querySelector("nav"));


// open responsive navLinks
bars.addEventListener("click", () => {
    document.querySelector("#navlinks").style.display = "block";
    signup.setAttribute("id", "active");
    login.setAttribute("id", "active");
});

// close responsive navLinks
cross.addEventListener("click", () => {
    document.querySelector("#navlinks").style.display = "none";
    signup.removeAttribute("id", "active");
    login.removeAttribute("id", "active");

});

// copyright date

var date = new Date();
var year = date.getFullYear();
console.log(year);
document.querySelector("#date").innerHTML = year;

// display navLinks on screen grow
window.addEventListener("resize", function() {
    var width = screen.width;
    // console.log(width);
    if (width >= 1003) {
        document.querySelector("#navlinks").style.display = "block";
    }
}, true);