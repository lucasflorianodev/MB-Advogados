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


/*formSubmit para contato*/

class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.form.innerHTML = this.settings.success;
    }
  
    displayError() {
      this.form.innerHTML = this.settings.error;
    }
  
    getFormObject() {
      const formObject = {};
      const fields = this.form.querySelectorAll("[name]");
      fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value;
      });
      return formObject;
    }
  
    onSubmission(event) {
      event.preventDefault();
      event.target.disabled = true;
      event.target.innerText = "Enviando...";
    }
  
    async sendForm(event) {
      try {
        this.onSubmission(event);
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      }
    }
  
    init() {
      if (this.form) this.formButton.addEventListener("click", this.sendForm);
      return this;
    }
  }
  
  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
  });
  formSubmit.init();

  function category(c){
    var item = document.getElementById('item-'+c).innerHTML;
    document.getElementsByTagName('input')[0].value = item;
  }

  function dropdown(p){
    var e = document.getElementsByClassName('dropdown')[0];
    var d = ['block','none'];

    e.style.display =d[p];
    e.style.display = 'translate(0px)';
  }

  
  