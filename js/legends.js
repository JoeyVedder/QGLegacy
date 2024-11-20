// Need Instagram API and Stripe API to have this work properly, will keep the code so we dont forget whats supposed to happen lol 
const points = {
    instagram: 5,
    twitter: 5,
    donation: 10, 
    discord: 5,
    share: 5,
    newsletter: 5
};

// Load existing users from localStorage
let users = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("userActionsForm").addEventListener("submit", function(event) {
    event.preventDefault();

    if (!loggedInUser) {
        alert("Please sign in to earn points.");
        return;
    }

    let totalPoints = 0;

    if (document.getElementById("followInstagram").checked) {
        totalPoints += points.instagram;
    }
    if (document.getElementById("donationAmount").value > 0) {
        totalPoints += points.donation * document.getElementById("donationAmount").value;
    }
    if (document.getElementById("joinDiscord").checked) {
        totalPoints += points.discord;
    }
    if (document.getElementById("signUpNewsletter").checked) {
        totalPoints += points.newsletter;
    }

    // Find user and update their points
    let user = users.find(u => u.name === loggedInUser);
    if (user) {
        user.points += totalPoints;
    } else {
        users.push({ name: loggedInUser, points: 5 + totalPoints }); // 5 points for signing up
    }

    users.sort((a, b) => b.points - a.points);
    users = users.slice(0, 15); // Keep top 15 users
    localStorage.setItem("users", JSON.stringify(users)); // Save to localStorage

    updateScoreboard();
});

function updateScoreboard() {
    let scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = "<tr><th>Name</th><th>Points</th></tr>";

    users.forEach(user => {
        let row = scoreboard.insertRow();
        let nameCell = row.insertCell(0);
        let pointsCell = row.insertCell(1);

        nameCell.textContent = user.name;
        pointsCell.textContent = user.points;
    });
}
