const panels = document.querySelectorAll(".panels");

panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    removeActiveClass();
    panel.classList.add("active");
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
