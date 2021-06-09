// Define UI
var feet = document.querySelector("#feet");
var result = document.querySelector("#result");

// Define Function
function feetToMile() {
    var mile = feet.value / 5280;
    result.innerText = mile;
};

// Define Event Listener
feet.addEventListener("keyup", feetToMile);

