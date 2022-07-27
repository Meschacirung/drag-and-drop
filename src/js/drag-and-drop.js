let foods = document.querySelectorAll('.food')
let dropZones = document.querySelectorAll('.menu')
let focusFood = null

foods.forEach(food =>{
  food.addEventListener("dragstart", ()=>{
    focusFood = food;
    food.classList.add("shadow-xl")
  })

  food.addEventListener("dragend", ()=>{
    food.classList.remove("shadow-xl")
  })
})

dropZones.forEach(dropZone =>{
  dropZone.addEventListener('drop', (e)=>{
    e.preventDefault()
    dropZone.append(focusFood)
    dropZone.parentElement.classList.remove('before:scale-105')
  })
})

dropZones.forEach(dropZone =>{
  dropZone.addEventListener('dragover', (e)=>{
    e.preventDefault()
    dropZone.parentElement.classList.add('before:scale-105')
    dropZone.removeChild(focusFood)
  })
})

dropZones.forEach(dropZone =>{
  dropZone.addEventListener('dragleave', (e)=>{
    e.preventDefault()
    dropZone.parentElement.classList.remove('before:scale-105')
  })
})