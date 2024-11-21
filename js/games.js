function flipCard() {
    const image = card.querySelector('.game-image');
    image.style.transform = "rotateY(180deg)";
}

function unflipCard() {
    const image = card.querySelector('.game-image');
    image.style.transform = "rotateY(0deg)";
}

function filterGames(category) {
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        const gameCategory = card.getAttribute('data-category');
        if (gameCategory === category || category === 'All') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function resetFilters() {
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.style.display = 'block';
    });
}