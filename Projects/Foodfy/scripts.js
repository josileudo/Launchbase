const cards = document.querySelectorAll(".card")
const modalOverlay = document.querySelector(".modal-overlay")

for (let card of cards){
  card.addEventListener("click", function(){
    const imgId = card.getAttribute("id")
    const title = card.querySelector(".card__infor-content").innerHTML
    const author = card.querySelector(".card__autor-content")

    modalOverlay.classList.add("active")
    modalOverlay.querySelector("img").src = `assets/${imgId}`

    modalOverlay.querySelector(".modal_title").innerHTML = title
    modalOverlay.querySelector(".infor__author").innerHTML = author
  })
}

document.querySelector(".close-modal").addEventListener("click", function(){
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("img").src = ""
  modalOverlay.querySelector(".modal_title").innerHTML = ""
  modalOverlay.querySelector(".infor_author")
})