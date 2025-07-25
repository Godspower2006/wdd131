// Static temperature (°C) and wind speed (km/h)
const temp = 30;
const speed = 12;

// One‑line wind chill formula (metric)
function calculateWindChill(T, V) {
  return 13.12 + 0.6215 * T - 11.37 * V**0.16 + 0.3965 * T * V**0.16;
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEl    = document.getElementById("year");
  const lastModEl = document.getElementById("lastModified");
  const tempEl    = document.getElementById("temperature");
  const windEl    = document.getElementById("windSpeed");
  const chillEl   = document.getElementById("windChill");

  // 1. Footer: current year & formatted last modified
  const now = new Date();
  yearEl.textContent = now.getFullYear();
  const modDate = new Date(document.lastModified);
  lastModEl.textContent = `Last Modified: ${modDate.toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' })}`;

  // 2. Display static weather values
  tempEl.textContent  = `${temp.toFixed(1)}°C`;
  windEl.textContent  = `${speed.toFixed(1)} km/h`;

  // 3. Calculate & display wind chill only when conditions met
  if (temp <= 10 && speed > 4.8) {
    chillEl.textContent = `${calculateWindChill(temp, speed).toFixed(1)}°C`;
  } else {
    chillEl.textContent = 'N/A';
  }
});