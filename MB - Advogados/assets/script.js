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

/*modal civil*/

const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");


const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
})

/*modal familiar*/

const openModalButton2 = document.querySelector("#open-modal-2");
const closeModalButton2 = document.querySelector("#close-modal-2");
const modal2 = document.querySelector("#modal-2");
const fade2 = document.querySelector("#fade-2");


const toggleModal2 = () => {
    modal2.classList.toggle("hide");
    fade2.classList.toggle("hide");
};

[openModalButton2, closeModalButton2, fade2].forEach((el) => {
    el.addEventListener("click", () => toggleModal2());
})


/*modal penal*/

const openModalButton3 = document.querySelector("#open-modal-3");
const closeModalButton3 = document.querySelector("#close-modal-3");
const modal3 = document.querySelector("#modal-3");
const fade3 = document.querySelector("#fade-3");


const toggleModal3 = () => {
    modal3.classList.toggle("hide");
    fade3.classList.toggle("hide");
};

[openModalButton3, closeModalButton3, fade3].forEach((el) => {
    el.addEventListener("click", () => toggleModal3());
})


/*modal Imobiliário*/

const openModalButton4 = document.querySelector("#open-modal-4");
const closeModalButton4 = document.querySelector("#close-modal-4");
const modal4 = document.querySelector("#modal-4");
const fade4 = document.querySelector("#fade-4");


const toggleModal4 = () => {
    modal4.classList.toggle("hide");
    fade4.classList.toggle("hide");
};

[openModalButton4, closeModalButton4, fade4].forEach((el) => {
    el.addEventListener("click", () => toggleModal4());
})


/*modal Empresarial*/

const openModalButton5 = document.querySelector("#open-modal-5");
const closeModalButton5 = document.querySelector("#close-modal-5");
const modal5 = document.querySelector("#modal-5");
const fade5 = document.querySelector("#fade-5");


const toggleModal5 = () => {
    modal5.classList.toggle("hide");
    fade5.classList.toggle("hide");
};

[openModalButton5, closeModalButton5, fade5].forEach((el) => {
    el.addEventListener("click", () => toggleModal5());
})

/*modal Tributário*/

const openModalButton6 = document.querySelector("#open-modal-6");
const closeModalButton6 = document.querySelector("#close-modal-6");
const modal6 = document.querySelector("#modal-6");
const fade6 = document.querySelector("#fade-6");


const toggleModal6 = () => {
    modal6.classList.toggle("hide");
    fade6.classList.toggle("hide");
};

[openModalButton6, closeModalButton6, fade6].forEach((el) => {
    el.addEventListener("click", () => toggleModal6());
})

/*modal Trabalhista*/

const openModalButton7 = document.querySelector("#open-modal-7");
const closeModalButton7 = document.querySelector("#close-modal-7");
const modal7 = document.querySelector("#modal-7");
const fade7 = document.querySelector("#fade-7");


const toggleModal7 = () => {
    modal7.classList.toggle("hide");
    fade7.classList.toggle("hide");
};

[openModalButton7, closeModalButton7, fade7].forEach((el) => {
    el.addEventListener("click", () => toggleModal7());
})

/*modal Previdênciario*/

const openModalButton8 = document.querySelector("#open-modal-8");
const closeModalButton8 = document.querySelector("#close-modal-8");
const modal8 = document.querySelector("#modal-8");
const fade8 = document.querySelector("#fade-8");


const toggleModal8 = () => {
    modal8.classList.toggle("hide");
    fade8.classList.toggle("hide");
};

[openModalButton8, closeModalButton8, fade8].forEach((el) => {
    el.addEventListener("click", () => toggleModal8());
})

/*modal Miguel*/

const openModalButton9 = document.querySelector("#open-modal-9");
const closeModalButton9 = document.querySelector("#close-modal-9");
const modal9 = document.querySelector("#modal-9");
const fade9 = document.querySelector("#fade-9");


const toggleModal9 = () => {
    modal9.classList.toggle("hide");
    fade9.classList.toggle("hide");
};

[openModalButton9, closeModalButton9, fade9].forEach((el) => {
    el.addEventListener("click", () => toggleModal9());
})

/*modal Estela*/

const openModalButton10 = document.querySelector("#open-modal-10");
const closeModalButton10 = document.querySelector("#close-modal-10");
const modal10 = document.querySelector("#modal-10");
const fade10 = document.querySelector("#fade-10");


const toggleModal10 = () => {
    modal10.classList.toggle("hide");
    fade10.classList.toggle("hide");
};

[openModalButton10, closeModalButton10, fade10].forEach((el) => {
    el.addEventListener("click", () => toggleModal10());
})