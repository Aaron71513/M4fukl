
// Update Time
function updateTime() {
    const now = new Date();
    document.getElementById('time').innerText = `Time: ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
}
setInterval(updateTime, 1000);
updateTime();

// Simulated Weather and Email Summary
document.getElementById('weather').innerText = "Weather: Sunny, 72°F";
document.getElementById('email-summary').innerText = "Email Summary: 3 new emails - 1 from Mom, 1 school notice, 1 newsletter";

// Simulated Spotify Status
let playing = false;
setInterval(() => {
    playing = !playing;
    document.getElementById('spotify-status').innerText = `Spotify: ${playing ? "Playing" : "Paused"}`;
}, 5000);
