const ratingBox = document.querySelector('.rating-box');
const submissionBox = document.querySelector('.submission-box');
const submitButton = document.querySelector('.submit-button');
const ratingButton = document.querySelectorAll('.rating-button');
let rating = document.querySelector('#rating');

submitButton.addEventListener('click', () => {
  if (rating.innerHTML != '0'){
    submissionBox.classList.remove('display');
    ratingBox.style.display = 'none';
  }
});

ratingButton.forEach((button) => {
  button.addEventListener('click', () => {
    rating.innerHTML = button.innerHTML;
  })
});