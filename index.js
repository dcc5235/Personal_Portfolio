// VARIABLES
const modal = document.querySelectorAll(".modal");
const modalBtn = document.querySelectorAll(".modalBtn");
const closeBtn = document.querySelectorAll(".closeBtn");

// OPEN MODAL
modal.forEach(function (element) {
  modalBtn[0].onclick = function (event) {
    modal[0].style.display = "block";
  }
});

modalBtn[1].onclick = function (event) {
  modal[1].style.display = "block";
}

// CLOSE MODAL ON CLOSE BTN
closeBtn[0].onclick = function () {
  modal[0].style.display = "none";
}

closeBtn[1].onclick = function () {
  modal[1].style.display = "none";
}

// CLOSE MODAL ON WINDOW
window.onclick = function (event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  } else if (event.target == modal[1]) {
    modal[1].style.display = "none";
  }
}
