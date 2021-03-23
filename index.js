console.log("working");

var bars = document.querySelector("#bars");
// console.log(bars);
var cross = document.querySelector("#cross");
var signup = document.querySelector(".loginBtn button.signup");
var login = document.querySelector(".loginBtn button.login");
// console.log(signinSignup);


console.log(document.querySelector("nav"));

bars.addEventListener("click", () => {
    // console.log("click");
    document.querySelector("#navlinks").style.display = "block";
    signup.setAttribute("id", "active");
    login.setAttribute("id", "active");
    bars.style.display = "none"
        // console.log(signinSignup);
});

cross.addEventListener("click", () => {
    console.log("click");
    document.querySelector("#navlinks").style.display = "none";
    // document.querySelector("#navlinks").style.display = "block";
    signup.removeAttribute("id", "active");
    login.removeAttribute("id", "active");
    bars.style.display = "block"

});

// copyright date

var date = new Date();
var year = date.getFullYear();
console.log(year);
document.querySelector("#date").innerHTML = year;