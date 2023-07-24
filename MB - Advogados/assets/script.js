function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "/imgs/menu_white_36dp.svg.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "/imgs/close_white_36dp.svg.svg";
    }
}

/*modal*/

const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const openModalButton2 = document.querySelector("#open-modal-2");
const closeModalButton2 = document.querySelector("#close-modal-2");
const openModalButton3 = document.querySelector("#open-modal-3");
const closeModalButton3 = document.querySelector("#close-modal-3");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const modal2 = document.querySelector("#modal-2");
const fade2 = document.querySelector("#fade-2");
const modal3 = document.querySelector("#modal-3");
const fade3 = document.querySelector("#fade-3");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
    modal2.classList.toggle("hide");
    fade2.classList.toggle("hide");
    modal3.classList.toggle("hide");
    fade3.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade, openModalButton2, closeModalButton2, fade2,
openModalButton3, closeModalButton3, fade3].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
})
