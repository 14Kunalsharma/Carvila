const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {
  const filter = this.value.toLowerCase();

  
  const carCards = document.querySelectorAll(".feature-column .col-3");

  carCards.forEach(card => {
    const carName = card.querySelector("h2 a").innerText.toLowerCase();

    if (carName.includes(filter)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
