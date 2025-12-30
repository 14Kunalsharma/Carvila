const searchInput = document.getElementById('search-input');
const featuredCars = document.querySelectorAll('.single-featured-car');

searchInput.addEventListener('keyup', function () {
    const query = this.value.toLowerCase();
    featuredCars.forEach(car => {
        const carName = car.querySelector('h2 a').textContent.toLowerCase();
        if (carName.includes(query)) {
            car.style.display = 'block';
        } else {
            car.style.display = 'none';
        }
    });
});
