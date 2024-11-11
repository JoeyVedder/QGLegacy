const points = {
    instagram: 5,
    twitter: 5,
    donation: 10, 
    discord: 5,
    share: 5,
    newsletter: 5
};

let users = [];

document.getElementById("userActionsForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let userName = prompt("Enter your name:");

    let totalPoints = 0;

    if (document.getElementById("followInstagram").checked) {
        totalPoints += points.instagram;
    }
    if (document.getElementById("followTwitter").checked) {
        totalPoints += points.twitter;
    }
    if (document.getElementById("donationAmount").value > 0) {
        totalPoints += points.donation * document.getElementById("donationAmount").value;
    }
    if (document.getElementById("joinDiscord").checked) {
        totalPoints += points.discord;
    }
    if (document.getElementById("shareWebsite").checked) {
        totalPoints += points.share;
    }
    if (document.getElementById("signUpNewsletter").checked) {
        totalPoints += points.newsletter;
    }

    users.push({ name: userName, points: totalPoints });

    users.sort((a, b) => b.points - a.points);

    users = users.slice(0, 5);

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
