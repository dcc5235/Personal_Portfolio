const modalBtn = document.getElementById("aboutBtn");
const toolboxBtn = document.getElementById("toolboxBtn");
const projectBtn = document.getElementById("projectBtn");
const testimonialBtn = document.getElementById("testimonialBtn");

const aboutModal = document.getElementById("aboutModal");
const toolboxModal = document.getElementById("toolboxModal");
const projectModal = document.getElementById("projectModal");
const testimonialModal = document.getElementById("testimonialModal");

const closeBtn = document.querySelector(".close");

// OPEN MODAL
modalBtn.addEventListener("click", function () {
  aboutModal.style.display = "block";
});

toolboxBtn.addEventListener("click", function () {
  toolboxModal.style.display = "block";
});

projectBtn.addEventListener("click", function () {
  projectModal.style.display = "block";
});

testimonialBtn.addEventListener("click", function () {
  testimonialModal.style.display = "block";
});

// CLOSE MODAL
aboutModal.addEventListener("click", function () {
  aboutModal.style.display = "none";
});

toolboxModal.addEventListener("click", function () {
  toolboxModal.style.display = "none";
});

projectModal.addEventListener("click", function () {
  projectModal.style.display = "none";
});

testimonialModal.addEventListener("click", function () {
  testimonialModal.style.display = "none";
});