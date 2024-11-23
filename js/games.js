let activeFilters = new Set(); // Set to store active filters

// Toggle filter when a button is clicked
function filterGames(category) {
    const gameCards = document.querySelectorAll('.game-card');

    // Add or remove the category from active filters
    if (activeFilters.has(category)) {
        activeFilters.delete(category); // Remove if already active
    } else {
        activeFilters.add(category); // Add if not active
    }

    // Update game cards based on active filters
    gameCards.forEach(card => {
        const gameCategory = card.getAttribute('data-category');
        if (
            activeFilters.size === 0 || // No active filters - show all
            activeFilters.has(gameCategory) // Show if matches any active filter
        ) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    updateFilterButtonStates(); 
}

// Reset all filters
function resetFilters() {
    activeFilters.clear(); // Clear all active filters

    // Show all game cards
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.style.display = 'block';
    });

    updateFilterButtonStates(); // Reset button appearance
}

// Update button styles to reflect active filters
function updateFilterButtonStates() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => {
        const category = button.textContent.trim();
        if (activeFilters.has(category)) {
            button.classList.add('active'); // Highlight active buttons
        } else {
            button.classList.remove('active'); // Remove highlight from inactive buttons
        }
    });
}

// Flip card effects
function flipCard(card) {
    const image = card.querySelector('.game-image');
    image.style.transform = "rotateY(180deg)";
}

function unflipCard(card) {
    const image = card.querySelector('.game-image');
    image.style.transform = "rotateY(0deg)";
}
