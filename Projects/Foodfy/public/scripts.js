const cards = document.querySelectorAll(".card")
const buttons = document.querySelectorAll(".show-button")
const list = document.querySelectorAll(".list-content")
const topic = document.querySelector(".topic")

for (let card of cards){
  card.addEventListener("click", function(){
    const recipe = card.getAttribute("id")
    window.location.href = `/recipes/${recipe}`
  })
}

document.querySelector(".topic").addEventListener("click", function(){
  
})

for (const button in buttons){
  buttons[button].addEventListener("click", function(){
    
    if(list[button].classList.contains("active")){
      list[button].classList.remove ("active")
      
      buttons[button].innerHTML= "MOSTRAR"

    } else {
      list[button].classList.add("active")
      
      buttons[button].innerHTML = "ESCONDER"

    }
  })
}