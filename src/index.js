document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(toyData => {
      toyData.forEach(function(toyObj) {
        new Toy(toyObj)
        const allToys = document.getElementById('toy-collection')
        allToys.innerHTML += `<div class="card"> <h2>${toyObj.name}<h2>
      <img id=${toyObj.id} data-id="${toyObj.id}" src="${toyObj.image}" class="toy-avatar"/>
      <p id="likes">${toyObj.likes}</p>
      <button id="like-btn" class="like-btn">Like <3</button>
      </div>
      `
      })

    })
  const submitToy = document.getElementById('newToy')
  submitToy.addEventListener('click', function(event) {
    event.preventDefault()
    const grabName = document.getElementById('name').value
    const grabImage = document.getElementById('url').value
    fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: {
        name: grabName,
        image: grabImage,
        likes: 0

      }

    })

    const addToy = document.getElementById('toy-collection')
    addToy.innerHTML += `<div class="card">
        <h2>${grabName}<h2>
        <img src="${grabImage}" class="toy-avatar"/>
        <p id="likes">0</p>
        <button id="like-btn" class="like-btn">Like <3</button>
        </div>
  `
  })

  const addLikes = document.getElementById('toy-collection')
  addLikes.addEventListener('click', function(event) {
    if (event.target.className === 'like-btn') {
    let setId = event.target.parentElement.dataset.id
    let setLike = event.target.previousElementSibling
    let increaseLikes = parseInt(event.target.previousElementSibling.innerText)
    setLike.innerText = `${++increaseLikes} likes`
    }

    fetch(`http://localhost:3000/toys/${event.target.id}`, {
      method: 'PATCH',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        likes: increseLikes
      })
    }).then(res => res.json()).then(console.log)


  })






  const addBtn = document.querySelector('#new-toy-btn')
  const toyForm = document.querySelector('.container')
  let addToy = false

  // YOUR CODE HERE

  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
      // submit listener here
    } else {
      toyForm.style.display = 'none'
    }
  })


  // OR HERE!









})
