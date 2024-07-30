const btn = document.querySelector('.container__btn');
const model = document.querySelector('.model')
const close__model = document.querySelector('.model__close')
btn.addEventListener('click',()=>{
    model.style.display = "initial";
})
close__model.addEventListener('click',()=>{
    model.style.display = "none"
})