const elements = {};

const chooseRating = () => {
  for (const rating of elements.ratingNumbers) {
    rating.addEventListener('click', () => {
      submitRating();
      elements.ratingSelected.innerText = rating.innerText;
    });
  }
};

const submitRating = () => {
  elements.submit.addEventListener('click', () => {
    elements.ratingPage.classList.toggle('display');
    elements.submissionPage.classList.toggle('display');
  });
};

const domModel = () => {
  elements.submit = document.querySelector('.submit-button');
  elements.ratingSelected = document.querySelector('#rating');
  elements.ratingPage = document.querySelector('.rating-box');
  elements.submissionPage = document.querySelector('.submission-box');
  elements.ratingNumbers = Array.from(document.querySelectorAll('.ratings buttons'));
};

const init = () => {
  domModel();
  chooseRating();
};

init();