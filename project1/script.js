document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.card button');
  const addBtn = document.querySelector('.addBlog');
  const inputContainer = document.querySelector('.inputContainer');
  const removeInput = document.querySelector('.icon');
  const fadeBody = document.querySelector('.fade');
  const submit = document.querySelector(".btn");
  const cardContainer = document.querySelector('.cardContainer');

  addBtn.addEventListener('click', () => {
      fadeBody.style.display = "block";
      inputContainer.style.display = "block";
  });

  const storedata = localStorage.getItem('cards');
  if(storedata != null && storedata.length > 0){
    const cardData = JSON.parse(storedata);
    cardData.map((card) => createCard(card));
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      viewDetailButton(button);
    })
  })

  submit.addEventListener('click', () => {
      const imageUrl = document.querySelector('.imageUrl');
      const newTitle = document.querySelector('.newTitle');
      const newSummary = document.querySelector('.newDescription');
      const newDescription = document.querySelector('.newContent');

      const image = imageUrl.value.trim();
      const title = newTitle.value.trim();
      const summary = newSummary.value.trim();
      const description = newDescription.value.trim();

      let isValid = true;

      if (image === "") {
          imageUrl.setCustomValidity("This field is required.");
          imageUrl.reportValidity();
          isValid = false;
      } else {
          imageUrl.setCustomValidity("");
      }

      if (title === "") {
          newTitle.setCustomValidity("This field is required.");
          newTitle.reportValidity();
          isValid = false;
      } else {
          newTitle.setCustomValidity("");
      }

      if (summary === "") {
          newSummary.setCustomValidity("This field is required.");
          newSummary.reportValidity();
          isValid = false;
      } else {
          newSummary.setCustomValidity("");
      }

      if (description === "") {
          newDescription.setCustomValidity("This field is required.");
          newDescription.reportValidity();
          isValid = false;
      } else {
          newDescription.setCustomValidity("");
      }

      if (!isValid) return;

      const cardData = { image, title, summary, description };

      const cards = JSON.parse(localStorage.getItem('cards')) || [];
      cards.push(cardData);
      localStorage.setItem('cards', JSON.stringify(cards));

      createCard(cardData);

      imageUrl.value = "";
      newTitle.value = "";
      newSummary.value = "";
      newDescription.value = "";
      inputContainer.style.display = "none";
      fadeBody.style.display = "none";
  });

  removeInput.addEventListener('click', () => {
      const imageUrl = document.querySelector('.imageUrl');
      const newTitle = document.querySelector('.newTitle');
      const newSummary = document.querySelector('.newDescription');
      const newDescription = document.querySelector('.newContent');

      imageUrl.value = "";
      newTitle.value = "";
      newSummary.value = "";
      newDescription.value = "";

      inputContainer.style.display = "none";
      fadeBody.style.display = "none";
  });

  function createCard(cardData) {
      const newCard = document.createElement('div');
      newCard.className = "card";

      const img = document.createElement('img');
      img.src = cardData.image;

      const heading = document.createElement('h3');
      heading.innerText = cardData.title;

      const div = document.createElement('div');
      const summaryPara = document.createElement('p');
      summaryPara.innerText = cardData.summary;

      const para = document.createElement('p');
      para.className = "description";
      para.innerText = cardData.description;

      const button = document.createElement('button');
      button.innerText = "Read";
      button.addEventListener('click', () => viewDetails(cardData));

      div.appendChild(summaryPara);

      newCard.appendChild(img);
      newCard.appendChild(heading);
      newCard.appendChild(div);
      newCard.appendChild(para);
      newCard.appendChild(button);

      cardContainer.appendChild(newCard);
  }

  function viewDetailButton(button) {
    const card = button.closest('.card')
    const image = card.querySelector('img').src;
    const title = card.querySelector('h3').innerText;
    const summary = card.querySelector('div > p').innerText;
    const description = card.querySelector('.description').innerText;

    const cardDetails = { title, summary, image, description};
    localStorage.setItem('selectedCard', JSON.stringify(cardDetails));
    window.location.href = './blog.html';
  }

  function viewDetails(cardData) {
      localStorage.setItem('selectedCard', JSON.stringify(cardData));
      window.location.href = './blog.html';
  }
});
