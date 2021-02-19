// VARIABLES
const modal = document.querySelectorAll(".modal");
const modalBtn = document.querySelectorAll(".modalBtn");
const closeBtn = document.querySelectorAll(".closeBtn");

// OPEN MODAL
for (let i = 0; i < modal.length; i++) {
  modalBtn[i].onclick = function () {
    modal[i].style.display = "block";
  }
}

// CLOSE MODAL ON CLOSE BTN
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].onclick = function () {
    modal[i].style.display = "none";
  }
}

// CLOSE MODAL ON WINDOW
window.onclick = function (event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  } else if (event.target == modal[1]) {
    modal[1].style.display = "none";
  }
}