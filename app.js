const submit = document.querySelector(".btn-submit");
const modal = document.querySelector(".modal");
const card = document.querySelector(".card");
const btns = document.querySelectorAll(".btn");
const thanksText = document.querySelector(".thanks-text");

btns.forEach(function (button) {
  let rating = button.textContent;
  button.addEventListener("click", function () {
    if (rating) {
      thanksText.innerHTML = `you selected ${rating} out of 5`;
      button.style.backgroundColor = "white";
      submit.style.backgroundColor = "white";
      submit.addEventListener("click", function () {
        modal.classList.add("show-modal");
        card.style.display = "none";
      });
    }
  });
});
