const popup = document.getElementById("my-popup");
const openBtn = document.getElementById("add-score-popup");
const closeBtn = document.querySelector(".popup-close");
const addNameBtn = document.getElementById("add-name-btn");
const nameInput = document.getElementById("name-input");

openBtn.onclick = () => popup.style.display = "block";
closeBtn.onclick = () => popup.style.display = "none";
window.onclick = e => {
    if (e.target === popup) popup.style.display = "none";
};

addNameBtn.onclick = () => {
    const name = nameInput.value.trim();
    if (name === "") {
        alert("Name field is empty.");
        return;
    } 
    fetch("http://localhost/tech-first-assignment/backend/apis/add_score.php",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name})
    })
    .then(res => res.json())
    .then(data =>{
        console.log("Server response:", data);
        if(data.success){
            alert(`Welcome ${name}!`)
            popup.style.display = "none";
            nameInput.value = "";
        }else{
            alert("Error:" +data.error);
        }
    }).catch(err =>{
        console.error("Fetch error:", err);
        alert("Failed to connect to server.");
    });
    
};

document.addEventListener("DOMContentLoaded", () => {
    const playerslist = document.getElementById("players-list");

    fetch("http://localhost/tech-first-assignment/backend/apis/get_players.php")
        .then(response => response.json())
        .then(players => {
            if (players.length === 0) {
                playerslist.innerHTML = "<p>No players yet.</p>";
                return;
            }

            
            players.sort((a, b) => {
                if (b.score === a.score) {
                    return a.duration - b.duration;
                }
                return b.score - a.score;
            });

            let html = `
                <table border="1" cellpadding="8" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            players.forEach((player, index) => {
                html += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${player.user_name}</td>
                        <td>${player.score}</td>
                        <td>${player.duration}</td>
                    </tr>
                `;
            });

            html += `</tbody></table>`;
            playerslist.innerHTML = html;
        })
        .catch(error => {
            console.error("Error fetching players:", error);
            playerslist.innerHTML = "<p>Failed to load leaderboard.</p>";
        });
});
