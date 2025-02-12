let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "-200px";
}

function closemenu(){
    sidemenu.style.right = "-400px";
}

// Modified toggleLanguage function using a global language flag
function toggleLanguage() {
    // Get current language from the html element; default is "en"
    let currentLang = document.documentElement.getAttribute("data-lang") || "en";
    let newLang = currentLang === "en" ? "fr" : "en";
    document.documentElement.setAttribute("data-lang", newLang);

    const elements = document.querySelectorAll("[data-en]");
    elements.forEach(element => {
        // Unconditionally update innerHTML using the new language data attribute.
        element.innerHTML = element.getAttribute("data-" + newLang);
    });
}

