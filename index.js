const mainContainer = document.querySelector(".main-container");
const thankContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById('submitButton');
const backButton = document.getElementById('backButton');
const rates = document.querySelectorAll('.rate-button');
const rating = document.getElementById('rating');

submitButton.onclick = () => {
  thankContainer.classList.remove("hidden");
  mainContainer.style.display = 'none';
}

backButton.onclick = () => {
  thankContainer.classList.add("hidden");
  mainContainer.style.display = 'block';
}

rates.forEach((e) => {
  e.onclick = () => {
    rating.innerHTML = e.innerHTML;
  }
})
