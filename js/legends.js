document.addEventListener("DOMContentLoaded", () => {
    fetchLeaderboard;
});

function fetchLeaderboard() {
    fetch('http://localhost:5000/api/points/leaderboard')
    .then(response => response.json())
    .then(data => renderLeaderboard(data))
    .catch(err => console.error("Error fetching leaderboard:", err));
}

function renderLeaderboard(data) {
    const leaderboardBody = document.querySelector("#leaderboard tbody");
    leaderboardBody.innerHTML = "";

    data.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.username}</td>
        <td>${user.points}</td>
        `;
        leaderboardBody.appendChild(row);
    });
}