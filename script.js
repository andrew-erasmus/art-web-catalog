// Get the checkbox element
var checkbox = document.getElementById("checkbox");

// Get the dropdown menu element
var myDropdown = document.getElementById("myDropdown");

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
    if(myDropdown.classList.contains('window')){
        myDropdown.classList.remove('window');
    }else if (!e.target.matches('.dropbtn') || !e.target.matches('#checkbox')) {
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
            myDropdown.classList.add('window');
            checkbox.checked=false;
        }
    }
}

// Add an event listener for the 'change' event
checkbox.addEventListener('change', function() {
    // Toggle the 'show' class based on the checked property of the checkbox
    if(myDropdown.classList.contains("window") && checkbox.checked){
        myDropdown.classList.remove('window');
        checkbox.checked=false;
    }
    if(myDropdown.classList.contains("window") && checkbox.checked == false){
        myDropdown.classList.remove('window');
        myDropdown.classList.add("show");
        checkbox.checked=true;
    }

    if (checkbox.checked) {
        myDropdown.classList.add("show");
    } else {
        myDropdown.classList.remove("show");
    }
    
});




// Carousel functionality
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton==="next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector('[data-slides]')

        const activeSlide = slides.querySelector('[data-active]')
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if(newIndex < 0) newIndex = slides.children.length-1
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})