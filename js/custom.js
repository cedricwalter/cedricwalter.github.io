// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
    equalizeColumnHeights();
});

// Function to equalize column heights
function equalizeColumnHeights() {
    var columns = document.querySelectorAll('.dream-card');
    var maxHeight = 0;

    // Find the maximum height among all columns
    columns.forEach(function (column) {
        var height = column.offsetHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    // Set the same height for all columns
    columns.forEach(function (column) {
        if (!column.classList.contains('notsameheight')) {
         column.style.height = maxHeight + 'px';
        }
    });
}
