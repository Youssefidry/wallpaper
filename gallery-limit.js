// Get all the images
var images = document.querySelectorAll(".img-container img");
// Get the load more button
var loadMoreButton = document.getElementById("load-more-button");

// Initialize a variable to keep track of the current index
var currentIndex = 12;

// Hide all images except the first 12
for (var i = 12; i < images.length; i++) {
    images[i].style.display = "none";
}

// Add an event listener to the load more button
loadMoreButton.addEventListener("click", function() {
    // Show the next 12 images
    for (var i = currentIndex; i < currentIndex + 12; i++) {
        if (i < images.length) {
            images[i].style.display = "block";
        }
    }

    // Update the current index
    currentIndex += 12;

    // Check if all images have been shown
    if (currentIndex >= images.length) {
        // Hide the load more button
        loadMoreButton.style.display = "none";
    }
});
