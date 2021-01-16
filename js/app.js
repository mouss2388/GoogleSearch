const input = document.querySelector("input");
const btnClear = document.getElementsByClassName("clear");
const news = document.getElementById("dateNews");

input.oninput = handleInput;
getCurrentDate();

function handleInput(event) {
  event.preventDefault();
  if (input.value === "") {
    btnClear[0].classList.add("hidden");
  } else {
    btnClear[0].classList.remove("hidden");
    btnClear.item(0).addEventListener("click", () => {
      input.value = "";
      input.focus();
      btnClear[0].classList.add("hidden");
    });
  }
}

function getCurrentDate() {
  var today = new Date();
  var day = String(today.getDate()).padStart(2, "0");

  let monthIdx = today.getMonth();
  let monthsArray = new Array("Janvier", "Février");
  let month = monthsArray[monthIdx];

  let year = today.getFullYear();

  today = day + " " + month + " " + year;
  news.textContent = today;
  console.log(today);
}
