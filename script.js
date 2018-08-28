var titleInput = document.querySelector('.title-input');
var urlInput = document.querySelector('.url-input');
var enterButton = document.querySelector('.enter-btn');
var cardSection = document.querySelector('.card-section');
var totalBookmarks = 0;
var readCounter = 0;
var unreadLinks = 0;
var backToRead = 0;

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
  totalBookmarks ++;
  clearInputs();
  checkInputs();
  unreadLinks = totalBookmarks - readCounter;
  console.log("# of unread bookmarks " + unreadLinks);
  console.log("# of read bookmarks " + readCounter)
  console.log("# of total bookmarks " + totalBookmarks);
  console.log("# of total backToRead " + backToRead);
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
    readCounter ++;
    // console.log(readCounter);
  } else if (event.target.classList.contains('read-clicked')) {
    event.target.classList.remove('read-clicked');
    event.target.parentNode.parentNode.classList.remove('article-clicked');
    event.target.classList.add('read-btn');
    readCounter --;
  }
  unreadLinks = totalBookmarks - readCounter;
  console.log("# of unread bookmarks " + unreadLinks);
  console.log("# of read bookmarks " + readCounter)
  console.log("# of total bookmarks " + totalBookmarks);
  console.log("# of total backToRead " + backToRead);
}

function deleteCard(event) {
  if (event.target.classList.contains('delete-btn')) {
    event.target.parentNode.parentNode.remove();
    totalBookmarks --;
  }
  unreadLinks = totalBookmarks - readCounter;
  console.log("# of unread bookmarks " + unreadLinks);
  console.log("# of read bookmarks " + readCounter)
  console.log("# of total bookmarks " + totalBookmarks);
  console.log("# of total backToRead " + backToRead);
}

function checkInputs() {
  if (titleInput.value === '' || urlInput.value === '') {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  }
}


//Unread totalBookmarks - Number of enters minus number of deletes minus number of reads

//Clear Read Bookmarks
  // - create a new <p>Clear Read Bookmarks</p>
  // - add a class to the p createElement
  // - create a variable for that p element. 
  // - add an addEventListener on click with the function deleteReadBookmarks
  // - create a function deleteReadBookmarks
  // - that function should target the p element and change the class of all 
  //   read bookmarks - maybe need to loop through and use the totalBookmarks as the i < this number
  //   this number being the number of times the enter button has been pressed.
