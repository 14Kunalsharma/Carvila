const searchInput = document.getElementById('search-input');
const cards = document.querySelectorAll('#feature-cards .card-item');

searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    cards.forEach(card => {
        const title = card.querySelector('h2').innerText.toLowerCase();
        if (title.includes(query)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});
