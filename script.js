// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simulate leaderboard updates (randomize scores every 5 seconds)
function updateLeaderboard() {
    const rows = document.querySelectorAll('#leaderboard-table tbody tr');
    rows.forEach(row => {
        const scoreCell = row.cells[2];
        const currentScore = parseInt(scoreCell.textContent);
        const newScore = currentScore + Math.floor(Math.random() * 1000 - 500); // Random change
        scoreCell.textContent = Math.max(0, newScore); // Ensure non-negative
    });
}

setInterval(updateLeaderboard, 5000); // Update every 5 seconds

// Button click effects (e.g., alert for demo)
document.getElementById('search-btn').addEventListener('click', () => {
    alert('Search feature coming soon!');
});

document.getElementById('cta-btn').addEventListener('click', () => {
    document.querySelector('#trending').scrollIntoView({ behavior: 'smooth' });
});