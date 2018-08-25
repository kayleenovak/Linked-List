var titleInput = document.querySelector('.title-input');
var urlInput = document.querySelector('.url-input');
var enterButton = document.querySelector('.enter-btn');
var cardSection = document.querySelector('.card-section');
counter = 0;

enterButton.addEventListener('click', createCard);
cardSection.addEventListener('click', markAsRead);
cardSection.addEventListener('click', deleteCard);
titleInput.addEventListener('keyup', checkInputs);
urlInput.addEventListener('keyup', checkInputs);


function createCard(event) {
  event.preventDefault();
  var newCard = document.createElement('article');
  newCard.innerHTML = `<h1 class="card-title">${titleInput.value}</h1>
                       <p class="card-url">${urlInput.value}</p>
                       <div class="button-wrapper">
                       <button class="read-btn card-buttons">Read</button>
                       <button class="delete-btn card-buttons">Delete</button>
                       </div>`;
  cardSection.prepend(newCard);
  counter ++;
  console.log(counter);
  clearInputs();
}

function clearInputs() {
  titleInput.value = '';
  urlInput.value = '';
}

// Add class change to card-url
function markAsRead(event) {
  console.log(event);
  if (event.target.classList.contains('read-btn')) {
    console.log('Yes');
    event.target.classList.remove('card-buttons');
    event.target.classList.add('read-clicked');
    event.target.parentNode.parentNode.classList.add('article-clicked');
    // event.target.
  }
}

function deleteCard(event) {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentNode.parentNode.remove();
  }
  counter --;
  console.log(counter);
}

function checkInputs() {
  if (titleInput.value === '' || urlInput.value === '') {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  }
  
}