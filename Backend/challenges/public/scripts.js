const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector(".modal")
const cards = document.querySelectorAll(".card")

for (let card of cards) {
  card.addEventListener("click", function(){
    const pageId = card.getAttribute("id")
    window.location.href = `https://www.cod3r.com.br/courses/${pageId}`
  })
}



