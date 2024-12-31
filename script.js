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
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

function toggleLanguage() {
    const elements = document.querySelectorAll("[data-en], [data-fr]");
    elements.forEach(element => {
        if (element.getAttribute("data-en") && element.getAttribute("data-fr")) {
            if (element.innerHTML.trim() === element.getAttribute("data-en").trim()) {
                element.innerHTML = element.getAttribute("data-fr");
            } else {
                element.innerHTML = element.getAttribute("data-en");
            }
        }
    });
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbw6zlWjuTtg16ac1JPLBxkGczNTV7MmImU4RDWZ3viRdqRUVQu9Iv87uXM98T-t-cNV/exec';
const form = document.forms['contact-form'];
const msg = document.getElementById("msg");
let formSubmitted = false;

form.addEventListener('submit', e => {
    e.preventDefault();
    if (formSubmitted) return; // Empêcher les soumissions multiples
    formSubmitted = true;

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function(){
                msg.innerHTML = "";
                form.reset();
                formSubmitted = false; // Réactiver le formulaire après le délai
            }, 5000);
        })
        .catch(error => {
            console.error('Error!', error.message);
            formSubmitted = false; // Réactiver le formulaire en cas d'erreur
        });
});
