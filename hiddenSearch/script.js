

const btn = document.querySelector('.btn');
const search = document.querySelector(".search_box");
const input = document.querySelector(".input");


btn.addEventListener('click',()=>{
     search.classList.toggle('active');
     input.focus()

})