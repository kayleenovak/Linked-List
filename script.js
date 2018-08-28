var titleInput = document.querySelector('.title-input');
var urlInput = document.querySelector('.url-input');
var enterButton = document.querySelector('.enter-btn');
var cardSection = document.querySelector('.card-section');
var clearReadBtn = document.querySelector('.clear-read-links');
var totalBookmarksCounter = document.querySelector('.total-bookmarks');
var readBookmarksCounter = document.querySelector('.read-bookmarks');
var unreadBookmarksCounter = document.querySelector('.unread-bookmarks');
var totalBookmarks = 0;
var readBookmarks = 0;
var unreadBookmarks = 0;

enterButton.addEventListener('click', submitCard);
cardSection.addEventListener('click', markAsRead);
cardSection.addEventListener('click', deleteCard);
titleInput.addEventListener('keyup', checkInputs);
urlInput.addEventListener('keyup', checkInputs);
clearReadBtn.addEventListener('click', clearAllRead);

checkNumBookmarks();
checkUnreadBookmarks();
checkReadBookmarks();

function urlValidation(str) {
var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);
var url = str;

if (url.match(regex)) {
  return true
} else {
  alert('Input fields are invalid URL')
  return false;
}
}

function submitCard(event) {
  event.preventDefault();
  var urlInputVal = urlInput.value;
  console.log(urlInputVal);
  if (urlValidation(urlInputVal)) {
    createCard();
  } else {
    alert('Please Enter Valid URL');
  }
}

function createCard(event) {
  var newCard = document.createElement('article');
  newCard.innerHTML = `<h1 class="card-title">${titleInput.value}</h1>
                       <p class="card-url">${urlInput.value}</p>
                       <div class="button-wrapper">
                       <button class="read-btn card-buttons">Read</button>
                       <button class="delete-btn card-buttons">Delete</button>
                       </div>`;
  cardSection.prepend(newCard);
  clearInputs();
  checkInputs();
  checkNumBookmarks();
  checkUnreadBookmarks();
  checkReadBookmarks();
}

function clearInputs() {
  titleInput.value = '';
  urlInput.value = '';
}

// Add class change to card-url
function markAsRead(event) {
  if (event.target.classList.contains('read-btn')) {
    event.target.classList.add('read-clicked');
    event.target.parentNode.parentNode.classList.add('article-clicked');
    event.target.classList.remove('read-btn');
  } else if (event.target.classList.contains('read-clicked')) {
    event.target.classList.remove('read-clicked');
    event.target.parentNode.parentNode.classList.remove('article-clicked');
    event.target.classList.add('read-btn');
    }
  checkReadBookmarks();
  checkUnreadBookmarks();
}

function deleteCard(event) {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentNode.parentNode.remove();
  }
  checkNumBookmarks();
  checkReadBookmarks();
  checkUnreadBookmarks();
}

function checkInputs() {
  if (titleInput.value === '' || urlInput.value === '') {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  }
}

function checkNumBookmarks() {
  var totalNumBookmarks = document.querySelectorAll('.button-wrapper');
    totalBookmarks = totalNumBookmarks.length;
    totalBookmarksCounter.innerText = 'Total Bookmarks: ' + totalBookmarks;
}

function checkReadBookmarks() {
  var totalReadBookmarks = document.querySelectorAll('.read-clicked');
    readBookmarks = totalReadBookmarks.length;
    readBookmarksCounter.innerText = 'Read Bookmarks: ' + readBookmarks;
}

function checkUnreadBookmarks() {
  var totalUnreadBookmarks = document.querySelectorAll('.read-btn');
    unreadBookmarks = totalUnreadBookmarks.length;
    unreadBookmarksCounter.innerText = 'Unread Bookmarks: ' + unreadBookmarks;

}

function clearAllRead() {
  var totalReadBookmarks = document.querySelectorAll('.read-clicked');
  for (i = 0; i < totalReadBookmarks.length; i++) {
    totalReadBookmarks[i].parentNode.parentNode.remove();
  }
  checkNumBookmarks();
  checkReadBookmarks();
  checkUnreadBookmarks(); 
  console.log('Read bookmarks ' + readBookmarks);
  console.log('unread ' + unreadBookmarks);
  console.log('total bookmarks ' + totalBookmarks);
}