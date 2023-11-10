function filterSelection(category) {
  var portfolioItems = document.getElementsByClassName("galleryImage");

  if (category === "all") {
    for (var i = 0; i < portfolioItems.length; i++) {
      portfolioItems[i].style.display = "block";
    }
  } else {
    for (var i = 0; i < portfolioItems.length; i++) {
      portfolioItems[i].style.display = "none";
    }

    var selectedItems = document.getElementsByClassName(category);
    for (var i = 0; i < selectedItems.length; i++) {
      selectedItems[i].style.display = "block";
    }
  }
}

var btnContainer = document.getElementById("buttonContainer");
var buttons = btnContainer.getElementsByClassName("filterButton");
console.log(buttons);
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", " "); // error disini
    this.className += " active";
  });
}
