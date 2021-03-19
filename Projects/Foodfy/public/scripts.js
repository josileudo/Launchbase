const cards = document.querySelectorAll(".card")
const list = document.querySelector(".list-content")

for (let card of cards){
  card.addEventListener("click", function(){
    const recipe = card.getAttribute("id")
    window.location.href = `/recipes/${recipe}`
  })
}

document.querySelector(".show-button").addEventListener("click", function(){
  if (list.classList.contains("active")){
    list.classList.remove("active")

  } else {
    list.classList.add("active")
  }
})
