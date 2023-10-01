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
