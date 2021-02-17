// Modal Buttons
const projectBtn = document.getElementById("projectBtn");
const testimonialBtn = document.getElementById("testimonialBtn");

// Modal
const projectModal = document.getElementById("projectModal");
const testimonialModal = document.getElementById("testimonialModal");

// OPEN MODAL
projectBtn.onclick = function () {
  projectModal.style.display = "block";
}

testimonialBtn.onclick = function () {
  testimonialModal.style.display = "block";
}

// CLOSE MODAL
window.onclick = function (event) {
  if (event.target == projectModal) {
    projectModal.style.display = "none";
  }
}

window.onclick = function (event) {
  if (event.target == testimonialModal) {
    testimonialModal.style.display = "none";
  }
}
