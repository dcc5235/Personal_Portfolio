const projectBtn = document.getElementById("projectBtn");
const testimonialBtn = document.getElementById("testimonialBtn");
const spaceBtn = document.getElementById("spaceBtn");


const projectModal = document.getElementById("projectModal");
const testimonialModal = document.getElementById("testimonialModal");
const spaceModal = document.getElementById("spaceModal");

// OPEN MODAL
projectBtn.addEventListener("click", function () {
  projectModal.style.display = "block";
});

testimonialBtn.addEventListener("click", function () {
  testimonialModal.style.display = "block";
});

spaceBtn.addEventListener("click", function () {
  spaceModal.style.display = "block";
});

// CLOSE MODAL
projectModal.addEventListener("click", function () {
  projectModal.style.display = "none";
});

testimonialModal.addEventListener("click", function () {
  testimonialModal.style.display = "none";
});

closeBtn.addEventListener("click", function () {
  spaceModal.style.display = "none";
});

