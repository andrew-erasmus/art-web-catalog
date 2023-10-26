// Get the checkbox element
var checkbox = document.getElementById("checkbox");

// Get the dropdown menu element
var myDropdown = document.getElementById("myDropdown");

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if (myDropdown.classList.contains('window')) {
        myDropdown.classList.remove('window');
        checkbox.checked = false;
    } else if (!e.target.matches('.dropbtn') || !e.target.matches('#checkbox')) {
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
            myDropdown.classList.add('window');
            checkbox.checked = false;
        }
    }
}

// Add an event listener for the 'change' event
checkbox.addEventListener('change', function () {
    // Toggle the 'show' class based on the checked property of the checkbox
    if (myDropdown.classList.contains("window") && checkbox.checked) {
        myDropdown.classList.remove('window');
        checkbox.checked = false;
    }
    if (myDropdown.classList.contains("window") && checkbox.checked == false) {
        myDropdown.classList.remove('window');
        myDropdown.classList.add("show");
        checkbox.checked = true;
    }

    if (checkbox.checked) {
        myDropdown.classList.add("show");
    } else {
        myDropdown.classList.remove("show");
    }

});

// Reference functionality
function hideReferences() {
    var x = document.getElementById("reference-btn");
    var down = document.getElementById("down-btn");
    var up = document.getElementById("up-btn");
    
    if (x.style.display === "none") {
      x.style.display = "block";
      down.style.display = "none";
      up.style.display="block"
    } else {
      x.style.display = "none";
      up.style.display = "none";
      down.style.display="block"
    }
  }