// Get the mode switch button
var modeSwitch = document.getElementById("mode-switch");

// Add an event listener to the mode switch button
modeSwitch.addEventListener("click", function() {
    // Get the body element
    var body = document.querySelector("body");
    var navbar = document.querySelector("a");
    // Toggle the "dark-mode" class on the body
    body.classList.toggle("dark-mode");
    navbar.classList.toggle("navbar-switchmode");
});

