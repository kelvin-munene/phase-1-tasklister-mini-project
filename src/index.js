

// let list = document.getElementById("list")
// list.appendChild(div)

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener("submit", (event) =>{
    event.preventDefault()
    addList(event.target["new-task-description"].value)
    form.reset()
  })
});

function addList(input){
  let li = document.createElement('li')
	let btn = document.createElement('button')
	btn.textContent = 'x'
	btn.addEventListener('click', deleteList)
	li.textContent = `${input}  `
	document.querySelector('#list').appendChild(li)
	li.appendChild(btn)
  
}

function deleteList(event){
	event.target.parentNode.remove()
  }
