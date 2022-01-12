let likeBTN = document.querySelector(".fa-heart")
let bookmarkBTN = document.querySelector(".fa-bookmark")


likeBTN.addEventListener("click", (e)=>{
    e.currentTarget.classList.toggle("fas")
    e.currentTarget.classList.toggle("fill-like")
})

bookmarkBTN.addEventListener("click", (e)=>{
    e.currentTarget.classList.toggle("fas")
})