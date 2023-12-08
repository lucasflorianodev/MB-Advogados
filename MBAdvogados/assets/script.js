function menuShow(){
    let a=document.querySelector(".mobile-menu");
    a.classList.contains("open")?(a.classList.remove("open"),zzxcdocument.querySelector(".icon").src="/imgs/menu_white_36dp.svg.svg"):
    (a.classList.add("open"),document.querySelector(".icon").src="/imgs/close_white_36dp.svg.svg")
}

const openModalButton=document.querySelector("#open-modal"),
closeModalButton=document.querySelector("#close-modal"),
modal=document.querySelector("#modal"),
fade=document.querySelector("#fade"),
toggleModal=()=>{modal.classList.toggle("hide"),fade.classList.toggle("hide")};
[openModalButton,closeModalButton,fade].forEach(a=>{a.addEventListener("click",()=>toggleModal())});

const openModalButton2=document.querySelector("#open-modal-2"),
closeModalButton2=document.querySelector("#close-modal-2"),
modal2=document.querySelector("#modal-2"),
fade2=document.querySelector("#fade-2"),
toggleModal2=()=>{modal2.classList.toggle("hide"),fade2.classList.toggle("hide")};
[openModalButton2,closeModalButton2,fade2].forEach(a=>{a.addEventListener("click",()=>toggleModal2())});

const openModalButton3=document.querySelector("#open-modal-3"),
closeModalButton3=document.querySelector("#close-modal-3"),
modal3=document.querySelector("#modal-3"),
fade3=document.querySelector("#fade-3"),toggleModal3=()=>{modal3.classList.toggle("hide"),fade3.classList.toggle("hide")};
[openModalButton3,closeModalButton3,fade3].forEach(a=>{a.addEventListener("click",()=>toggleModal3())});


const openModalButton4=document.querySelector("#open-modal-4"),
closeModalButton4=document.querySelector("#close-modal-4"),
modal4=document.querySelector("#modal-4"),
fade4=document.querySelector("#fade-4"),
toggleModal4=()=>{modal4.classList.toggle("hide"),fade4.classList.toggle("hide")};
[openModalButton4,closeModalButton4,fade4].forEach(a=>{a.addEventListener("click",()=>toggleModal4())});

const openModalButton5=document.querySelector("#open-modal-5"),
closeModalButton5=document.querySelector("#close-modal-5"),
modal5=document.querySelector("#modal-5"),
fade5=document.querySelector("#fade-5"),
toggleModal5=()=>{modal5.classList.toggle("hide"),fade5.classList.toggle("hide")};
[openModalButton5,closeModalButton5,fade5].forEach(a=>{a.addEventListener("click",()=>toggleModal5())});

const openModalButton6=document.querySelector("#open-modal-6"),
closeModalButton6=document.querySelector("#close-modal-6"),
modal6=document.querySelector("#modal-6"),
fade6=document.querySelector("#fade-6"),toggleModal6=()=>{modal6.classList.toggle("hide"),fade6.classList.toggle("hide")};
[openModalButton6,closeModalButton6,fade6].forEach(a=>{a.addEventListener("click",()=>toggleModal6())});

const openModalButton7=document.querySelector("#open-modal-7"),
closeModalButton7=document.querySelector("#close-modal-7"),
modal7=document.querySelector("#modal-7"),
fade7=document.querySelector("#fade-7"),
toggleModal7=()=>{modal7.classList.toggle("hide"),fade7.classList.toggle("hide")};
[openModalButton7,closeModalButton7,fade7].forEach(a=>{a.addEventListener("click",()=>toggleModal7())});

const openModalButton8=document.querySelector("#open-modal-8"),
closeModalButton8=document.querySelector("#close-modal-8"),
modal8=document.querySelector("#modal-8"),
fade8=document.querySelector("#fade-8"),
toggleModal8=()=>{modal8.classList.toggle("hide"),fade8.classList.toggle("hide")};
[openModalButton8,closeModalButton8,fade8].forEach(a=>{a.addEventListener("click",()=>toggleModal8())});

class FormSubmit{constructor(a){this.settings=a,this.form=document.querySelector(a.form),
    this.formButton=document.querySelector(a.button),this.form&&(this.url=this.form.getAttribute("action")),
    this.sendForm=this.sendForm.bind(this)}displaySuccess(){this.form.innerHTML=this.settings.success}displayError(){this.form.innerHTML=this.settings.error}getFormObject()
    {const a={},b=this.form.querySelectorAll("[name]");return b.forEach(b=>{a[b.getAttribute("name")]=b.value}),
    a}onSubmission(a){a.preventDefault(),a.target.disabled=!0,a.target.innerText="Enviando..."}async sendForm(a){try{this.onSubmission(a),
        await fetch(this.url,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},
        body:JSON.stringify(this.getFormObject())}),this.displaySuccess()}catch(a){throw this.displayError(),
            new Error(a)}}init(){return this.form&&this.formButton.addEventListener("click",this.sendForm),this}}
            
const formSubmit=new FormSubmit({form:"[data-form]",button:"[data-button]",success:"<h1 class='success'>Mensagem enviada!</h1>",
error:"<h1 class='error'>N\xE3o foi poss\xEDvel enviar sua mensagem.</h1>"});
formSubmit.init();function category(a){
    var b=document.getElementById("item-"+a).innerHTML;document.getElementsByTagName("input")[0].value=b}
    function dropdown(a) {
        var b=document.getElementsByClassName("dropdown")[0];b.style.display=["block","none"][a],b.style.display="translate(0px)"}

