// Get all the images
var images = document.querySelectorAll(".image-container img");
// Get the load more button
var loadMoreButton = document.getElementById("load-more-button");

// Hide all images except the first 10
for (var i = 10; i < images.length; i++) {
    images[i].style.display = "none";
}

// Add an event listener to the load more button
loadMoreButton.addEventListener("click", function() {
    // Show the next 10 images
    for (var i = 10; i < images.length; i++) {
        images[i].style.display = "block";
    }
});