const footer = document.getElementById("dynamic-footer");

document.getElementById("about-btn").addEventListener("click", function () {
    footer.innerHTML = "Welcome to the About Section";
    footer.style.background = "blue";
    footer.style.color = "white";
  });

document.getElementById("services-btn").addEventListener("click", function () {
    footer.innerHTML = "You're in the Services Section";
    footer.style.background = "green";
    footer.style.color = "white";
  });