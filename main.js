let total = document.querySelector(".total")
let rating = document.querySelector(".rating")
let tipButton = document.querySelector(".tip-button")
let tip = document.querySelector(".tip")
let splitTotal = document.querySelector(".split-total")
let splitTip = document.querySelector(".split-tip")
let split = document.querySelector(".split")
let totalTotal = document.querySelector(".total-total")
let displaySection = document.querySelector(".display-section")




tipButton.addEventListener("click", displayTip)

function displayTip(){
  let newDinner = new Dinner(total.value, parseInt(rating.value), parseInt(split.value))
  displaySection.classList.remove('hidden')


  if(newDinner.split === 0){
    tip.innerText = `Total Tip = $${newDinner.tipper()}`
    splitTotal.innerText = ''
    totalTotal.innerText = ''
  }
  if(newDinner.split > 0){

    tip.innerText = ''
    splitTotal.innerText = `Split Total: $${newDinner.splitTotal()} + Split Tip: $${newDinner.splitTip()} =`
    totalTotal.innerText = `$${newDinner.splitTotal() + newDinner.splitTip()} per person`

  }

}
