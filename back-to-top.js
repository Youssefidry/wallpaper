// Get the back to top button in the footer
var backToTopButton = document.querySelector(".back-to-top-icon");

// Add an event listener to the back to top button
backToTopButton.addEventListener("click", function() {
    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add an event listener to the scroll event
window.addEventListener("scroll", function() {
    // Check if the user has scrolled down more than 20px
    if (window.pageYOffset > 20) {
        // Show the back to top button
        backToTopButton.classList.add("show");
    } else {
        // Hide the back to top button
        backToTopButton.classList.remove("show");
    }
});
