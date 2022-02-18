'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnShow = document.querySelectorAll(".show");

const closeModal = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

const openModal = function(){
    modal.classList.remove("hidden"); //ne ide tacka za klasu
    overlay.classList.remove("hidden"); //isto kao overlay.style.display = "block"
}

//loop for alll 3 buttons
for(let i = 0; i < btnShow.length; i++) {
    //console.log(btnShow[i].textContent);
    btnShow[i].addEventListener("click", openModal);

    btnClose.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
}
//oznacava sve na globalnom nivou - esc
document.addEventListener("keydown", function(e) { //parametar for event-keyboardEvent
    //bilo koji key na tastaturi da pritisnemo u consoli dobijamo na koji key se odnosi
    console.log(e.key);//enter, escape, shift...

    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
            closeModal();
    }
});