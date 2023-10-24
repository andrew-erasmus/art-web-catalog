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

// Reference dropdown functionality
var ref = document.getElementById("reference-btn");
var refDiv = document.getElementById("reference-dropdown");
ref.addEventListener("click", () => {

    if(document.getElementById('references') === null){
        const p = document.createElement("p");
    p.setAttribute('id', 'references');
    const text = document.createTextNode(`Arya, R. (2014) Abjection and representation: An exploration of abjection in the visual arts, film and literature. Springer.

Fischer, K. (2023) Is Bacteria the Bad Guy Behind Endometriosis? HealthCentral. HealthCentral. Available at: https://www.healthcentral.com/womens-health/is-bacteria-the-bad-guy-behind-endometriosis (Accessed: 30 August 2023).

Leigh, K. (2023) A Potential Breakthrough in Endometriosis Research: Prognosis, Bloomberg. Bloomberg. Available at: https://www.bloomberg.com/news/newsletters/2023-07-03/a-potential-breakthrough-in-endometriosis-research-prognosis?in_source=embedded-checkout-banner#xj4y7vzkg (Accessed: 30 August 2023).

Leyland, N. et al. (2010) ‘Endometriosis: Diagnosis and Management’, Journal of Endometriosis, 2(3), pp. 107–134. doi:10.1177/228402651000200303.

Lorde, A. (2017) A burst of light: And other essays. Courier Dover Publications.

Malhi, S. (2023) A new clue to endometriosis, an agonizing and poorly understood disease, The Washington Post. The Washington Post. Available at: https://www.washingtonpost.com/health/2023/06/14/endometriosis-fusobacterium-possible-links/ (Accessed: 30 August 2023).

Mirk, S. (2016) ‘Audre Lorde Thought of Self-Care as an “Act of Political Warfare”’, Bitch Media, 18 February. Available at: https://www.bitchmedia.org/article/audre-lorde-thought-self-care-act-political-warfare (Accessed: 29 August 2023).

Research Guides: Learn &amp; Unlearn: Anti-racism Resource Guide: Radical Self Care (no date) Research Guides: Learn &amp; Unlearn: Anti-racism Resource Guide: Radical Self Care, Library Guides SAIC. Available at: https://libraryguides.saic.edu/learn_unlearn/wellness5 (Accessed: 29 August 2023).

Stewart, S. (1993) On longing: Narratives of the miniature, the gigantic, the souvenir, the collection. Duke University Press.

WHO, W.H.O. (2023) Endometriosis, World Health Organization: WHO. World Health Organization: WHO. Available at: https://www.who.int/news-room/fact-sheets/detail/endometriosis (Accessed: 28 September 2023). 
`);
    p.appendChild(text);
    refDiv.appendChild(p);

    }else{
        const p = document.getElementById('references');
        p.remove();
    }
    

});


