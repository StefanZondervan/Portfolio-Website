var homeButton = document.getElementById("home-button");
var isHomeButtonVisible = false;

function toggleHomeButtonVisibility() {
  var scrollPosition = window.pageYOffset;
  var scrolledPastMiddleText = scrollPosition > 0;

  if (scrolledPastMiddleText && scrollPosition > 0) {
    if (!isHomeButtonVisible) {
      setTimeout(function () {
        homeButton.classList.add("show");
      }, 1000);
      isHomeButtonVisible = true;
    }
  } else {
    if (isHomeButtonVisible) {
      homeButton.classList.remove("show");
      isHomeButtonVisible = false;
    }
  }
}

window.addEventListener("scroll", toggleHomeButtonVisibility);

document.getElementById("home-button").addEventListener("click", function () {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

var menuButton = document.getElementById("menu-button");
var foldoutMenu = document.getElementById("foldout-menu");
var isMenuOpen = false;

// Function to toggle the menu bar's visibility
function toggleMenuVisibility() {
  if (window.pageYOffset > 0 && isMenuOpen) {
    foldoutMenu.classList.remove("menu-open");
    isMenuOpen = false;
  }
}

// Attach the scroll event listener to the window
window.addEventListener("scroll", toggleMenuVisibility);

// JavaScript to toggle the foldout menu
menuButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior
  foldoutMenu.classList.toggle("menu-open");
  isMenuOpen = !isMenuOpen;
});

// Function to toggle the visibility of the scroll-to-top button
function toggleScrollToTopButtonVisibility() {
  var scrollPosition = window.pageYOffset;
  var scrollThreshold = 500; // Adjust this threshold as needed

  // If user scrolled below the threshold, show the button; otherwise, hide it
  if (scrollPosition > scrollThreshold) {
    document.getElementById("scrollToTopButton").style.display = "block";
  } else {
    document.getElementById("scrollToTopButton").style.display = "none";
  }
}

// Add a scroll event listener to toggle the button's visibility
window.addEventListener("scroll", toggleScrollToTopButtonVisibility);

// Add a click event listener to scroll to the top when the button is clicked
document
  .getElementById("scrollToTopButton")
  .addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to the top
  });
