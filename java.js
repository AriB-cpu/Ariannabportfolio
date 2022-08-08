var elements = document.getElementsByClassName("column");

// declared loop variable
var i;

// images will be in full width here by add value to loop variable and incrementing it when i<elements.length
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  
    elements[i].style.flex = "100%";
  }
}

//2 images will be next to each other
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  
    elements[i].style.flex = "50%";
  }
}

// 3 images next to each other
function three() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  
    elements[i].style.flex = "25%";
  }
}

// Add active class to the current button (highlight it)
var button = thehead.getElementsByClassName("button");
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += "active"; //The 'this' refers to the object that is executing the current javascript code
  });
}
