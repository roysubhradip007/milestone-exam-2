const storedData = localStorage.getItem('selectedCard');
const title = document.getElementById('title');
const summary = document.getElementById('card-summary');
const image = document.getElementById('image')
const description = document.getElementById('description');
const deleteBtn = document.getElementById('deletebtn');
console.log(title, summary, image)
if (storedData) {
  const cardDetails = JSON.parse(storedData);
  console.log('Retrieved Title:', cardDetails.title);
  console.log('Retrieved Description:', cardDetails.summary);
  console.log('Retrieved Image Source:', cardDetails.image);
  console.log("description : ", cardDetails.description);

  if (title && summary && image) {
    title.innerText = cardDetails.title;
    summary.innerText = cardDetails.summary;
    image.src = cardDetails.image;
    description.innerText = cardDetails.description;
    
  } else {
    console.log('One or more elements are missing!');
  }

} else {
  console.log('No card data found in localStorage');
}

// deleteBtn.addEventListener('click', () => {
//   const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
//   const updateCards = storedCards.filter(card => card.title !== storedData.title)
//   localStorage.setItem('cards', updateCards);

//   storedData.remove();
//   window.location.href = './index.html'
// })
