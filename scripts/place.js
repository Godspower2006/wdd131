// scripts/place.js

// Static temperature (°C) and wind speed (km/h)
const temp = 30;
const speed = 12;

// One‑line wind chill formula (metric)
function calculateWindChill(T, V) {
  return 13.12 + 0.6215 * T - 11.37 * V**0.16 + 0.3965 * T * V**0.16;
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. Footer: current year & last modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

  // 2. Display static weather values
  document.getElementById("temperature").textContent = temp;
  document.getElementById("windSpeed").textContent = speed;

  // 3. Calculate & display wind chill only if conditions met
  const wcEl = document.getElementById("windChill");
  if (temp <= 10 && speed > 4.8) {
    wcEl.textContent = calculateWindChill(temp, speed).toFixed(1) + "°C";
  } else {
    wcEl.textContent = "N/A";
  }
});
