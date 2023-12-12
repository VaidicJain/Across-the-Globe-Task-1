function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

const signIn = document.querySelector(".signIn");
const joinIn = document.querySelector(".joinIn");
const signInForm = document.querySelector(".signInForm");
const joinInForm = document.querySelector(".joinInForm");

signIn.addEventListener("click", () => {
  signInForm.style.display = "block";
  joinInForm.style.display = "none";
  signIn.style.color = "#8064a2";
  signIn.style.textDecoration = "underline";
  joinIn.style.color = "#939CA3";
  joinIn.style.textDecoration = "none";
});
joinIn.addEventListener("click", () => {
  signInForm.style.display = "none";
  joinInForm.style.display = "block";
  joinIn.style.color = "#8064a2";
  joinIn.style.textDecoration = "underline";
  signIn.style.color = "#939CA3";
  signIn.style.textDecoration = "none";
});

const addBtn = document.querySelector(".addBtn");
const addBox = document.querySelector(".addBox");
const listingBox = document.querySelector(".listingBox");
addBtn.addEventListener("click", () => {
  addBox.style.display = "none";
  listingBox.style.display = "flex";
});
